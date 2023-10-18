package charts

import (
	"errors"
	"io/fs"
	"os"
	"path/filepath"
	"strings"

	"github.com/blang/semver/v4"
	"gopkg.in/yaml.v2"
)

const CHART_BASE_ENV = "HELM_ARCHITECT_CHARTS_PATH"
const REVISION_SUBDIR = "revisions"
const SEMVER_SEPARATOR = "__"

// specifies the interface to store revisions of helm charts
type ChartStore interface {
	CreateChart(Chart) error
	ReadAllCharts() []string
	DeleteChart(string) error

	CreateRevision(string, Revision) (Revision, error)
	ReadRevision(string, string) (Revision, error)
	ReadAllRevisions(string) []string
	UpdateRevision(string, Revision) error
	DeleteRevision(string, Revision) error
}

type FsChartStore struct {
	BasePath              string
	relativeRevisionsPath string // path relative to specific chart path to find revisions (NOT relative to the basePath)
}

func NewChartStore() ChartStore {

	store := new(FsChartStore)

	store.BasePath = EnvOrPanic(CHART_BASE_ENV)
	store.relativeRevisionsPath = REVISION_SUBDIR

	return store
}

func (cs *FsChartStore) CreateChart(chart Chart) error {

	chartPath := filepath.Join(cs.BasePath, chart.Name)
	if FileExists(chartPath) {

		return errors.New("chart " + chart.Name + " already exists")
	}

	return DirCreate(chartPath)
}

func (cs *FsChartStore) ReadAllCharts() []string {

	return entriesNames(cs.BasePath)
}

func (cs *FsChartStore) DeleteChart(name string) error {

	return DirDelete(filepath.Join(cs.BasePath, name))
}

func (cs *FsChartStore) CreateRevision(chartName string, revision Revision) (Revision, error) {

	revisionPath := cs.revisionFilePath(chartName, revision.Version())

	if FileExists(revisionPath) {
		return Revision{}, errors.New("revision " + revision.SemVer + " already exists")
	}

	err := WriteYaml(revisionPath, revision)
	if err != nil {
		return Revision{}, nil
	}

	return revision, nil
}

func (cs *FsChartStore) ReadAllRevisions(chartName string) []string {

	chartPath := filepath.Join(cs.BasePath, chartName, cs.relativeRevisionsPath)

	ents, err := entries(chartPath)
	if err != nil {
		return make([]string, 0)
	}

	files := Filter(ents, func(e fs.DirEntry) bool {
		if e.Type().IsRegular() && strings.Contains(e.Name(), SEMVER_SEPARATOR) {
			version := strings.Split(e.Name(), SEMVER_SEPARATOR)[0]
			_, err := semver.Parse(version)
			if err != nil {
				return true
			}
		}
		return false
	})

	versions := Map(files, func(e fs.DirEntry) string {
		version := strings.Split(e.Name(), SEMVER_SEPARATOR)[0]
		v, _ := semver.Parse(version)
		return v.String()
	})

	return versions
}

// the semanticVersion MUST be parsable by semver lib.
func (cs *FsChartStore) ReadRevision(chartName string, semanticVersion string) (Revision, error) {

	v, err := semver.Parse(semanticVersion)
	if err != nil {
		return Revision{}, nil
	}

	cs.revisionFilePath(chartName, v)

	conf := new(Configuration)
	err = ReadYaml(cs.revisionFilePath(chartName, v), conf)
	if err != nil {
		return Revision{}, err
	}

	return Revision{
		SemVer:        semVerToPathString(v),
		Configuration: *conf,
	}, nil
}

// currently we expect that each update creates a new revision (new version).
// this is why this method just delegates to create revision. It assumes, that the
// supplied revisions version was already set correct in advance.
func (cs *FsChartStore) UpdateRevision(chartName string, revision Revision) error {

	_, err := cs.CreateRevision(chartName, revision)
	return err
}

func (cs *FsChartStore) DeleteRevision(chartName string, revision Revision) error {

	v, err := semver.Parse(revision.SemVer)
	if err != nil {
		return err
	}

	FileDelete(cs.revisionFilePath(chartName, v))

	return nil
}

func (cs *FsChartStore) revisionFilePath(chartName string, semVer semver.Version) string {

	return filepath.Join(cs.BasePath, chartName, cs.relativeRevisionsPath, semVerToPathString(semVer)+SEMVER_SEPARATOR+chartName)
}

func (cs *FsChartStore) revisionFromFile(chartName string, fileName string) (Revision, error) {

	if !strings.Contains(fileName, SEMVER_SEPARATOR) {
		return Revision{}, errors.New("invalid revision filename '" + fileName + "'")
	}
	semVer := semver.MustParse(strings.Split(fileName, SEMVER_SEPARATOR)[0])

	conf := new(Configuration)
	err := ReadYaml(filepath.Join(cs.BasePath, chartName, cs.relativeRevisionsPath, fileName), conf)
	if err != nil {
		return Revision{}, err
	}

	return Revision{
		SemVer:        semVerToPathString(semVer),
		Configuration: *conf,
	}, nil
}

func WriteYaml(path string, v interface{}) error {

	ymlRdr, err := FileOpen(path, os.O_WRONLY|os.O_CREATE)
	if err != nil {
		return err
	}

	err = yaml.NewEncoder(ymlRdr).Encode(v)
	if err != nil {
		return err
	}

	return nil
}

func ReadYaml(path string, v interface{}) error {

	ymlRdr, err := FileOpen(path, os.O_RDONLY)
	if err != nil {
		return err
	}

	err = yaml.NewDecoder(ymlRdr).Decode(v)
	if err != nil {
		return err
	}

	return nil
}
