package apiclient

import (
	"net/http"
	"io"
)

func callRESTAPIGetMethod(url string) ([]byte, error) {
	req, err := http.NewRequest(http.MethodGet, url, nil)
	if err != nil {
		return nil, err
	}
	req.Header = http.Header{
		"Accept":     {"application/json"},
		"User-Agent": {"shypa/1.0"},
	}
	client := &http.Client{}
	res, err := client.Do(req)
	if err != nil || res.StatusCode != http.StatusOK {
		return nil, err
	}
	defer res.Body.Close()
	stringBody, err := io.ReadAll(res.Body)
	if err != nil {
		return nil, err
	}

	return stringBody, err
}