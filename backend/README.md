# Helm Architect Core

Helm-Architect runs on port: 8090

## required env variables

- `HELM_ARCHITECT_CHARTS_PATH`: The path where the charts will live.
- `HELM_ARCHITECT_OIDC_URL`: The URL of the OIDC endpoint.
- `HELM_ARCHITECT_OIDC_CLIENT_ID`: The client id authorized in the OIDC server.
- `HELM_ARCHITECT_OIDC_CLIENT_SECRET`: The client secret belonging to the authorized client id.

## api docs

go to [\[host\]/swagger/index.html](http://localhost:8090/swagger/index.html) to see the swagger docs.

## installing and running

Running on your machine: ```make clean-run```

Running using Docker: ```make docker-run-local```

## notes on running helm-architect locally

If you want to run Helm-Architect and test stuff, it is recommended to run an OIDC capable IDP and a OCI compliant registry on your own. 
Therefore under `deployment/local` you find two docker-compose files which simplify the setup.
