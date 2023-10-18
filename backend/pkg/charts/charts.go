package charts

import (
	"errors"
	"fmt"
	"net/http"
	"strings"

	"github.com/blang/semver/v4"
	"github.com/gin-gonic/gin"
)

var store ChartStore = NewChartStore()

func RegisterChartRoutes(e *gin.Engine) {

	e.GET("/api/alpha/charts", charts)
	e.GET("/api/alpha/chart/:name/revisions", revisions)
	e.GET("/api/alpha/chart/:name/revision/:semanticVersion", revision)
	e.POST("/api/alpha/chart/:name/revision", createRevision)
	e.POST("/api/alpha/chart", createChart)
	e.DELETE("/api/alpha/chart/:name", deleteChart)
	e.DELETE("/api/alpha/chart/:name/revision/:semanticVersion", deleteRevision)
}

// charts lists all charts available
//
//	@Summary		create a new revision of the chart
//	@Tags			charts
//	@Accept			json
//	@Produce		json
//	@Success		200		{array}		string
//	@Failure		400		{object}	ApiError
//	@Failure		404		{object}	ApiError
//	@Failure		500		{object}	ApiError
//	@Router			/api/alpha/charts [get]
func charts(c *gin.Context) {

	c.JSON(http.StatusOK, store.ReadAllCharts())
}

// revisions lists all revisions of a chart
//
//	@Summary		create a new revision of the chart
//	@Tags			charts
//	@Accept			json
//	@Produce		json
//	@Param			name		path		string				true	"name of the chart"
//	@Success		200		{array}		string
//	@Failure		400		{object}	ApiError
//	@Failure		404		{object}	ApiError
//	@Failure		500		{object}	ApiError
//	@Router			/api/alpha/chart/{name}/revisions [get]
func revisions(c *gin.Context) {

	chartName := c.Param("name")
	if strings.EqualFold(chartName, "") {
		c.JSON(http.StatusBadRequest, errors.New("chart name not specified"))
		return
	}

	c.JSON(http.StatusOK, store.ReadAllRevisions(chartName))
}

// revision reads a revision of a chart
//
//	@Summary		create a new revision of the chart
//	@Tags			charts
//	@Accept			json
//	@Produce		json
//	@Param			name				path		string				true	"name of the chart"
//	@Param			semanticVersion		path		string				true	"version of the revision"
//	@Success		200		{array}		string
//	@Failure		400		{object}	ApiError
//	@Failure		404		{object}	ApiError
//	@Failure		500		{object}	ApiError
//	@Router			/api/alpha/chart/{name}/revision/{semanticVersion} [get]
func revision(c *gin.Context) {

	chartName := c.Param("name")
	semanticVersion := c.Param("semanticVersion")
	if strings.EqualFold(chartName, "") && strings.EqualFold(semanticVersion, "") {
		c.JSON(http.StatusBadRequest, errors.New("chart name or semantic version not specified"))
		return
	}

	semVerString := pathVersionToSemVerString(semanticVersion)
	v, err := semver.Parse(semVerString)
	if err != nil {
		c.JSON(http.StatusBadRequest, errors.New("malformed semantic version"))
		return
	}

	rev, err := store.ReadRevision(chartName, v)
	if err != nil {
		c.JSON(http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, rev.Configuration)
}

// createRevision creates a new revision of the chart
//
//	@Summary		create a new revision of the chart
//	@Tags			charts
//	@Accept			json
//	@Produce		json
//	@Param			name		path		string				true	"name of the chart"
//	@Param 			Revision 	body 		Revision 			true	"revision object to be created"
//	@Success		200		{object}	Revision
//	@Failure		400		{object}	ApiError
//	@Failure		404		{object}	ApiError
//	@Failure		500		{object}	ApiError
//	@Router			/api/alpha/chart/{name}/revision [post]
func createRevision(c *gin.Context) {

	chartName := c.Param("name")
	revision := new(Revision)
	err := c.BindJSON(revision)

	if err != nil || strings.EqualFold(chartName, "") {
		fmt.Println(err)
		c.JSON(http.StatusBadRequest, errors.New("invalid body or chart name not specified"))
		return
	}

	rev, err := store.CreateRevision(chartName, *revision)
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, errors.New("failed creating revision"))
		return
	}

	c.JSON(http.StatusOK, rev)
}

// deleteRevision deletes a new revision of the chart
//
//	@Summary		deletes an existing revision of the chart
//	@Tags			charts
//	@Accept			json
//	@Produce		json
//	@Param			name				path		string				true	"name of the chart"
//	@Param			semanticVersion		path		string				true	"semantic version of the revision to be deleted"
//	@Success		200		{object}	Revision
//	@Failure		400		{object}	ApiError
//	@Failure		404		{object}	ApiError
//	@Failure		500		{object}	ApiError
//	@Router			/api/alpha/chart/{name}/revision/{semanticVersion} [delete]
func deleteRevision(c *gin.Context) {

	chartName := c.Param("name")
	semanticVersion := c.Param("semanticVersion")
	if strings.EqualFold(chartName, "") && strings.EqualFold(semanticVersion, "") {
		c.JSON(http.StatusBadRequest, errors.New("chart name or semantic version not specified"))
		return
	}

	err := store.DeleteRevision(chartName, Revision{
		SemVer:        semanticVersion,
		Configuration: Configuration{},
	})

	if err != nil {
		c.JSON(http.StatusInternalServerError, err.Error())
		return
	}

	c.Status(http.StatusOK)
}

// createChart creates an empty chart.
//
//	@Summary		creates an empty chart.
//	@Tags			charts
//	@Produce		json
//	@Param 			Chart 	body 		Chart 			true	"creates chart"
//	@Success		200		{object}	Chart
//	@Failure		400		{object}	ApiError
//	@Failure		404		{object}	ApiError
//	@Failure		500		{object}	ApiError
//	@Router			/api/alpha/chart [post]
func createChart(c *gin.Context) {

	chart := new(Chart)
	err := c.BindJSON(chart)

	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusBadRequest, err)
		return
	}

	err = store.CreateChart(*chart)
	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, errors.New("failed creating chart"))
		return
	}

	c.JSON(http.StatusOK, chart)
}

// deleteChart will delete a chart. Be aware that this will also delete all revisions.
//
//	@Summary		deletes a chart and all its revisions.
//	@Tags			charts
//	@Produce		json
//	@Success		200
//	@Failure		400		{object}	ApiError
//	@Failure		404		{object}	ApiError
//	@Failure		500		{object}	ApiError
//	@Router			/api/alpha/chart/{name} [delete]
func deleteChart(c *gin.Context) {

	chartName := c.Param("name")
	if strings.EqualFold(chartName, "") {
		c.JSON(http.StatusBadRequest, errors.New("chart name not specified"))
		return
	}

	err := store.DeleteChart(chartName)

	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, errors.New("failed deleting revision"))
		return
	}

	c.Status(http.StatusOK)
}
