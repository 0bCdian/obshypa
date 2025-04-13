OUTPUT_DIR=bin
SERVER_BINARY=$(OUTPUT_DIR)/backend_server
INGESTOR_BINARY=$(OUTPUT_DIR)/api_data_ingestor
UPLOADER_BINARY=$(OUTPUT_DIR)/uploader

all: server ingestor uploader

server:
	echo "Compiling $(SERVER_BINARY)"
	go build -o $(SERVER_BINARY) ./cmd/backend_server/

ingestor:
	echo "Compiling $(INGESTOR_BINARY)"
	go build -o $(INGESTOR_BINARY) ./cmd/api_data_ingestor

uploader:
	echo "Compiling $(UPLOADER_BINARY)"
	go build -o $(UPLOADER_BINARY) ./cmd/stock_uploader/

clean:
	rm -rf ./$(OUTPUT_DIR)

run-server:
	echo "Running server, use this make command only in dev"
	go run ./cmd/backend_server

run-ingestor:
	echo "Running ingestor, use this make command only in dev"
	go run ./cmd/api_data_ingestor/ ./album_season_of_weaving.csv
