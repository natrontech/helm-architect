package models

type HelmChart struct {
	ID          string `json:"id" bson:"_id,omitempty"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Content     string `json:"content"` // YAML content of the Helm chart
}
