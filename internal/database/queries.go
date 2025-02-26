package database

import (
	"context"
	"fmt"

	"cloud.google.com/go/firestore"
	"github.com/shypa/cards-website/internal/apiclient"
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
