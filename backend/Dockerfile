# syntax=docker/dockerfile:1

FROM --platform=$BUILDPLATFORM golang:1.26 AS development

WORKDIR /app

RUN go install github.com/air-verse/air@latest

COPY .air.toml /app
# check docker file path reference for copy to see diff between trailing and without trailing slash
COPY go.mod go.sum /app/
RUN go mod download
COPY . /app/
EXPOSE 8080

CMD ["air", "-c", ".air.toml"]

# build stage

FROM development AS build

RUN CGO_ENABLED=0 GOOS=linux go build -o /tms

# Deployment stage
FROM gcr.io/distroless/base-debian13 AS deploy
WORKDIR /
COPY --from=build /tms /tms
EXPOSE 8080
USER nonroot:nonroot
ENTRYPOINT ["/tms", "api"]
