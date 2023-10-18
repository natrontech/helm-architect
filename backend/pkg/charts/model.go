package charts

import (
	"github.com/blang/semver/v4"
)

type Chart struct {
	Name        string
	Description string
	Revisions   []Revision
}

type Revision struct {
	SemVer        string `json:"semanticVersionString"`
	Configuration Configuration
}

func (r *Revision) Version() semver.Version {
	return semver.MustParse(r.SemVer)
}

type Configuration struct {
	Global                 GlobalConfig                  `yaml:"global"`
	NamePrefix             string                        `yaml:"namePrefix"`
	NameSuffix             string                        `yaml:"nameSuffix"`
	NameOverride           string                        `yaml:"nameOverride"`
	DefaultTag             string                        `yaml:"defaultTag"`
	Timezone               string                        `yaml:"timezone"`
	Secrets                SecretsConfig                 `yaml:"secrets"`
	NetworkPolicy          NetworkPolicyConfig           `yaml:"networkpolicy"`
	Ingress                IngressConfig                 `yaml:"ingress"`
	ServiceMonitor         ServiceMonitorConfig          `yaml:"servicemonitor"`
	PersistentVolumeClaims []PersistentVolumeClaimConfig `yaml:"pvcs"`
	Components             map[string]ComponentConfig    `yaml:"components"`
}

type GlobalConfig struct {
	NamePrefix   string `yaml:"namePrefix"`
	NameSuffix   string `yaml:"nameSuffix"`
	NameOverride string `yaml:"nameOverride"`
}

type SecretsConfig struct {
	Data RegistryConfig `yaml:"data"`
}

type RegistryConfig struct {
	PullSecret bool `yaml:"pullSecret"`
}

type NetworkPolicyConfig struct {
	Deploy bool `yaml:"deploy"`
}

type IngressConfig struct {
	Deploy           bool                 `yaml:"deploy"`
	IngressClassName string               `yaml:"ingressClassName"`
	DefaultBackend   DefaultBackendConfig `yaml:"defaultBackend"`
	Rules            []IngressRuleConfig  `yaml:"rules"`
	Annotations      map[string]string    `yaml:"annotations"`
	TLS              TLSConfig            `yaml:"tls"`
}

type DefaultBackendConfig struct {
	ServiceNameSuffix string `yaml:"serviceNameSuffix"`
	ServicePort       string `yaml:"servicePort"`
}

type IngressRuleConfig struct {
	Host string     `yaml:"host"`
	HTTP HTTPConfig `yaml:"http"`
}

type HTTPConfig struct {
	Paths []HTTPPathConfig `yaml:"paths"`
}

type HTTPPathConfig struct {
	Backend  BackendConfig `yaml:"backend"`
	Path     string        `yaml:"path"`
	PathType string        `yaml:"pathType"`
}

type BackendConfig struct {
	ServiceNameSuffix string `yaml:"serviceNameSuffix"`
	ServicePort       string `yaml:"servicePort"`
}

type TLSConfig struct {
	Type     string            `yaml:"type"`
	Self     TLSOptionConfig   `yaml:"self"`
	Existing ExistingTLSConfig `yaml:"existing"`
	Provided ProvidedTLSConfig `yaml:"provided"`
	K8s      K8sTLSConfig      `yaml:"k8s"`
}

type TLSOptionConfig struct {
	CommonName          string   `yaml:"commonName"`
	IPAddresses         []string `yaml:"ipAddresses"`
	AlternativeDnsNames []string `yaml:"alternativeDnsNames"`
	ValidityDuration    int      `yaml:"validityDuration"`
}

type ExistingTLSConfig struct {
	Secret string `yaml:"secret"`
}

type ProvidedTLSConfig struct {
	Cert string `yaml:"cert"`
	Key  string `yaml:"key"`
}

type K8sTLSConfig struct{}

type ServiceMonitorConfig struct {
	Deploy    bool                      `yaml:"deploy"`
	BasicAuth BasicAuthConfig           `yaml:"basicAuth"`
	Endpoints map[string]EndpointConfig `yaml:"endpoints"`
}

type BasicAuthConfig struct {
	Enabled        bool              `yaml:"enabled"`
	ExistingSecret string            `yaml:"existingSecret"`
	NewSecret      map[string]string `yaml:"newSecret"`
	UserKey        string            `yaml:"userKey"`
	PasswordKey    string            `yaml:"passwordKey"`
}

type EndpointConfig struct {
	OverrideUserKey     string            `yaml:"overrideUserKey"`
	OverridePasswordKey string            `yaml:"overridePasswordKey"`
	ComponentSelector   map[string]string `yaml:"componentSelector"`
	HeadlessTargetPort  int               `yaml:"headlessTargetPort"`
	Path                string            `yaml:"path"`
	Interval            string            `yaml:"interval"`
	Port                string            `yaml:"port"`
}

