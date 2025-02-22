package csvreader

import (
	"encoding/csv"
	"fmt"
	"os"
	"strconv"
)

func CsvReader(fileLocation string) (CsvData, error) {
	fileReader, err := os.Open(fileLocation)
	if err != nil {
		os.Exit(1)
	}
	defer fileReader.Close()
	csvReader := csv.NewReader(fileReader)
	rows, err := csvReader.ReadAll()
	if err != nil {
		return nil, fmt.Errorf("error reading file %v", fileLocation)
	}
	var csvData CsvData
	var errors [][]string
	for index, row := range rows {
		if index == 0 {
			continue
		}

		quantity, err := strconv.Atoi(string(row[6]))
		if err != nil {
			errors = append(errors, row)
			continue
		}

		csvData = append(csvData, LocalData{ScryfallID: row[8], Quantity: int8(quantity), SetCode: row[1], CollectorNumber: row[3], Language: row[13]})
	}
	var amountOfErrors = len(errors)
	if amountOfErrors > 0 {
		fmt.Println("Number of rows with errors = ", amountOfErrors)
		fmt.Println("The following rows contained errors:")
		for _, row := range errors {
			fmt.Println(row)
		}
	}
	return csvData, nil
}
