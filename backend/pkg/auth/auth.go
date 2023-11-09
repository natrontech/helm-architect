package auth

import (
	"crypto/x509"
	"encoding/pem"
	"errors"
	"fmt"
	"net/http"
	"os"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"github.com/natrontech/helmarchitect/backend/internal/utils"
)

const JWT_CERTIFICATE = "HELM_ARCHITECT_JWT_CERTIFICATE"

const AUTHORIZATION_HEADER = "Authorization"
const AUTHORIZATION_SCHEME = "Bearer"

var jwtParser = jwt.NewParser()

type Config interface {
	CertificatePath() string
	Certificate(string) *x509.Certificate
}

type defaultConfig struct {
	Config

	certificate *x509.Certificate
}

func (cfg *defaultConfig) CertificatePath() string {

	return os.Getenv(JWT_CERTIFICATE)
}

func (cfg *defaultConfig) Certificate(certificatePath string) *x509.Certificate {

	if certificatePath != "" {
		if c, err := utils.FileOpen(certificatePath, os.O_RDONLY); err == nil {
			if stat, err := c.Stat(); err == nil {
				fileSize := stat.Size()
				bytes := make([]byte, fileSize)
				if n, err := c.Read(bytes); err == nil && n == int(fileSize) {
					if pemBlock, _ := pem.Decode(bytes); pemBlock != nil {
						if certificate, err := x509.ParseCertificate(pemBlock.Bytes); err == nil {
							cfg.certificate = certificate
							return certificate
						} else {
							fmt.Println(err.Error())
						}
					} else {
						fmt.Println(err.Error())
					}
				} else {
					fmt.Println(err.Error())
				}
			} else {
				fmt.Println(err.Error())
			}
		} else {
			fmt.Println(err.Error())
		}
	}

	panic("unable to read jwt certificate")
}

func DefaultAuthConfig() Config {

	return new(defaultConfig)
}

func Authenticated(cfg Config) gin.HandlerFunc {

	return func(c *gin.Context) {

		if authorization := c.Request.Header.Get(AUTHORIZATION_HEADER); authorization != "" {

			if !strings.HasPrefix(authorization, AUTHORIZATION_SCHEME) {
				c.AbortWithError(http.StatusUnauthorized, utils.NewApiError(errors.New("expected bearer scheme"), http.StatusUnauthorized, c, "TRACE-ID"))
				return
			}

			cert := cfg.Certificate(cfg.CertificatePath())
			accessToken := strings.Trim(strings.Split(authorization, AUTHORIZATION_SCHEME)[1], " ")
			token, err := jwtParser.Parse(accessToken, func(t *jwt.Token) (interface{}, error) { return cert.PublicKey, nil })
			if err != nil {
				c.AbortWithError(http.StatusUnauthorized, utils.NewApiError(err, http.StatusUnauthorized, c, "TRACE-ID"))
				return
			}

			if !authorized(token) {
				c.AbortWithError(http.StatusForbidden, utils.NewApiError(err, http.StatusForbidden, c, "TRACE-ID"))
				return
			}

		} else {
			c.AbortWithError(http.StatusUnauthorized, utils.NewApiError(errors.New("http authorization expected"), http.StatusUnauthorized, c, "TRACE-ID"))
			return
		}
	}
}

func authorized(t *jwt.Token) bool {
	return true
}
