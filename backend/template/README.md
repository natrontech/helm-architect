```sh
helm repo add bedag https://bedag.github.io/helm-charts
helm repo update
helm dependency build ./**
helm package ./**
```