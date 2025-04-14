FROM golang:1.23.6-alpine3.21 AS builder

WORKDIR /app

COPY . .

RUN go build -o backend_server ./cmd/backend_server/ && mv -rf ./frontend/ ./static/

EXPOSE ${PORT}

CMD ["./backend_server", "-prod"]
