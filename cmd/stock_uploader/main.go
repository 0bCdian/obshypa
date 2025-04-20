package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"os"

	"cloud.google.com/go/firestore"
	"github.com/shypa/cards-website/internal/csvreader"
	"github.com/shypa/cards-website/internal/database"
)

var isProd bool

func init() {
	flag.BoolVar(&isProd, "prod", false, "Run in production mode")
	flag.Parse()
}

func getFirestoreClient(ctx context.Context) (*firestore.Client, error) {
	projectID, exists := os.LookupEnv("GCLOUD_PROJECT")
	if !exists {
		return nil, fmt.Errorf("GCLOUD_PROJECT env var not found")
	}
	if !isProd {
		if _, exists := os.LookupEnv("FIRESTORE_EMULATOR_HOST"); !exists {
			return nil, fmt.Errorf("error Running in non-prod mode, but FIRESTORE_EMULATOR_HOST is not set")
		}
	}
	client, err := firestore.NewClient(ctx, projectID)
	if err != nil {
		return nil, fmt.Errorf("failed to create Firestore client: %w", err)
	}
	return client, nil
}

func fileExists(filename string) bool {
	info, err := os.Stat(filename)
	if os.IsNotExist(err) {
		return false
	}
	return !info.IsDir()
}

func ParseFileArg() (string, error) {
	if len(os.Args) < 2 {
		return "", fmt.Errorf("missing arg")
	}
	manaboxCsvFilePath := os.Args[2]
	if !fileExists(manaboxCsvFilePath) {
		return "", fmt.Errorf("manabox csv file not found at %s", manaboxCsvFilePath)
	}
	return manaboxCsvFilePath, nil
}

func main() {
	ctx := context.Background()
	client, err := getFirestoreClient(ctx)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Firestore client initialized successfully")
	defer client.Close()
	location, err := ParseFileArg()
	if err != nil {
		log.Fatal(err)
	}
	csvData, err := csvreader.CsvReader(location)
	if err != nil {
		log.Fatal(err)
	}
	err = database.UpsertCardStock(ctx, client, csvData)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Data loaded successfully to db")
}
