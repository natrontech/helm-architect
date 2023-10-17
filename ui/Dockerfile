FROM golang:1.20-alpine AS backend-builder
WORKDIR /build
COPY pocketbase/go.mod pocketbase/go.sum pocketbase/main.go ./
COPY pocketbase/hooks ./hooks
COPY pocketbase/pkg ./pkg
COPY pocketbase/vcluster-values.yaml ./vcluster-values.yaml
RUN apk --no-cache add upx make git gcc libtool musl-dev ca-certificates dumb-init \
  && go mod tidy \
  && CGO_ENABLED=0 go build \
  && upx helmarchitect

FROM node:lts-slim as ui-builder
WORKDIR /build
COPY ./frontend/package*.json ./
RUN rm -rf ./node_modules
RUN rm -rf ./build
COPY ./frontend .
RUN npm install --legacy-peer-deps
RUN npm run build

FROM alpine as runtime
WORKDIR /app/helmarchitect
COPY --from=backend-builder /build/helmarchitect /app/helmarchitect/helmarchitect
COPY ./pocketbase/pb_migrations ./pb_migrations
COPY --from=ui-builder /build/build /app/helmarchitect/pb_public
EXPOSE 8090
CMD ["/app/helmarchitect/helmarchitect","serve", "--http", "0.0.0.0:8090"]
