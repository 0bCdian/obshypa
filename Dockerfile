FROM golang:1.23.6-alpine3.21 AS base

WORKDIR /build

COPY . .

RUN go build -o backend_server ./cmd/backend_server/

EXPOSE ${PORT}
CMD ["./backend_server", "-prod"]
