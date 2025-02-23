package apiclient

import (
	"encoding/json"
)

const cardMarketUrl = "https://downloads.s3.cardmarket.com/productCatalog/priceGuide/price_guide_1.json"

func GetCardmarketData(scryfallData *[]ScryfallData) ([]Card, error) {
	cardmarketData, err := getCardmarketPriceGuide()
	if err != nil {
		return nil, err
	}

	cardPricesMap := make(map[int][]Card)
	for _, scryFallCard := range *scryfallData {
		//We need to have an array of cards on each index of the map, as several versions of the same card share the same CardmarketID
		if cardPricesMap[scryFallCard.CardmarketID] == nil {
			// Add first card to the list if there's no other with the same CardmarketID
			cardPricesMap[scryFallCard.CardmarketID] = []Card{{ScryfallData: scryFallCard}}
		} else {
			// Add another card to the list with the same CardmarketID
			cardPricesMap[scryFallCard.CardmarketID] = append(cardPricesMap[scryFallCard.CardmarketID], Card{ScryfallData: scryFallCard})
		}
	}

	var cards []Card
	for _, cardPrice := range *cardmarketData {
		currentCardVersions, exists := cardPricesMap[cardPrice.IDProduct]
		if !exists {
			continue
		}

		for _, cardVersion := range currentCardVersions {
			cardVersion.Prices = cardPrice
			cards = append(cards, cardVersion)
		}
	}

	return cards, nil
}

func getCardmarketPriceGuide() (*[]CardMarketPriceGuide, error) {
	info, err := callRESTAPIGetMethod(cardMarketUrl)
	if err != nil {
		return nil, err
	}

	var cardmarketData CardmarketData
	err = json.Unmarshal(info, &cardmarketData)
	if err != nil {
		return nil, err
	}
	priceGuides := cardmarketData.PriceGuides
	return &priceGuides, nil
}
