# syntax=docker/dockerfile:1

FROM --platform=$BUILDPLATFORM golang:1.26 AS development

WORKDIR /app

# check docker file path reference for copy to see diff between trailing and without trailing slash
COPY go.mod go.sum /app/
RUN go mod download
COPY . /app/
EXPOSE 8080

CMD ["go", "run", "main.go", "api"]
