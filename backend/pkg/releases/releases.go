package releases

import (
	"errors"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

func RegisterChartRoutes(e *gin.Engine) {

	e.POST("/api/alpha/release/:chartName", release)
}

// release creates a new helm release and publishes it to given registry.
//
// @Summary		creates a new helm release and publishes it to given registry.
// @Tags		charts
// @Accept		json
// @Produce		json
// @Param		chartName				path		string				true	"name of the chart"
// @Param		releaseConfiguration 	body		ChartReleaseOptions	true	"semantic version of the chart"
// @Success		200		{object}	string
// @Failure		400		{object}	utils.ApiError
// @Failure		404		{object}	utils.ApiError
// @Failure		500		{object}	utils.ApiError
// @Router			/api/alpha/release/{chartName} [post]
func release(c *gin.Context) {

	chartName := c.Param("chartName")
	if strings.EqualFold(chartName, "") {
		c.JSON(http.StatusBadRequest, errors.New("chart name not specified"))
		return
	}

	chartReleaseOptions := new(ChartReleaseOptions)
	err := c.BindJSON(chartReleaseOptions)
	if err != nil {
		c.JSON(http.StatusBadRequest, errors.New("unable to parse chart release options"))
		return
	}

	err = HelmRelease(chartName, chartReleaseOptions)
	if err != nil {
		c.JSON(http.StatusInternalServerError, "unable to release chart: "+err.Error())
		return
	}

	c.Status(http.StatusOK)
}
