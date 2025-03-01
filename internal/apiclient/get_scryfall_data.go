package apiclient

import (
	"encoding/json"
	"fmt"
	"time"

	"github.com/shypa/cards-website/internal/csvreader"
)

const scryfall_url_by_id = "https://api.scryfall.com/cards/%s"         // Add card ID
const scryfall_url_by_lang = "https://api.scryfall.com/cards/%s/%s/%s" // Add card set code, collector number and language

func GetScryfallCardData(csvData csvreader.CsvData) ([]ScryfallData, error) {
	if len(csvData) < 1 {
		return nil, fmt.Errorf("empty csvData")
	}
	var scryfallData []ScryfallData
	for _, card := range csvData {
		data, err := getCardByLang(card)
		if err != nil {
			fmt.Printf("Error getting data for card:%v\nError:%v", card.ScryfallID, err.Error())
			continue
		}
		newCard := ScryfallData{Quantity: card.Quantity, Foil: card.Foil != "normal", ScryfallApiData: *data}

		// Get CardMarketID for cards that are not in English
		if newCard.Lang != "en" {
			data, err = getCardByID(card)
			if err != nil {
				fmt.Printf("Error getting data for card:%v\nError:%v", card.ScryfallID, err.Error())
				continue
			}

			newCard.CardmarketID = data.CardmarketID
		}

		scryfallData = append(scryfallData, newCard)
		fmt.Println("--------------------------------------------------------------------------")
	}
	return scryfallData, nil
}

func getCardByID(card csvreader.LocalData) (*ScryfallApiData, error) {
	fmt.Println("Getting data for cardID: ", card.ScryfallID)
	url := fmt.Sprintf(scryfall_url_by_id, card.ScryfallID)
	data, err := callScryfallApi(url)
	return data, err
}

func getCardByLang(card csvreader.LocalData) (*ScryfallApiData, error) {
	fmt.Println("Getting data for card ", card.CollectorNumber, " in set ", card.SetCode, " and language ", card.Language)
	url := fmt.Sprintf(scryfall_url_by_lang, card.SetCode, card.CollectorNumber, card.Language)
	data, err := callScryfallApi(url)
	return data, err
}

func callScryfallApi(url string) (*ScryfallApiData, error) {
	info, err := callRESTAPIGetMethod(url)
	time.Sleep(time.Millisecond * 150) // Make sure to have delay between API calls

	if err != nil {
		return nil, err
	}

	var data ScryfallApiData
	err = json.Unmarshal(info, &data)
	if err != nil {
		return nil, err
	}
	return &data, nil
}
