package apiclient

import (
	"encoding/json"
	"os"
)

func GetCardmarketData(filePath string, scryfallData *[]ScryfallData) ([]Card, error) {
	cardmarketData, err := readCardmarketJson(filePath)
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

func readCardmarketJson(filePath string) (*[]CardMarketPriceGuide, error) {
	fileData, err := os.ReadFile(filePath)
	if err != nil {
		return nil, err
	}
	var cardmarketData CardmarketData
	err = json.Unmarshal(fileData, &cardmarketData)
	if err != nil {
		return nil, err
	}
	priceGuides := cardmarketData.PriceGuides
	return &priceGuides, nil
}
