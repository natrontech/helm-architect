package charts

const ChartYamlTemplate = `apiVersion: v2 # don't change
	name: {{ .ChartName }} # keep in sync with path
	description: A Helm chart for Kubernetes # required
	type: application # don't change
	version: {{ .SemanticVersion }} # keep in sync with path
	appVersion: "1.16.0" # optional
	dependencies: # don't change
	- name: common
		version: 10.7.0
		repository: https://bedag.github.io/helm-charts
`

type ChartYamlTemplateValues struct {
	ChartName       string
	SemanticVersion string
}

const IncludesTemplate = `{{- template "common.ingress.ingress" . }}
{{- template "common.ingress.secret" . }}
{{- template "common.service" . }}
{{- template "common.statefulset" . }}
{{- template "common.deployment" . }}
{{- template "common.job" . }}
{{- template "common.cronjob" . }}
{{- template "common.controller.envSecret" . }}
{{- template "common.controller.envConfigMap" . }}
{{- template "common.controller.configFiles" . }}
{{- template "common.controller.binaryFiles" . }}
{{- template "common.controller.files" . }}
{{- template "common.pvcs" . }}
{{- template "common.servicemonitor.headless.service" . }}
{{- template "common.servicemonitor.servicemonitor" . }}
{{- template "common.servicemonitor.secret" . }}
{{- template "common.networkpolicy" . }}
`
