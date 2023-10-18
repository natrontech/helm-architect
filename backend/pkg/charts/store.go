package charts

import (
	"errors"
	"io/fs"
	"os"
	"path/filepath"

	"github.com/blang/semver/v4"
	"gopkg.in/yaml.v2"
)

const CHART_BASE_ENV = "HELM_ARCHITECT_CHARTS_PATH"
const REVISION_CHART_FILE_NAME = "Chart.yaml"
const REVISION_VALUES_FILE_NAME = "values.yaml"
const REVISION_TEMPLATES_DIR_NAME = "templates"
const REVISION_INCLUDES_FILE_NAME = "includes.yaml"
const REVISION_SUBDIR = "revisions"
const SEMVER_SEPARATOR = "__"

// specifies the interface to store revisions of helm charts
type ChartStore interface {
	CreateChart(Chart) error
	ReadAllCharts() []string
	DeleteChart(string) error

	CreateRevision(string, Revision) (Revision, error)
	ReadRevision(string, semver.Version) (Revision, error)
	ReadAllRevisions(string) []string
	UpdateRevision(string, Revision) error
	DeleteRevision(string, Revision) error
}

type FsChartStore struct {
	BasePath string
}

func NewChartStore() ChartStore {

	store := new(FsChartStore)

	store.BasePath = EnvOrPanic(CHART_BASE_ENV)

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

	revisionPath := cs.revisionDirPath(chartName, revision.Version())

	if FileExists(revisionPath) {
		return Revision{}, errors.New("revision " + revision.SemVer + " already exists")
	}

	err := DirCreate(revisionPath)
	if err != nil {
		return Revision{}, errors.New("failed creating revision")
	}

	templatesPath := filepath.Join(revisionPath, REVISION_TEMPLATES_DIR_NAME)
	chartPath := filepath.Join(revisionPath, REVISION_CHART_FILE_NAME)
	includesPath := filepath.Join(templatesPath, REVISION_INCLUDES_FILE_NAME)
	valuesPath := filepath.Join(revisionPath, REVISION_VALUES_FILE_NAME)

	err = DirCreate(templatesPath)
	if err != nil {
		return Revision{}, errors.New("charts template directory could not be written")
	}
	ok := FileWrite(chartPath, ChartYamlTemplate)
	if !ok {
		return Revision{}, errors.New("chart.yaml could not be written")
	}
	vals := ChartYamlTemplateValues{
		ChartName:       chartName,
		SemanticVersion: revision.Version().String(),
	}
	ParseReplaceWrite(chartPath, vals)
	ok = FileWrite(includesPath, IncludesTemplate)
	if !ok {
		return Revision{}, errors.New("includes.yaml could not be written")
	}

	err = WriteYaml(valuesPath, revision.Configuration)
	if err != nil {
		return Revision{}, nil
	}

	return revision, nil
}

func (cs *FsChartStore) ReadAllRevisions(chartName string) []string {

	chartPath := filepath.Join(cs.BasePath, chartName)

	ents, err := entries(chartPath)
	if err != nil {
		return make([]string, 0)
	}

	files := Filter(ents, func(e fs.DirEntry) bool {
		if e.Type().IsDir() {
			_, err := semver.Parse(e.Name())
			if err != nil {
				return true
			}
		}
		return false
	})

	versions := Map(files, func(e fs.DirEntry) string {
		v, _ := semver.Parse(e.Name())
		return v.String()
	})

	return versions
}

func (cs *FsChartStore) ReadRevision(chartName string, v semver.Version) (Revision, error) {

	conf := new(Configuration)
	valuesFiles := filepath.Join(cs.revisionDirPath(chartName, v), REVISION_VALUES_FILE_NAME)

	if !FileExists(valuesFiles) {
		return Revision{}, errors.New("revision '" + v.String() + "' does not exist")
	}

	err := ReadYaml(valuesFiles, conf)
	if err != nil {
		return Revision{}, err
	}

	return Revision{
		SemVer:        v.String(),
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

	return DirDelete(cs.revisionDirPath(chartName, v))
}

func (cs *FsChartStore) revisionDirPath(chartName string, v semver.Version) string {

	return filepath.Join(cs.BasePath, chartName, v.String())
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
