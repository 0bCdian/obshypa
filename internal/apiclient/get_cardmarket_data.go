package apiclient

import (
	"encoding/json"
	"io"
	"net/http"
)

const cardMarketUrl = "https://downloads.s3.cardmarket.com/productCatalog/priceGuide/price_guide_1.json"

func GetCardmarketData(scryfallData *[]ScryfallData) ([]Card, error) {
	cardmarketData, err := callCardmarketApi(cardMarketUrl)
	if err != nil {
		return nil, err
	}

	cardPricesMap := make(map[int]Card)
	for _, scryFallCard := range *scryfallData {
		cardPricesMap[scryFallCard.CardmarketID] = Card{ScryfallData: scryFallCard}
	}

	var cards []Card
	for _, cardPrice := range *cardmarketData {
		currentCard, exists := cardPricesMap[cardPrice.IDProduct]
		if !exists {
			continue
		}
		currentCard.Prices = cardPrice
		cards = append(cards, currentCard)
	}

	return cards, nil
}

func callCardmarketApi(url string) (*[]CardMarketPriceGuide, error) {
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
	stringBody, err := io.ReadAll(res.Body)
	if err != nil {
		return nil, err
	}
	var cardmarketData CardmarketData
	err = json.Unmarshal(stringBody, &cardmarketData)
	if err != nil {
		return nil, err
	}
	priceGuides := cardmarketData.PriceGuides
	return &priceGuides, nil
}
