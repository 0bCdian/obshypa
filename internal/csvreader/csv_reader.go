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
		quantity, err := strconv.Atoi(string(row[8]))
		if err != nil {
			errors = append(errors, row)
			continue
		}
		csvData = append(csvData, LocalData{ScryfallID: row[10], Quantity: int8(quantity)})
	}
	if len(errors) > 0 {
		fmt.Println("the following rows contained errors:")
		for _, row := range errors {
			fmt.Println(row)
		}
	}
	return csvData, nil
}
