package apiclient

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"

	"github.com/shypa/cards-website/internal/csvreader"
)

const scryfall_url = "https://api.scryfall.com/cards/%s"

func GetScryfallCardData(csvData csvreader.CsvData) ([]ScryfallData, error) {
	if len(csvData) < 1 {
		return nil, fmt.Errorf("empty csvData")
	}
	var scryfallData []ScryfallData
	for _, card := range csvData {
		fmt.Printf("Getting data for cardID: %v\n", card.ScryfallID)
		url := fmt.Sprintf(scryfall_url, card.ScryfallID)
		data, err := callScryfallApi(url)
		if err != nil {
			fmt.Printf("error getting data for card:%v\nerror:%v", card.ScryfallID, err.Error())
			continue
		}
		newCard := ScryfallData{Quantity: card.Quantity, ScryfallApiData: *data}
		scryfallData = append(scryfallData, newCard)
		time.Sleep(time.Millisecond * 150)
		fmt.Println("--------------------------------------------------------------------------")
	}
	return scryfallData, nil
}

func callScryfallApi(url string) (*ScryfallApiData, error) {
	req, err := http.NewRequest(http.MethodGet, url, nil)
	if err != nil {
		return nil, err
	}
	req.Header = http.Header{
		"Accept":     {"application/json"},
		"User-Agent": {"shypa/1.0"},
	}
	client := &http.Client{}
	res, err := client.Do(req)
	if err != nil || res.StatusCode != http.StatusOK {
		return nil, err
	}
	defer res.Body.Close()
	var data ScryfallApiData
	stringBody, err := io.ReadAll(res.Body)
	if err != nil {
		return nil, err
	}
	err = json.Unmarshal(stringBody, &data)
	if err != nil {
		return nil, err
	}
	return &data, nil
}
