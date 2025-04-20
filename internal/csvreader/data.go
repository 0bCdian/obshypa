package csvreader

type LocalData struct {
	ScryfallID      string `json:"scryfallID"`
	Quantity        int8   `json:"quantity"`
	SetCode         string `json:"setCode"`
	CollectorNumber string `json:"collectorNumber"`
	Language        string `json:"language"`
	Foil            string `json:"foil"`
}

type CsvData []LocalData