type PersistentVolumeClaimConfig struct {
	Name             string   `yaml:"name"`
	Size             string   `yaml:"size"`
	AccessModes      []string `yaml:"accessModes"`
	StorageClassName string   `yaml:"storageClassName"`
}

type ComponentConfig struct {
	Services        map[string]ServiceConfig       `yaml:"services"`
	NetworkPolicies map[string]NetworkPolicyConfig `yaml:"networkpolicies"`
	Controller      ControllerConfig               `yaml:"controller"`
}

type ServiceConfig struct {
	Deploy                   bool              `yaml:"deploy"`
	Type                     string            `yaml:"type"`
	LoadBalancerIP           string            `yaml:"loadBalancerIP"`
	LoadBalancerClass        string            `yaml:"loadBalancerClass"`
	LoadBalancerSourceRanges []string          `yaml:"loadBalancerSourceRanges"`
	Name                     string            `yaml:"name"`
	Port                     string            `yaml:"port"`
	TargetPort               string            `yaml:"targetPort"`
	Protocol                 string            `yaml:"protocol"`
	ClusterIP                string            `yaml:"clusterIP"`
	OverrideSelectors        map[string]string `yaml:"overrideSelectors"`
	SessionAffinity          string            `yaml:"sessionAffinity"`
}

type ControllerConfig struct {
	Deploy                       bool                        `yaml:"deploy"`
	Type                         string                      `yaml:"type"`
	ExtraAnnotations             map[string]string           `yaml:"extraAnnotations"`
	ExtraLabels                  map[string]string           `yaml:"extraLabels"`
	EnvSecret                    map[string]string           `yaml:"envSecret"`
	EnvConfigMap                 map[string]string           `yaml:"envConfigMap"`
	EnvFrom                      []EnvRefConfig              `yaml:"envFrom"`
	GatherMetrics                bool                        `yaml:"gatherMetrics"`
	Replicas                     int                         `yaml:"replicas"`
	RevisionHistoryLimit         int                         `yaml:"revisionHistoryLimit"`
	ForceRedeploy                bool                        `yaml:"forceRedeploy"`
	DisableChecksumAnnotations   bool                        `yaml:"disableChecksumAnnotations"`
	ExtraChecksumAnnotations     []ChecksumConfig            `yaml:"extraChecksumAnnotations"`
	UpdateStrategy               string                      `yaml:"updateStrategy"`
	ExtraVolumeClaimTemplates    []VolumeClaimTemplateConfig `yaml:"extraVolumeClaimTemplates"`
	ServiceAccountName           string                      `yaml:"serviceAccountName"`
	AutomountServiceAccountToken bool                        `yaml:"automountServiceAccountToken"`
	PriorityClassName            string                      `yaml:"priorityClassName"`
	RestartPolicy                string                      `yaml:"restartPolicy"`
	PodSecurityContext           PodSecurityContextConfig    `yaml:"podSecurityContext"`
	SecurityContext              SecurityContextConfig       `yaml:"securityContext"`
	HostNetwork                  bool                        `yaml:"hostNetwork"`
	HostPID                      bool                        `yaml:"hostPID"`
	HostIPC                      bool                        `yaml:"hostIPC"`
	DNSPolicy                    string                      `yaml:"dnsPolicy"`
	NodeSelector                 map[string]string           `yaml:"nodeSelector"`
	Tolerations                  []TolerationConfig          `yaml:"tolerations"`
	Affinity                     map[string]AffinityConfig   `yaml:"affinity"`
	IngressClassName             string                      `yaml:"ingressClassName"`
	IngressPort                  string                      `yaml:"ingressPort"`
	HealthCheckPath              string                      `yaml:"healthCheckPath"`
}

type EnvRefConfig struct {
	Name string `yaml:"name"`
	Key  string `yaml:"key"`
}

type ChecksumConfig struct {
	Name  string `yaml:"name"`
	Value string `yaml:"value"`
}

type VolumeClaimTemplateConfig struct {
	Name string                        `yaml:"name"`
	Spec VolumeClaimTemplateSpecConfig `yaml:"spec"`
}

type VolumeClaimTemplateSpecConfig struct {
	AccessModes      []string        `yaml:"accessModes"`
	StorageClassName string          `yaml:"storageClassName"`
	Resources        ResourcesConfig `yaml:"resources"`
}

type ResourcesConfig struct {
	Limits   map[string]string `yaml:"limits"`
	Requests map[string]string `yaml:"requests"`
}

type PodSecurityContextConfig struct {
	RunAsNonRoot       bool                  `yaml:"runAsNonRoot"`
	RunAsUser          int                   `yaml:"runAsUser"`
	RunAsGroup         int                   `yaml:"runAsGroup"`
	RunAsUsername      string                `yaml:"runAsUsername"`
	FsGroup            int                   `yaml:"fsGroup"`
	SupplementalGroups []int                 `yaml:"supplementalGroups"`
	RunAsNonRootUid    int                   `yaml:"runAsNonRootUid"`
	Sysctls            []string              `yaml:"sysctls"`
	WindowsOptions     WindowsOptionsConfig  `yaml:"windowsOptions"`
	SeLinuxOptions     SeLinuxOptionsConfig  `yaml:"seLinuxOptions"`
	SecurityContext    SecurityContextConfig `yaml:"securityContext"`
}

