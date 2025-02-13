package main

type MinimalNecessaryData struct {
	Name string `json:"name"`
	Lang string `json:"lang"`
	Promo bool `json:"promo"`
	SetName string `json:"set_name"`
	CollectorNumber string `json:"collector_number"`
	Prices struct {
		Low float64 `json:"low"`
		Avg float64 `json:"avg"`
		Trend float64 `json:"trend"`
		Avg1 float64 `json:"avg1"`
		Avg7 float64 `json:"avg7"`
		Avg30 float64 `json:"avg30"`
		LowFoil float64 `json:"low_foil"`
		AvgFoil float64 `json:"avg_foil"`
		TrendFoil float64 `json:"trend_foil"`
		Avg1Foil float64 `json:"avg1_foil"`
		Avg7Foil float64 `json:"avg7_foil"`
		Avg30Foil float64 `json:"avg30_foil"`
	}
}
