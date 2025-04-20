package main

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"os"

	"cloud.google.com/go/firestore"
	"github.com/shypa/cards-website/internal/apiclient"
	"github.com/shypa/cards-website/internal/csvreader"
	"github.com/shypa/cards-website/internal/database"
	"github.com/shypa/cards-website/internal/savetojson"
)

func main() {
	// Parse command line arguments
	args, err := ParseArgs()
	if err != nil {
		handleParseError(err)
		return
	}

	var initialData csvreader.CsvData
	var ctx context.Context
	var client *firestore.Client

	if args.isProd {
		fmt.Println("Running in production mode with Firestore")

		// Setup Firestore connection
		project, exists := os.LookupEnv("PROJECT")
		if !exists {
			checkError(fmt.Errorf("PROJECT environment variable not found"))
		}

		ctx = context.Background()
		client, err = database.NewCloudFirestoreClient(ctx, project)
		checkError(err)
		defer client.Close()

		// Get data from Firestore
		initialData, err = database.GetCardStock(ctx, client)
		checkError(err)
	} else {
		// Get data from CSV file
		initialData, err = csvreader.CsvReader(args.manaboxCsv)
		checkError(err)
	}

	// Process data - common to both modes
	// Get Scryfall data
	fmt.Println("Getting scryfallData...")
	scryfallData, err := apiclient.GetScryfallCardData(initialData)
	checkError(err)

	// Get card market data
	fmt.Println("Getting cardMarketData...")
	cardMarketData, err := apiclient.GetCardmarketData(&scryfallData)
	checkError(err)

	// Output data
	if args.isProd {
		// Write to Firestore
		err = database.UpsertCards(ctx, client, &cardMarketData)
		checkError(err)
	} else {
		// Write to JSON file
		const jsonFilename = "api_data.json"
		err = savetojson.SaveToSpecificJson(cardMarketData, jsonFilename)
		checkError(err)

		// Create minimal version
		minimizeCardPriceData(jsonFilename)
	}

	fmt.Println("Finished with the script!")
}

func handleParseError(err error) {
	var enoent *NotExistingFileError
	var missingArg *MissingArgError

	if errors.As(err, &enoent) {
		printErrorAndExit(enoent)
	} else if errors.As(err, &missingArg) {
		fmt.Println(missingArg)
		Usage()
		os.Exit(1)
	} else {
		printErrorAndExit(err)
	}
}

func minimizeCardPriceData(original_data_json_file string) {
	fmt.Println("Creating minimal card file with prices...")
	// Deserialize apiData.json into a MinimalNecessaryData
	fileContent, err := os.ReadFile(original_data_json_file)
	checkError(err)

	var minimalData []MinimalNecessaryData
	err = json.Unmarshal(fileContent, &minimalData)
	if err != nil {
		fmt.Println("Error during Unmarshal(): ", err)
		os.Exit(1)
	}

	// Save to new Json
	const json_filename = "precio_de_cartas.json"
	err = savetojson.SaveToSpecificJson(minimalData, json_filename)
	checkError(err)
	fmt.Printf("File created at %v\n", json_filename)
}

func checkError(err error) {
	if err != nil {
		printErrorAndExit(err)
	}
}

func printErrorAndExit(err error) {
	fmt.Println(err)
	os.Exit(1)
}