type WindowsOptionsConfig struct {
	RunAsUserName string `yaml:"runAsUserName"`
}

type SeLinuxOptionsConfig struct {
	Level string `yaml:"level"`
	Role  string `yaml:"role"`
	Type  string `yaml:"type"`
	User  string `yaml:"user"`
}

type SecurityContextConfig struct {
	AllowPrivilegeEscalation bool                 `yaml:"allowPrivilegeEscalation"`
	Capabilities             CapabilitiesConfig   `yaml:"capabilities"`
	Privileged               bool                 `yaml:"privileged"`
	ProcMount                string               `yaml:"procMount"`
	ReadOnlyRootFilesystem   bool                 `yaml:"readOnlyRootFilesystem"`
	RunAsNonRoot             bool                 `yaml:"runAsNonRoot"`
	RunAsUser                int                  `yaml:"runAsUser"`
	RunAsGroup               int                  `yaml:"runAsGroup"`
	RunAsUsername            string               `yaml:"runAsUsername"`
	SeLinuxOptions           SeLinuxOptionsConfig `yaml:"seLinuxOptions"`
	WindowsOptions           WindowsOptionsConfig `yaml:"windowsOptions"`
	Sysctls                  []string             `yaml:"sysctls"`
}

type CapabilitiesConfig struct {
	Add  []string `yaml:"add"`
	Drop []string `yaml:"drop"`
}

type TolerationConfig struct {
	Key               string `yaml:"key"`
	Operator          string `yaml:"operator"`
	Value             string `yaml:"value"`
	Effect            string `yaml:"effect"`
	TolerationSeconds int    `yaml:"tolerationSeconds"`
}

type AffinityConfig struct {
	NodeAffinity    NodeAffinityConfig    `yaml:"nodeAffinity"`
	PodAffinity     PodAffinityConfig     `yaml:"podAffinity"`
	PodAntiAffinity PodAntiAffinityConfig `yaml:"podAntiAffinity"`
}

type NodeAffinityConfig struct {
	PreferredDuringSchedulingIgnoredDuringExecution []PreferredDuringSchedulingIgnoredDuringExecutionConfig `yaml:"preferredDuringSchedulingIgnoredDuringExecution"`
	RequiredDuringSchedulingIgnoredDuringExecution  []RequiredDuringSchedulingIgnoredDuringExecutionConfig  `yaml:"requiredDuringSchedulingIgnoredDuringExecution"`
}

type PreferredDuringSchedulingIgnoredDuringExecutionConfig struct {
	Weight     int                    `yaml:"weight"`
	Preference NodeSelectorTermConfig `yaml:"preference"`
}

type RequiredDuringSchedulingIgnoredDuringExecutionConfig struct {
	NodeSelectorTerms []NodeSelectorTermConfig `yaml:"nodeSelectorTerms"`
}

type NodeSelectorTermConfig struct {
	MatchExpressions []NodeSelectorRequirementConfig `yaml:"matchExpressions"`
}

type NodeSelectorRequirementConfig struct {
	Key      string   `yaml:"key"`
	Operator string   `yaml:"operator"`
	Values   []string `yaml:"values"`
}

type PodAffinityConfig struct {
	PreferredDuringSchedulingIgnoredDuringExecution []WeightedPodAffinityTermConfig `yaml:"preferredDuringSchedulingIgnoredDuringExecution"`
	RequiredDuringSchedulingIgnoredDuringExecution  []PodAffinityTermConfig         `yaml:"requiredDuringSchedulingIgnoredDuringExecution"`
}

type WeightedPodAffinityTermConfig struct {
	Weight          int                   `yaml:"weight"`
	PodAffinityTerm PodAffinityTermConfig `yaml:"podAffinityTerm"`
}

type PodAffinityTermConfig struct {
	LabelSelector LabelSelectorConfig `yaml:"labelSelector"`
	TopologyKey   string              `yaml:"topologyKey"`
}

type LabelSelectorConfig struct {
	MatchLabels      map[string]string                `yaml:"matchLabels"`
	MatchExpressions []LabelSelectorRequirementConfig `yaml:"matchExpressions"`
}

type LabelSelectorRequirementConfig struct {
	Key      string   `yaml:"key"`
	Operator string   `yaml:"operator"`
	Values   []string `yaml:"values"`
}

type PodAntiAffinityConfig struct {
	PreferredDuringSchedulingIgnoredDuringExecution []WeightedPodAffinityTermConfig `yaml:"preferredDuringSchedulingIgnoredDuringExecution"`
	RequiredDuringSchedulingIgnoredDuringExecution  []PodAffinityTermConfig         `yaml:"requiredDuringSchedulingIgnoredDuringExecution"`
}
