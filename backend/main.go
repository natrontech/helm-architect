package main

import (
	"fmt"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/natrontech/helmarchitect/backend/internal/utils"
	"github.com/natrontech/helmarchitect/backend/pkg/charts"
	"github.com/natrontech/helmarchitect/backend/pkg/releases"

	// do not change order of the three following imports. It would break stuff.
	_ "github.com/natrontech/helmarchitect/backend/docs" // This line is necessary for swagger to find your docs!

	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

// @title		Helm Architect Core API
// @version		alpha
// @description	The helm architect api serves the core features of the helm architect.
//
// @license.name	Apache 2.0
// @license.url		http://www.apache.org/licenses/LICENSE-2.0.html
//
// @schemes 	http
// @host		0.0.0.0:8090
// @BasePath	/
func main() {

	if err := checkEnv(); err != nil {
		fmt.Println(err.Error())
		os.Exit(1)
	}

	server := gin.Default()

	corsCfg := cors.DefaultConfig()
	corsCfg.AllowAllOrigins = true
	server.Use(cors.New(corsCfg))

	charts.RegisterChartRoutes(server)
	releases.RegisterChartRoutes(server)

	server.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	server.Run("0.0.0.0:8090")
}

// checks that all required environment variables are set.
func checkEnv() error {

	if _, err := utils.EnvOrError(charts.CHART_BASE_ENV); err != nil {
		return err
	}

	return nil
}
