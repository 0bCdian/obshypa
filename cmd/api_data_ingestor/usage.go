package main

import "fmt"

const usageMessage = `apidataingestor - A script to download data from scryfall and cardmarket.

  Usage:
    apidataingestor [manabox_data.csv] [cardmarket.csv]
  `

func Usage() {
	fmt.Println(usageMessage)
}
