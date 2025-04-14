FROM golang:1.23.6-alpine3.21 AS base

WORKDIR /build

COPY . .

RUN go build -o backend_server ./cmd/backend_server/

FROM scratch AS server

WORKDIR /server

COPY --from=base /build/backend_server  .
COPY --from=base /build/frontend ./static/

EXPOSE ${PORT}
CMD ["./backend_server", "-prod"]
