package charts

const ChartYamlTemplate = `apiVersion: v2
name: {{ .ChartName }}
description: A Helm chart for Kubernetes
type: application
version: {{ .SemanticVersion }}
appVersion: "1.16.0" # optional
dependencies:
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
