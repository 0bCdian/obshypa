package csvreader

type LocalData struct {
	ScryfallID string
	Quantity   int8
	SetCode	string
	CollectorNumber	string
	Language	string	
}

type CsvData []LocalData
