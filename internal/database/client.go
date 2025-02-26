package database

import (
	"context"
	"fmt"

	"cloud.google.com/go/firestore"
	firebase "firebase.google.com/go"
)

// NewLocalFirestoreClient creates and returns a firestore client instance
// meant to be used with the firestore emulator.
func NewLocalFirestoreClient(ctx context.Context, project string) (*firestore.Client, error) {
	client, err := firestore.NewClient(ctx, project)
	if err != nil {
		return nil, fmt.Errorf("error creating local firestore client: %w", err)
	}
	return client, nil
}

// NewCloudFirestoreClient creates and returns a firestore client instance
// meant to be used in GCP.
func NewCloudFirestoreClient(ctx context.Context, project string) (*firestore.Client, error) {
	conf := &firebase.Config{ProjectID: project}
	app, err := firebase.NewApp(ctx, conf)
	if err != nil {
		return nil, fmt.Errorf("error initializing firebase app: %w", err)
	}

	client, err := app.Firestore(ctx)
	if err != nil {
		return nil, fmt.Errorf("error creating cloud firestore client: %w", err)
	}

	return client, nil
}
