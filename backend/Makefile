build: main.go
	go build .

clean: 
	rm backend

run: build
	./backend

clean-run: clean-caches run

clean-caches:
	go clean -cache -testcache

check-swagger:
	swag --version

generate-api-spec: check-swagger
	swag init

install-swagger:
	go install github.com/swaggo/swag/cmd/swag@latest

docker-build-local:
	docker build -t helmarchitect-backend:dev .

docker-run-local: build-local
	docker run -d -p 8090:8090 --name heumarchitekt helmarchitect-backend:dev
