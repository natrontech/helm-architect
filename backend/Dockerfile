FROM golang

WORKDIR /helmarchitect

COPY ./internal ./internal
COPY ./pkg ./pkg
COPY ./docs ./docs
COPY ./main.go ./main.go
COPY ./go.mod ./go.mod
COPY ./go.sum ./go.sum

RUN go mod download

RUN go build .

RUN mkdir /data
RUN mkdir /data/charts
ENV HELM_ARCHITECT_CHARTS_PATH=/data/charts

ENV GIN_MODE=release

EXPOSE 8090

CMD ["./backend"]