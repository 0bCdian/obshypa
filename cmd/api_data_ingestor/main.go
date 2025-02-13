package main

import (
	"errors"
	"fmt"
	"os"
	"encoding/json"
	"io/ioutil"

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

	scryfallData, err := apiclient.GetScryfallCardData(csvData)
	checkError(err)

	cardMarketData, err := apiclient.GetCardmarketData(&scryfallData)
	checkError(err)

	err = savetojson.SaveToJson(cardMarketData)
	checkError(err)

	// TODO: Maybe transform cardMarketData (type []Card) into []MinimalNecessaryData to avoid having to read a .json with info we already have...

	minimizeCardPriceData()

	fmt.Println("Finished with the script!")
}

func minimizeCardPriceData() {
	fmt.Println("Creating minimal card file with prices...")
	
	// Deserialize apiData.json into a MinimalNecessaryData
	fileContent, err := ioutil.ReadFile("apiData.json")
	checkError(err)
	
	var minimalData []MinimalNecessaryData
	err = json.Unmarshal(fileContent, &minimalData)
	if err != nil {
		fmt.Println("Error during Unmarshal(): ", err)
		os.Exit(1)
	}

	// Save to new Json
	err = savetojson.SaveToSpecificJson(minimalData, "Precio de cartas.json")
	checkError(err)

	fmt.Println("File created!")
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
