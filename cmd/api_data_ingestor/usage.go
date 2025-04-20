package main

import "fmt"

const usageMessage = `apidataingestor - A script to download data from scryfall and cardmarket.

  Usage:
    apidataingestor [manabox_data.csv]
    Development mode: ./apidataingestor <csv_file_path>
    Production mode:  ./apidataingestor  -prod
  `

// Add this function to display usage information
func Usage() {
	fmt.Println(usageMessage)
}
