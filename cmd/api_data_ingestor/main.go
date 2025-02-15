package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"os"

	"github.com/shypa/cards-website/internal/apiclient"
	"github.com/shypa/cards-website/internal/csvreader"
	"github.com/shypa/cards-website/internal/savetojson"
)

func main() {
	fileLocation, err := ParseFileArg()
	var enoent *EnoentEror
	var missingArg *MissingArgError
	if err != nil {
		if errors.As(err, &enoent) {
			printErrorAndExit(enoent)
		} else if errors.As(err, &missingArg) {
			fmt.Println(missingArg)
			Usage()
			os.Exit(1)
		}
	}

	csvData, err := csvreader.CsvReader(fileLocation.manaboxCsv)
	checkError(err)
	fmt.Println("Getting scryfallData...")
	scryfallData, err := apiclient.GetScryfallCardData(csvData)
	checkError(err)
	fmt.Println("Getting cardMarketData...")
	cardMarketData, err := apiclient.GetCardmarketData(&scryfallData)
	checkError(err)
	const json_filename = "api_data.json"
	err = savetojson.SaveToSpecificJson(cardMarketData, json_filename)
	checkError(err)

	// TODO: Maybe transform cardMarketData (type []Card) into []MinimalNecessaryData to avoid having to read a .json with info we already have...

	minimizeCardPriceData(json_filename)

	fmt.Println("Finished with the script!")
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

	fmt.Printf("File created at %v", json_filename)
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
