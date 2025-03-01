package apiclient

type ScryfallApiData struct {
	Object        string             `json:"object"`
	ID            string             `json:"id"`
	OracleID      string             `json:"oracle_id"`
	MultiverseIds []int              `json:"multiverse_ids"`
	MtgoID        int                `json:"mtgo_id"`
	MtgoFoilID    int                `json:"mtgo_foil_id"`
	TcgplayerID   int                `json:"tcgplayer_id"`
	CardmarketID  int                `json:"cardmarket_id"`
	Name          string             `json:"name"`
	PrintedName   string             `json:"printed_name"`
	Lang          string             `json:"lang"`
	ReleasedAt    string             `json:"released_at"`
	URI           string             `json:"uri"`
	ScryfallURI   string             `json:"scryfall_uri"`
	Layout        string             `json:"layout"`
	HighresImage  bool               `json:"highres_image"`
	ImageStatus   string             `json:"image_status"`
	ImageUris     ScryfallImageUris  `json:"image_uris"`
	ManaCost      string             `json:"mana_cost"`
	Cmc           float64            `json:"cmc"`
	TypeLine      string             `json:"type_line"`
	OracleText    string             `json:"oracle_text"`
	Power         string             `json:"power"`
	Toughness     string             `json:"toughness"`
	Colors        []string           `json:"colors"`
	ColorIdentity []string           `json:"color_identity"`
	Keywords      []string           `json:"keywords"`
	CardFaces     []ScryfallCardFace `json:"card_faces"`
	Legalities    struct {
		Standard        string `json:"standard"`
		Future          string `json:"future"`
		Historic        string `json:"historic"`
		Timeless        string `json:"timeless"`
		Gladiator       string `json:"gladiator"`
		Pioneer         string `json:"pioneer"`
		Explorer        string `json:"explorer"`
		Modern          string `json:"modern"`
		Legacy          string `json:"legacy"`
		Pauper          string `json:"pauper"`
		Vintage         string `json:"vintage"`
		Penny           string `json:"penny"`
		Commander       string `json:"commander"`
		Oathbreaker     string `json:"oathbreaker"`
		Standardbrawl   string `json:"standardbrawl"`
		Brawl           string `json:"brawl"`
		Alchemy         string `json:"alchemy"`
		Paupercommander string `json:"paupercommander"`
		Duel            string `json:"duel"`
		Oldschool       string `json:"oldschool"`
		Premodern       string `json:"premodern"`
		Predh           string `json:"predh"`
	} `json:"legalities"`
	Games           []string `json:"games"`
	Reserved        bool     `json:"reserved"`
	Finishes        []string `json:"finishes"`
	Oversized       bool     `json:"oversized"`
	Promo           bool     `json:"promo"`
	Reprint         bool     `json:"reprint"`
	Variation       bool     `json:"variation"`
	SetID           string   `json:"set_id"`
	Set             string   `json:"set"`
	SetName         string   `json:"set_name"`
	SetType         string   `json:"set_type"`
	SetURI          string   `json:"set_uri"`
	SetSearchURI    string   `json:"set_search_uri"`
	ScryfallSetURI  string   `json:"scryfall_set_uri"`
	RulingsURI      string   `json:"rulings_uri"`
	PrintsSearchURI string   `json:"prints_search_uri"`
	CollectorNumber string   `json:"collector_number"`
	Digital         bool     `json:"digital"`
	Rarity          string   `json:"rarity"`
	CardBackID      string   `json:"card_back_id"`
	Artist          string   `json:"artist"`
	ArtistIds       []string `json:"artist_ids"`
	IllustrationID  string   `json:"illustration_id"`
	BorderColor     string   `json:"border_color"`
	Frame           string   `json:"frame"`
	FullArt         bool     `json:"full_art"`
	Textless        bool     `json:"textless"`
	Booster         bool     `json:"booster"`
	StorySpotlight  bool     `json:"story_spotlight"`
	EdhrecRank      float64  `json:"edhrec_rank"`
	PennyRank       float64  `json:"penny_rank"`
	Prices          struct {
		Usd       string      `json:"usd"`
		UsdFoil   string      `json:"usd_foil"`
		UsdEtched interface{} `json:"usd_etched"`
		Eur       string      `json:"eur"`
		EurFoil   string      `json:"eur_foil"`
		Tix       string      `json:"tix"`
	} `json:"prices"`
	RelatedUris struct {
		Gatherer                  string `json:"gatherer"`
		TcgplayerInfiniteArticles string `json:"tcgplayer_infinite_articles"`
		TcgplayerInfiniteDecks    string `json:"tcgplayer_infinite_decks"`
		Edhrec                    string `json:"edhrec"`
	} `json:"related_uris"`
	PurchaseUris struct {
		Tcgplayer   string `json:"tcgplayer"`
		Cardmarket  string `json:"cardmarket"`
		Cardhoarder string `json:"cardhoarder"`
	} `json:"purchase_uris"`
}

type ScryfallCardFace struct {
	Object    string            `json:"object"`
	Name      string            `json:"name"`
	ImageUris ScryfallImageUris `json:"image_uris"`
}

type ScryfallImageUris struct {
	Small      string `json:"small"`
	Normal     string `json:"normal"`
	Large      string `json:"large"`
	Png        string `json:"png"`
	ArtCrop    string `json:"art_crop"`
	BorderCrop string `json:"border_crop"`
}

type ScryfallData struct {
	Quantity int8 `json:"quantity"`
	Foil     bool `json:"foil"` // In Scryfall it means that the card can have a foil finish. This seems like an obsolete field, as it doesn't show on Scryfall's API documentation. We're making it mean that the physical cards have a foil finish.
	ScryfallApiData
}

type CardMarketPriceGuide struct {
	IDProduct  int     `json:"idProduct"`
	IDCategory int     `json:"idCategory"`
	Avg        float64 `json:"avg"`
	Low        float64 `json:"low"`
	Trend      float64 `json:"trend"`
	Avg1       float64 `json:"avg1"`
	Avg7       float64 `json:"avg7"`
	Avg30      float64 `json:"avg30"`
	AvgFoil    float64 `json:"avg-foil"`
	LowFoil    float64 `json:"low-foil"`
	TrendFoil  float64 `json:"trend-foil"`
	Avg1Foil   float64 `json:"avg1-foil"`
	Avg7Foil   float64 `json:"avg7-foil"`
	Avg30Foil  float64 `json:"avg30-foil"`
}

type CardmarketData struct {
	Version     int                    `json:"version"`
	CreatedAt   string                 `json:"createdAt"`
	PriceGuides []CardMarketPriceGuide `json:"priceGuides"`
}

type Card struct {
	ScryfallData
	Prices CardMarketPriceGuide `json:"prices"`
}
