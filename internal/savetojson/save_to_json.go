package savetojson

import (
	"encoding/json"
	"os"
)

func SaveToJson(data any) error {
	json, err := json.Marshal(data)
	if err != nil {
		return err
	}
	err = os.WriteFile("apiData.json", json, 0644)
	if err != nil {
		return err
	}
	return nil
}
