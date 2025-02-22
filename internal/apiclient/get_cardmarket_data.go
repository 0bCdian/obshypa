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
		// TO-DO: What happens when we have several cards with the same CardMarketID because they are in different languages?
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
