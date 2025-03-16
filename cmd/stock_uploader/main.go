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
	project, exists := os.LookupEnv("PROJECT")
	if !exists {
		return nil, fmt.Errorf("PROJECT environment variable not found")
	}

	if isProd {
		return firestore.NewClient(ctx, project)
	}

	_, exists = os.LookupEnv("FIRESTORE_EMULATOR_HOST")
	if !exists {
		return nil, fmt.Errorf("FIRESTORE_EMULATOR_HOST environment variable not found")
	}

	return firestore.NewClient(ctx, project)
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
		return "", fmt.Errorf("file doesnt exists")
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
