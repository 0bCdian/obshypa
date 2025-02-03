package main

import (
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
			fmt.Println(enoent)
			os.Exit(1)
		} else if errors.As(err, &missingArg) {
			fmt.Println(missingArg)
			Usage()
			os.Exit(1)
		}
	}
	csvData, err := csvreader.CsvReader(fileLocation.manaboxCsv)
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
	scryfallData, err := apiclient.GetScryfallCardData(csvData)
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
	cardMarketData, err := apiclient.GetCardmarketData(&scryfallData)
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
	err = savetojson.SaveToJson(cardMarketData)
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
	fmt.Println("Finished with the script!")
}
