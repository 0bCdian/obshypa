package savetojson

import (
	"encoding/json"
	"os"
)

func SaveToSpecificJson(data any, fileName string) error {
	json, err := json.MarshalIndent(data, "", "	")
	if err != nil {
		return err
	}
	err = os.WriteFile(fileName, json, 0644)
	if err != nil {
		return err
	}
	return nil
}
