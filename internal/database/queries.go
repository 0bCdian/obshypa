package database

import (
	"context"
	"fmt"

	"cloud.google.com/go/firestore"
	"github.com/shypa/cards-website/internal/apiclient"
	"github.com/shypa/cards-website/internal/csvreader"
)

type CardQueryParams struct {
	Limit  int // Number of cards to return (default 10)
	Offset int // Number of cards to skip
	// SortBy string // Field to sort by (e.g., "name", "price") default name A-Z
	// Order  string // Sort order ("asc" or "desc") default asc
}

// GetCards retrieves cards based on the provided query parameters
func GetCards(ctx context.Context, client *firestore.Client, params CardQueryParams) ([]*apiclient.Card, error) {
	query := client.Collection("Cards").OrderBy("Name", firestore.Asc)

	if params.Limit <= 0 {
		params.Limit = 10
	}

	query = query.Limit(params.Limit)
	if params.Offset > 0 {
		query = query.Offset(params.Offset)
	}
	docs, err := query.Documents(ctx).GetAll()
	if err != nil {
		return nil, fmt.Errorf("failed to get cards: %w", err)
	}

	cards := make([]*apiclient.Card, 0, len(docs))
	for _, doc := range docs {
		var card apiclient.Card
		if err := doc.DataTo(&card); err != nil {
			return nil, fmt.Errorf("failed to convert document to card: %w", err)
		}
		cards = append(cards, &card)
	}
	return cards, nil
}

func UpsertCards(ctx context.Context, client *firestore.Client, cards *[]apiclient.Card) error {
	writer := client.BulkWriter(ctx)
	collection := client.Collection("Cards")

	for _, card := range *cards {
		docRef := collection.Doc(card.ID)
		_, err := writer.Set(docRef, card)
		if err != nil {
			return fmt.Errorf("failed to queue card write: %w", err)
		}
	}

	writer.End()

	return nil
}

func UpsertCardStock(ctx context.Context, client *firestore.Client, manaboxInfo csvreader.CsvData) error {
	collection := client.Collection("Stock")
	for _, card := range manaboxInfo {
		_, err := collection.Doc(card.ScryfallID).Set(ctx, card)
		if err != nil {
			fmt.Printf("Could not save card %s on database", card.ScryfallID)
			continue
		}
	}
	return nil
}

func GetCardStock(ctx context.Context, client *firestore.Client) (csvreader.CsvData, error) {
	collection := client.Collection("Stock")
	docs, err := collection.Documents(ctx).GetAll()
	if err != nil {
		return nil, fmt.Errorf("failed to get card stock: %w", err)
	}

	stockData := make(csvreader.CsvData, 0, len(docs))
	for _, doc := range docs {
		var card csvreader.LocalData
		if err := doc.DataTo(&card); err != nil {
			return nil, fmt.Errorf("failed to convert document to card stock: %w", err)
		}
		stockData = append(stockData, card)
	}

	return stockData, nil
}
