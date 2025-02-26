FROM golang:1.23.6-alpine3.21 AS base

WORKDIR /app

COPY . .

RUN go build -o api_server ./cmd/backend_server/

FROM scratch

WORKDIR /server

COPY --from=base ./app/api_server .
COPY --from=base ./app/api_data.json .

CMD ["./api_server"]
