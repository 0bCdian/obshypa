package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"os/signal"
	"strconv"
	"time"

	"cloud.google.com/go/firestore"
	"github.com/shypa/cards-website/internal/apiclient"
	"github.com/shypa/cards-website/internal/database"
)

type middleware func(http.Handler) http.Handler

func initializeDbData(ctx context.Context, client *firestore.Client) error {
	fmt.Println("loading emulator with data...")
	filepath, err := os.Getwd()
	const filename = "/api_data.json"
	if err != nil {
		return fmt.Errorf("could not get filepath of %s, context: %s ", filename, "initializeDbData")
	}
	filepath = filepath + "/" + filename

	data, err := os.ReadFile(filepath)
	if err != nil {
		return fmt.Errorf("could not get filepath of %s, context: %s ", filename, "initializeDbData")
	}
	var cards []apiclient.Card

	if json.Unmarshal(data, &cards) != nil {
		return fmt.Errorf("could not unmarshal json data")
	}
	for _, card := range cards {
		if _, err := client.Collection("Cards").Doc(card.ID).Set(ctx, card); err != nil {
			fmt.Printf("Could not save card %s in database", card.Name)
			continue
		}
	}
	fmt.Println("Finished loading data into emulator")
	return nil
}

// Creates a middleware stack from multiple middleware functions
func createStack(middlewares ...middleware) middleware {
	return func(next http.Handler) http.Handler {
		for i := len(middlewares) - 1; i >= 0; i-- {
			next = middlewares[i](next)
		}
		return next
	}
}

// CORS middleware
func enableCors(allowedHost string) middleware {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			w.Header().Set("Access-Control-Allow-Origin", allowedHost)
			next.ServeHTTP(w, r)
		})
	}
}

// Context middleware - pass the firestore client via context
func withFirestore(client *firestore.Client) middleware {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			ctx := context.WithValue(r.Context(), "firestoreClient", client)
			rWithCtx := r.WithContext(ctx)
			next.ServeHTTP(w, rWithCtx)
		})
	}
}

// HTTP error handler
func handleErrorHttp(w http.ResponseWriter, err error) {
	w.WriteHeader(http.StatusInternalServerError)
	w.Write([]byte(err.Error()))
}

// Handler for the cards endpoint
func cardsHandler() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		client, ok := r.Context().Value("firestoreClient").(*firestore.Client)
		if !ok {
			handleErrorHttp(w, fmt.Errorf("firestore client not found in context"))
			return
		}

		offset, _ := strconv.Atoi(r.URL.Query().Get("offset"))
		limit, _ := strconv.Atoi(r.URL.Query().Get("limit"))

		params := database.CardQueryParams{
			Limit:  limit,
			Offset: offset,
		}

		// Call the database function
		cards, err := database.GetCards(r.Context(), client, params)
		if err != nil {
			handleErrorHttp(w, err)
			return
		}
		w.WriteHeader(http.StatusOK)
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(cards)
	}
}

// Create and configure the HTTP server
func newServer(client *firestore.Client, port string) *http.Server {
	router := http.NewServeMux()

	mw := createStack(
		enableCors("*"), // Allow all origins for now
		withFirestore(client),
	)

	router.HandleFunc("GET /cards", cardsHandler())

	handler := mw(router)

	return &http.Server{
		Addr:    ":" + port,
		Handler: handler,
	}
}

func run(ctx context.Context, w io.Writer, lookEnv func(string) (string, bool)) error {
	ctx, cancel := signal.NotifyContext(ctx, os.Interrupt)
	defer cancel()

	project, exists := lookEnv("PROJECT")
	if !exists {
		return fmt.Errorf("PROJECT environment variable not found")
	}

	port, exists := lookEnv("PORT")
	if !exists {
		port = "8000"
	}

	emulatorHost, exists := lookEnv("FIRESTORE_EMULATOR_HOST")
	if !exists {
		return fmt.Errorf("this version of the server only works if the FIRESTORE_EMULATOR_HOST env var is present ")
	}
	fmt.Println("Firestore emulator running on: ", emulatorHost)

	client, err := database.NewLocalFirestoreClient(ctx, project)
	if err != nil {
		return fmt.Errorf("failed to create Firestore client: %w", err)
	}
	defer client.Close()
	initializeDbData(ctx, client)
	server := newServer(client, port)

	serverErrors := make(chan error, 1)
	go func() {
		fmt.Fprintf(w, "Server starting on port %s\n", port)
		serverErrors <- server.ListenAndServe()
	}()

	select {
	case err := <-serverErrors:
		return fmt.Errorf("server error: %w", err)
	case <-ctx.Done():
		fmt.Fprintln(w, "Shutdown signal received")

		shutdownCtx, shutdownCancel := context.WithTimeout(context.Background(), 5*time.Second)
		defer shutdownCancel()

		if err := server.Shutdown(shutdownCtx); err != nil {
			return fmt.Errorf("error during server shutdown: %w", err)
		}

		fmt.Fprintln(w, "Server shutdown complete")
		return nil
	}
}

func main() {
	if err := run(context.Background(), os.Stdout, os.LookupEnv); err != nil {
		log.Fatal(err)
	}
}
