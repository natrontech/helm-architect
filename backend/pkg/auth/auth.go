package auth

import (
	"context"
	"errors"
	"net/http"

	"github.com/coreos/go-oidc/v3/oidc"
	"github.com/gin-gonic/gin"
	"golang.org/x/oauth2"
)

const OIDC_URL = "HELM_ARCHITECT_OIDC_URL"
const OIDC_CLIENT_ID = "HELM_ARCHITECT_OIDC_CLIENT_ID"
const OIDC_CLIENT_SECRET = "HELM_ARCHITECT_OIDC_CLIENT_SECRET"

type AuthProvider interface {
	// Authorize is to be called by the callback in the authorization flow
	Authorize(*http.Response) (*oauth2.Token, error)
	Token() error
	UserInfo() error
	Verify(*oauth2.Token) bool
}

type OIDProvider struct {
	AuthProvider

	authProviderCfg *AuthProviderConfig
	oauthCfg        *oauth2.Config
	provider        *oidc.Provider
}

type AuthProviderConfig struct {
	Ctx          context.Context
	ProviderUrl  string
	ClientId     string
	ClientSecret string
	RedirectUrl  string
}

func NewAuthProvider(cfg *AuthProviderConfig) (AuthProvider, error) {

	oidcProvider, err := oidc.NewProvider(cfg.Ctx, cfg.ProviderUrl)
	if err != nil {
		return nil, err
	}

	provider := new(OIDProvider)
	provider.provider = oidcProvider
	provider.authProviderCfg = cfg

	return provider, nil
}

func newAuthConfig(clientId string, clientSecret string, redirectUrl string, provider *oidc.Provider) *oauth2.Config {

	cfg := new(oauth2.Config)
	cfg.ClientID = clientId
	cfg.ClientSecret = clientSecret
	cfg.RedirectURL = redirectUrl
	cfg.Endpoint = provider.Endpoint()
	cfg.Scopes = []string{oidc.ScopeOpenID, "email", "profile", "groups"}

	return cfg
}

func RegisterUserRoutes(e *gin.Engine) {

	e.GET("/api/alpha/login", login)
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
//	@Failure		400		{object}	utils.ApiError
//	@Failure		404		{object}	utils.ApiError
//	@Failure		500		{object}	utils.ApiError
//	@Router			/api/alpha/chart/{name}/revision [post]
func login(c *gin.Context) {

}

func (provider *OIDProvider) Authorize(response *http.Response) (*oauth2.Token, error) {

	t, err := provider.oauthCfg.Exchange(provider.authProviderCfg.Ctx, response.Request.URL.Query().Get("code"))
	if err != nil {
		return nil, err
	}

	if !provider.Verify(t) {
		return nil, errors.New("failed verifying token")
	}

	return t, err
}

func (provider *OIDProvider) Token() error {
	// [authentikurl]/application/o/token/
	return nil
}

func (provider *OIDProvider) UserInfo() error {
	// [authentikurl]/application/o/userinfo/
	return nil
}

func (provider *OIDProvider) Verify(token *oauth2.Token) bool {

	rawToken, ok := token.Extra("id_token").(string)
	if !ok {
		return false
	}

	oidcConfig := &oidc.Config{
		ClientID: provider.oauthCfg.ClientID,
	}

	_, err := provider.provider.Verifier(oidcConfig).Verify(provider.authProviderCfg.Ctx, rawToken)
	if err != nil {
		return false
	}

	return true
}
