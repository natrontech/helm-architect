package releases

import (
	"errors"
	"fmt"
	"os"
	"path/filepath"

	helmclient "github.com/Joel-Haeberli/go-helm-client"
	"github.com/blang/semver/v4"
	"github.com/natrontech/helmarchitect/backend/internal/utils"
	"github.com/natrontech/helmarchitect/backend/pkg/charts"
	helmrepo "helm.sh/helm/v3/pkg/repo"
)

type DependentHelmRepository struct {
	Name string // : "bedag",
	URL  string //  "https://bedag.github.io/helm-charts",
}

type ChartReleaseOptions struct {
	RevisionSemVer          string
	OciRegistryHostname     string
	OciRegistryChartUrl     string
	OciRegistryUsername     string
	OciRegistryPassword     string
	DependentHelmRepository []DependentHelmRepository

	passwordFromStdinOpt  bool
	passCredentialsAll    bool
	forceUpdate           bool
	allowDeprecatedRepos  bool
	certFile              string
	keyFile               string
	caFile                string
	insecureSkipTLSverify bool
	repoFile              string
	repoCache             string
}

// Release triggers the helm release process which implements following steps:
//  1. helm repo add dep-name dep-url
//  2. helm repo update
//  3. helm dependency build ./**
//  4. helm package ./**
//  5. helm push tgz
func HelmRelease(chartName string, helmReleaseOpts *ChartReleaseOptions) error {

	// check that version is valid and present
	version := semver.MustParse(helmReleaseOpts.RevisionSemVer)
	_, err := charts.Store.ReadRevision(chartName, version)
	if err != nil {
		return errors.New("unable to find requested revision")
	}

	revisionPath := filepath.Join(utils.EnvOrPanic(charts.CHART_BASE_ENV), chartName, version.String())

	// prepare tmp directory
	wd, err := os.Getwd()
	if err != nil {
		return err
	}
	helmReleaseTempDir := filepath.Join(wd, "helmtemp")
	clean := func() {
		fmt.Println("executing tmp release cleanup")
		if err := utils.DirDelete(helmReleaseTempDir); err != nil {
			fmt.Println(err.Error())
		}
	}
	defer clean()

	err = utils.DirCreate(helmReleaseTempDir)
	if err != nil {
		return err
	}

	err = utils.DirCreate(filepath.Join(helmReleaseTempDir, chartName))
	if err != nil {
		return err
	}

	tmpRevisionPath := filepath.Join(helmReleaseTempDir, chartName, version.String())
	tmpRevisionPath, err = utils.DirCopy(revisionPath, tmpRevisionPath)
	if err != nil {
		return err
	}

	c, err := helmclient.New(
		&helmclient.Options{
			Namespace: "helm-architect",
			Debug:     true,
			DebugLog:  func(format string, v ...interface{}) { fmt.Fprintf(os.Stdout, format, v...) },
			Linting:   true,
		},
	)

	helmClient, ok := c.(*helmclient.HelmClient)
	if !ok {
		return errors.New("expected helm client instance")
	}

	if err != nil {
		fmt.Println("failed creating helmclient", err.Error())
		return err
	}

	for _, dependency := range helmReleaseOpts.DependentHelmRepository {

		if err := helmClient.AddOrUpdateChartRepo(helmrepo.Entry{
			Name: dependency.Name,
			URL:  dependency.URL,
		}); err != nil {
			fmt.Println("failed adding repo", err.Error())
			return err
		}
	}

	if err := helmClient.UpdateChartRepos(); err != nil {
		fmt.Println("failed updating repo", err.Error())
		return err
	}

	if err := helmClient.DependencyBuild(tmpRevisionPath, nil); err != nil {
		fmt.Println("failed building dependencies of chart", err.Error())
		return err
	}
	fmt.Println("dependencies built")

	packagePath, err := helmClient.Package(tmpRevisionPath, nil)
	if err != nil {
		fmt.Println("failed packaging chart:", err.Error())
		return err
	}
	cleanPackage := func() {
		fmt.Println("removing package: ", packagePath)
		utils.FileDelete(packagePath)
	}
	defer cleanPackage()

	fmt.Println("chart is packaged:", packagePath)

	helmClient.RegistryLogin(helmReleaseOpts.OciRegistryHostname, helmclient.RegistryLoginOptions{
		Username:             helmReleaseOpts.OciRegistryUsername,
		Password:             helmReleaseOpts.OciRegistryPassword,
		PasswordFromStdinOpt: false,
		CertFile:             "",
		KeyFile:              "",
		CaFile:               "",
		Insecure:             true,
	})

	return helmClient.Push(packagePath, helmReleaseOpts.OciRegistryChartUrl, helmclient.RegistryPushOptions{
		CertFile:              "",
		KeyFile:               "",
		CaFile:                "",
		InsecureSkipTLSverify: true,
		PlainHTTP:             true,
		Cfg:                   helmClient.ActionConfig,
	})
}
