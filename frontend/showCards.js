// Example data taken straight from api_data.json
let data = `[
	{
		"Quantity": 1,
		"object": "card",
		"id": "93fd43c6-4388-4067-8d86-2baebb1228a1",
		"oracle_id": "97428d25-d850-4a98-8852-9440e06a9091",
		"multiverse_ids": [
			81079
		],
		"mtgo_id": 0,
		"mtgo_foil_id": 0,
		"tcgplayer_id": 0,
		"cardmarket_id": 579,
		"name": "Cosmic Larva",
		"printed_name": "Larvas cósmicas",
		"lang": "es",
		"released_at": "2004-06-04",
		"uri": "https://api.scryfall.com/cards/93fd43c6-4388-4067-8d86-2baebb1228a1",
		"scryfall_uri": "https://scryfall.com/card/5dn/63/es/larvas-c%C3%B3smicas?utm_source=api",
		"layout": "normal",
		"highres_image": false,
		"image_status": "placeholder",
		"image_uris": {
			"small": "https://cards.scryfall.io/small/front/9/3/93fd43c6-4388-4067-8d86-2baebb1228a1.jpg?1562878561",
			"normal": "https://cards.scryfall.io/normal/front/9/3/93fd43c6-4388-4067-8d86-2baebb1228a1.jpg?1562878561",
			"large": "https://cards.scryfall.io/large/front/9/3/93fd43c6-4388-4067-8d86-2baebb1228a1.jpg?1562878561",
			"png": "https://cards.scryfall.io/png/front/9/3/93fd43c6-4388-4067-8d86-2baebb1228a1.png?1562878561",
			"art_crop": "https://cards.scryfall.io/art_crop/front/9/3/93fd43c6-4388-4067-8d86-2baebb1228a1.jpg?1562878561",
			"border_crop": "https://cards.scryfall.io/border_crop/front/9/3/93fd43c6-4388-4067-8d86-2baebb1228a1.jpg?1562878561"
		},
		"mana_cost": "{1}{R}{R}",
		"cmc": 3,
		"type_line": "Creature — Beast",
		"oracle_text": "Trample\\nAt the beginning of your upkeep, sacrifice this creature unless you sacrifice two lands.",
		"power": "7",
		"toughness": "6",
		"colors": [
			"R"
		],
		"color_identity": [
			"R"
		],
		"keywords": [
			"Trample"
		],
		"legalities": {
			"standard": "not_legal",
			"future": "not_legal",
			"historic": "not_legal",
			"timeless": "not_legal",
			"gladiator": "not_legal",
			"pioneer": "not_legal",
			"explorer": "not_legal",
			"modern": "legal",
			"legacy": "legal",
			"pauper": "not_legal",
			"vintage": "legal",
			"penny": "legal",
			"commander": "legal",
			"oathbreaker": "legal",
			"standardbrawl": "not_legal",
			"brawl": "not_legal",
			"alchemy": "not_legal",
			"paupercommander": "not_legal",
			"duel": "legal",
			"oldschool": "not_legal",
			"premodern": "not_legal",
			"predh": "legal"
		},
		"games": [
			"paper",
			"mtgo"
		],
		"reserved": false,
		"foil": true,
		"nonfoil": true,
		"finishes": [
			"nonfoil",
			"foil"
		],
		"oversized": false,
		"promo": false,
		"reprint": false,
		"variation": false,
		"set_id": "e4bc1b87-5476-463c-8640-4c414ecf1763",
		"set": "5dn",
		"set_name": "Fifth Dawn",
		"set_type": "expansion",
		"set_uri": "https://api.scryfall.com/sets/e4bc1b87-5476-463c-8640-4c414ecf1763",
		"set_search_uri": "https://api.scryfall.com/cards/search?order=set\u0026q=e%3A5dn\u0026unique=prints",
		"scryfall_set_uri": "https://scryfall.com/sets/5dn?utm_source=api",
		"rulings_uri": "https://api.scryfall.com/cards/93fd43c6-4388-4067-8d86-2baebb1228a1/rulings",
		"prints_search_uri": "https://api.scryfall.com/cards/search?order=released\u0026q=oracleid%3A97428d25-d850-4a98-8852-9440e06a9091\u0026unique=prints",
		"collector_number": "63",
		"digital": false,
		"rarity": "rare",
		"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
		"artist": "Jeff Easley",
		"artist_ids": [
			"da17055e-693c-461a-b132-67dd88b42ca6"
		],
		"illustration_id": "a9d4728d-bc0a-4a44-9943-587b10994d2d",
		"border_color": "black",
		"frame": "2003",
		"full_art": false,
		"textless": false,
		"booster": true,
		"story_spotlight": false,
		"edhrec_rank": 18484,
		"penny_rank": 9757,
		"prices": {
			"usd": "",
			"usd_foil": "",
			"usd_etched": null,
			"eur": "",
			"eur_foil": "",
			"tix": ""
		},
		"related_uris": {
			"gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=81079\u0026printed=true",
			"tcgplayer_infinite_articles": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api\u0026trafcat=infinite\u0026u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26q%3DCosmic%2BLarva",
			"tcgplayer_infinite_decks": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api\u0026trafcat=infinite\u0026u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26q%3DCosmic%2BLarva",
			"edhrec": "https://edhrec.com/route/?cc=Cosmic+Larva"
		},
		"purchase_uris": {
			"tcgplayer": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api\u0026u=https%3A%2F%2Fwww.tcgplayer.com%2Fsearch%2Fmagic%2Fproduct%3FproductLineName%3Dmagic%26q%3DCosmic%2BLarva%26view%3Dgrid",
			"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall\u0026searchString=Cosmic+Larva\u0026utm_campaign=card_prices\u0026utm_medium=text\u0026utm_source=scryfall",
			"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall\u0026data%5Bsearch%5D=Cosmic+Larva\u0026ref=card-profile\u0026utm_campaign=affiliate\u0026utm_medium=card\u0026utm_source=scryfall"
		},
		"Prices": {
			"idProduct": 579,
			"idCategory": 1,
			"avg": 0.19,
			"low": 0.02,
			"trend": 0.21,
			"avg1": 0.4,
			"avg7": 0.22,
			"avg30": 0.17,
			"avg-foil": 0.85,
			"low-foil": 0.7,
			"trend-foil": 1.35,
			"avg1-foil": 0.99,
			"avg7-foil": 1.35,
			"avg30-foil": 1.69
		}
	},
	{
		"Quantity": 2,
		"object": "card",
		"id": "64bbd438-7df2-4d7b-88ad-4531ebaf3931",
		"oracle_id": "37e44e1c-481d-4f5d-b76b-036f40e9124e",
		"multiverse_ids": [
			29767
		],
		"mtgo_id": 16937,
		"mtgo_foil_id": 16938,
		"tcgplayer_id": 9469,
		"cardmarket_id": 2606,
		"name": "Flame Burst",
		"printed_name": "",
		"lang": "en",
		"released_at": "2001-10-01",
		"uri": "https://api.scryfall.com/cards/64bbd438-7df2-4d7b-88ad-4531ebaf3931",
		"scryfall_uri": "https://scryfall.com/card/ody/194/flame-burst?utm_source=api",
		"layout": "normal",
		"highres_image": true,
		"image_status": "highres_scan",
		"image_uris": {
			"small": "https://cards.scryfall.io/small/front/6/4/64bbd438-7df2-4d7b-88ad-4531ebaf3931.jpg?1562913643",
			"normal": "https://cards.scryfall.io/normal/front/6/4/64bbd438-7df2-4d7b-88ad-4531ebaf3931.jpg?1562913643",
			"large": "https://cards.scryfall.io/large/front/6/4/64bbd438-7df2-4d7b-88ad-4531ebaf3931.jpg?1562913643",
			"png": "https://cards.scryfall.io/png/front/6/4/64bbd438-7df2-4d7b-88ad-4531ebaf3931.png?1562913643",
			"art_crop": "https://cards.scryfall.io/art_crop/front/6/4/64bbd438-7df2-4d7b-88ad-4531ebaf3931.jpg?1562913643",
			"border_crop": "https://cards.scryfall.io/border_crop/front/6/4/64bbd438-7df2-4d7b-88ad-4531ebaf3931.jpg?1562913643"
		},
		"mana_cost": "{1}{R}",
		"cmc": 2,
		"type_line": "Instant",
		"oracle_text": "Flame Burst deals X damage to any target, where X is 2 plus the number of cards named Flame Burst in all graveyards.",
		"power": "",
		"toughness": "",
		"colors": [
			"R"
		],
		"color_identity": [
			"R"
		],
		"keywords": [],
		"legalities": {
			"standard": "not_legal",
			"future": "not_legal",
			"historic": "not_legal",
			"timeless": "not_legal",
			"gladiator": "not_legal",
			"pioneer": "not_legal",
			"explorer": "not_legal",
			"modern": "not_legal",
			"legacy": "legal",
			"pauper": "legal",
			"vintage": "legal",
			"penny": "not_legal",
			"commander": "legal",
			"oathbreaker": "legal",
			"standardbrawl": "not_legal",
			"brawl": "not_legal",
			"alchemy": "not_legal",
			"paupercommander": "legal",
			"duel": "legal",
			"oldschool": "not_legal",
			"premodern": "legal",
			"predh": "legal"
		},
		"games": [
			"paper",
			"mtgo"
		],
		"reserved": false,
		"foil": true,
		"nonfoil": true,
		"finishes": [
			"nonfoil",
			"foil"
		],
		"oversized": false,
		"promo": false,
		"reprint": false,
		"variation": false,
		"set_id": "b0d90d2d-494a-4224-bfa0-36ce5ee281b1",
		"set": "ody",
		"set_name": "Odyssey",
		"set_type": "expansion",
		"set_uri": "https://api.scryfall.com/sets/b0d90d2d-494a-4224-bfa0-36ce5ee281b1",
		"set_search_uri": "https://api.scryfall.com/cards/search?order=set\u0026q=e%3Aody\u0026unique=prints",
		"scryfall_set_uri": "https://scryfall.com/sets/ody?utm_source=api",
		"rulings_uri": "https://api.scryfall.com/cards/64bbd438-7df2-4d7b-88ad-4531ebaf3931/rulings",
		"prints_search_uri": "https://api.scryfall.com/cards/search?order=released\u0026q=oracleid%3A37e44e1c-481d-4f5d-b76b-036f40e9124e\u0026unique=prints",
		"collector_number": "194",
		"digital": false,
		"rarity": "common",
		"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
		"artist": "Ron Spencer",
		"artist_ids": [
			"dab52c11-0564-4207-a4a1-c1735c946a65"
		],
		"illustration_id": "d847de15-3fdd-4f8b-b093-1487101eb825",
		"border_color": "black",
		"frame": "1997",
		"full_art": false,
		"textless": false,
		"booster": true,
		"story_spotlight": false,
		"edhrec_rank": 28099,
		"penny_rank": 8776,
		"prices": {
			"usd": "0.11",
			"usd_foil": "0.79",
			"usd_etched": null,
			"eur": "0.17",
			"eur_foil": "1.31",
			"tix": "0.04"
		},
		"related_uris": {
			"gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=29767\u0026printed=false",
			"tcgplayer_infinite_articles": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api\u0026trafcat=infinite\u0026u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26q%3DFlame%2BBurst",
			"tcgplayer_infinite_decks": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api\u0026trafcat=infinite\u0026u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26q%3DFlame%2BBurst",
			"edhrec": "https://edhrec.com/route/?cc=Flame+Burst"
		},
		"purchase_uris": {
			"tcgplayer": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api\u0026u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F9469%3Fpage%3D1",
			"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Odyssey/Flame-Burst?referrer=scryfall\u0026utm_campaign=card_prices\u0026utm_medium=text\u0026utm_source=scryfall",
			"cardhoarder": "https://www.cardhoarder.com/cards/16937?affiliate_id=scryfall\u0026ref=card-profile\u0026utm_campaign=affiliate\u0026utm_medium=card\u0026utm_source=scryfall"
		},
		"Prices": {
			"idProduct": 2606,
			"idCategory": 1,
			"avg": 0.19,
			"low": 0.02,
			"trend": 0.17,
			"avg1": 0.02,
			"avg7": 0.25,
			"avg30": 0.15,
			"avg-foil": 0,
			"low-foil": 0.49,
			"trend-foil": 1.31,
			"avg1-foil": 1.24,
			"avg7-foil": 1.48,
			"avg30-foil": 1.18
		}
	},
	{
		"Quantity": 1,
		"object": "card",
		"id": "53d50dce-b58e-4845-98c3-fcbe969ede9e",
		"oracle_id": "9f2af06d-8fb7-4276-bb92-3559a6d1fa18",
		"multiverse_ids": [
			200557
		],
		"mtgo_id": 0,
		"mtgo_foil_id": 0,
		"tcgplayer_id": 0,
		"cardmarket_id": 21052,
		"name": "Captain of the Watch",
		"printed_name": "Capitán de la Guardia",
		"lang": "es",
		"released_at": "2009-07-17",
		"uri": "https://api.scryfall.com/cards/53d50dce-b58e-4845-98c3-fcbe969ede9e",
		"scryfall_uri": "https://scryfall.com/card/m10/6/es/capit%C3%A1n-de-la-guardia?utm_source=api",
		"layout": "normal",
		"highres_image": false,
		"image_status": "lowres",
		"image_uris": {
			"small": "https://cards.scryfall.io/small/front/5/3/53d50dce-b58e-4845-98c3-fcbe969ede9e.jpg?1561980308",
			"normal": "https://cards.scryfall.io/normal/front/5/3/53d50dce-b58e-4845-98c3-fcbe969ede9e.jpg?1561980308",
			"large": "https://cards.scryfall.io/large/front/5/3/53d50dce-b58e-4845-98c3-fcbe969ede9e.jpg?1561980308",
			"png": "https://cards.scryfall.io/png/front/5/3/53d50dce-b58e-4845-98c3-fcbe969ede9e.png?1561980308",
			"art_crop": "https://cards.scryfall.io/art_crop/front/5/3/53d50dce-b58e-4845-98c3-fcbe969ede9e.jpg?1561980308",
			"border_crop": "https://cards.scryfall.io/border_crop/front/5/3/53d50dce-b58e-4845-98c3-fcbe969ede9e.jpg?1561980308"
		},
		"mana_cost": "{4}{W}{W}",
		"cmc": 6,
		"type_line": "Creature — Human Soldier",
		"oracle_text": "Vigilance (Attacking doesn't cause this creature to tap.)\\nOther Soldier creatures you control get +1/+1 and have vigilance.\\nWhen this creature enters, create three 1/1 white Soldier creature tokens.",
		"power": "3",
		"toughness": "3",
		"colors": [
			"W"
		],
		"color_identity": [
			"W"
		],
		"keywords": [
			"Vigilance"
		],
		"legalities": {
			"standard": "not_legal",
			"future": "not_legal",
			"historic": "not_legal",
			"timeless": "not_legal",
			"gladiator": "not_legal",
			"pioneer": "not_legal",
			"explorer": "not_legal",
			"modern": "legal",
			"legacy": "legal",
			"pauper": "not_legal",
			"vintage": "legal",
			"penny": "legal",
			"commander": "legal",
			"oathbreaker": "legal",
			"standardbrawl": "not_legal",
			"brawl": "not_legal",
			"alchemy": "not_legal",
			"paupercommander": "not_legal",
			"duel": "legal",
			"oldschool": "not_legal",
			"premodern": "not_legal",
			"predh": "legal"
		},
		"games": [
			"paper",
			"mtgo"
		],
		"reserved": false,
		"foil": true,
		"nonfoil": true,
		"finishes": [
			"nonfoil",
			"foil"
		],
		"oversized": false,
		"promo": false,
		"reprint": false,
		"variation": false,
		"set_id": "0dba38a9-6b9d-4768-9831-4e03e8970a0b",
		"set": "m10",
		"set_name": "Magic 2010",
		"set_type": "core",
		"set_uri": "https://api.scryfall.com/sets/0dba38a9-6b9d-4768-9831-4e03e8970a0b",
		"set_search_uri": "https://api.scryfall.com/cards/search?order=set\u0026q=e%3Am10\u0026unique=prints",
		"scryfall_set_uri": "https://scryfall.com/sets/m10?utm_source=api",
		"rulings_uri": "https://api.scryfall.com/cards/53d50dce-b58e-4845-98c3-fcbe969ede9e/rulings",
		"prints_search_uri": "https://api.scryfall.com/cards/search?order=released\u0026q=oracleid%3A9f2af06d-8fb7-4276-bb92-3559a6d1fa18\u0026unique=prints",
		"collector_number": "6",
		"digital": false,
		"rarity": "rare",
		"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
		"artist": "Greg Staples",
		"artist_ids": [
			"93d65564-bf00-447b-8406-e2031f03b6b1"
		],
		"illustration_id": "ddf82b4a-51ad-46ca-b96f-45f2d663bc7c",
		"border_color": "black",
		"frame": "2003",
		"full_art": false,
		"textless": false,
		"booster": true,
		"story_spotlight": false,
		"edhrec_rank": 3347,
		"penny_rank": 3882,
		"prices": {
			"usd": "",
			"usd_foil": "",
			"usd_etched": null,
			"eur": "",
			"eur_foil": "",
			"tix": ""
		},
		"related_uris": {
			"gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=200557\u0026printed=true",
			"tcgplayer_infinite_articles": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api\u0026trafcat=infinite\u0026u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26q%3DCaptain%2Bof%2Bthe%2BWatch",
			"tcgplayer_infinite_decks": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api\u0026trafcat=infinite\u0026u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26q%3DCaptain%2Bof%2Bthe%2BWatch",
			"edhrec": "https://edhrec.com/route/?cc=Captain+of+the+Watch"
		},
		"purchase_uris": {
			"tcgplayer": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api\u0026u=https%3A%2F%2Fwww.tcgplayer.com%2Fsearch%2Fmagic%2Fproduct%3FproductLineName%3Dmagic%26q%3DCaptain%2Bof%2Bthe%2BWatch%26view%3Dgrid",
			"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall\u0026searchString=Captain+of+the+Watch\u0026utm_campaign=card_prices\u0026utm_medium=text\u0026utm_source=scryfall",
			"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall\u0026data%5Bsearch%5D=Captain+of+the+Watch\u0026ref=card-profile\u0026utm_campaign=affiliate\u0026utm_medium=card\u0026utm_source=scryfall"
		},
		"Prices": {
			"idProduct": 21052,
			"idCategory": 1,
			"avg": 0.44,
			"low": 0.05,
			"trend": 0.47,
			"avg1": 0.77,
			"avg7": 0.51,
			"avg30": 0.47,
			"avg-foil": 1.82,
			"low-foil": 0.75,
			"trend-foil": 2.36,
			"avg1-foil": 2.61,
			"avg7-foil": 2.17,
			"avg30-foil": 2.69
		}
	},
	{
		"Quantity": 2,
		"object": "card",
		"id": "7bc94b7b-e8ef-4c7c-a551-337411084a9e",
		"oracle_id": "e3d08582-85ba-48c4-a453-4a5a385a0c3e",
		"multiverse_ids": [
			202845
		],
		"mtgo_id": 0,
		"mtgo_foil_id": 0,
		"tcgplayer_id": 0,
		"cardmarket_id": 21914,
		"name": "Sadistic Sacrament",
		"printed_name": "Sacramento sádico",
		"lang": "es",
		"released_at": "2009-10-02",
		"uri": "https://api.scryfall.com/cards/7bc94b7b-e8ef-4c7c-a551-337411084a9e",
		"scryfall_uri": "https://scryfall.com/card/zen/110/es/sacramento-s%C3%A1dico?utm_source=api",
		"layout": "normal",
		"highres_image": false,
		"image_status": "lowres",
		"image_uris": {
			"small": "https://cards.scryfall.io/small/front/7/b/7bc94b7b-e8ef-4c7c-a551-337411084a9e.jpg?1562613678",
			"normal": "https://cards.scryfall.io/normal/front/7/b/7bc94b7b-e8ef-4c7c-a551-337411084a9e.jpg?1562613678",
			"large": "https://cards.scryfall.io/large/front/7/b/7bc94b7b-e8ef-4c7c-a551-337411084a9e.jpg?1562613678",
			"png": "https://cards.scryfall.io/png/front/7/b/7bc94b7b-e8ef-4c7c-a551-337411084a9e.png?1562613678",
			"art_crop": "https://cards.scryfall.io/art_crop/front/7/b/7bc94b7b-e8ef-4c7c-a551-337411084a9e.jpg?1562613678",
			"border_crop": "https://cards.scryfall.io/border_crop/front/7/b/7bc94b7b-e8ef-4c7c-a551-337411084a9e.jpg?1562613678"
		},
		"mana_cost": "{B}{B}{B}",
		"cmc": 3,
		"type_line": "Sorcery",
		"oracle_text": "Kicker {7} (You may pay an additional {7} as you cast this spell.)\\nSearch target player's library for up to three cards, exile them, then that player shuffles. If this spell was kicked, instead search that player's library for up to fifteen cards, exile them, then that player shuffles.",
		"power": "",
		"toughness": "",
		"colors": [
			"B"
		],
		"color_identity": [
			"B"
		],
		"keywords": [
			"Kicker"
		],
		"legalities": {
			"standard": "not_legal",
			"future": "not_legal",
			"historic": "not_legal",
			"timeless": "not_legal",
			"gladiator": "not_legal",
			"pioneer": "not_legal",
			"explorer": "not_legal",
			"modern": "legal",
			"legacy": "legal",
			"pauper": "not_legal",
			"vintage": "legal",
			"penny": "legal",
			"commander": "legal",
			"oathbreaker": "legal",
			"standardbrawl": "not_legal",
			"brawl": "not_legal",
			"alchemy": "not_legal",
			"paupercommander": "not_legal",
			"duel": "legal",
			"oldschool": "not_legal",
			"premodern": "not_legal",
			"predh": "legal"
		},
		"games": [
			"paper",
			"mtgo"
		],
		"reserved": false,
		"foil": true,
		"nonfoil": true,
		"finishes": [
			"nonfoil",
			"foil"
		],
		"oversized": false,
		"promo": false,
		"reprint": false,
		"variation": false,
		"set_id": "eb16a2bd-a218-4e4e-8339-4aa1afc0c8d2",
		"set": "zen",
		"set_name": "Zendikar",
		"set_type": "expansion",
		"set_uri": "https://api.scryfall.com/sets/eb16a2bd-a218-4e4e-8339-4aa1afc0c8d2",
		"set_search_uri": "https://api.scryfall.com/cards/search?order=set\u0026q=e%3Azen\u0026unique=prints",
		"scryfall_set_uri": "https://scryfall.com/sets/zen?utm_source=api",
		"rulings_uri": "https://api.scryfall.com/cards/7bc94b7b-e8ef-4c7c-a551-337411084a9e/rulings",
		"prints_search_uri": "https://api.scryfall.com/cards/search?order=released\u0026q=oracleid%3Ae3d08582-85ba-48c4-a453-4a5a385a0c3e\u0026unique=prints",
		"collector_number": "110",
		"digital": false,
		"rarity": "rare",
		"card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
		"artist": "Dan Murayama Scott",
		"artist_ids": [
			"f852fa13-137e-40f2-bbc1-0f01df09c0e0"
		],
		"illustration_id": "4cd11f14-32e7-47b0-827b-fccc5a6d3137",
		"border_color": "black",
		"frame": "2003",
		"full_art": false,
		"textless": false,
		"booster": true,
		"story_spotlight": false,
		"edhrec_rank": 14377,
		"penny_rank": 4655,
		"prices": {
			"usd": "",
			"usd_foil": "",
			"usd_etched": null,
			"eur": "",
			"eur_foil": "",
			"tix": ""
		},
		"related_uris": {
			"gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=202845\u0026printed=true",
			"tcgplayer_infinite_articles": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api\u0026trafcat=infinite\u0026u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26q%3DSadistic%2BSacrament",
			"tcgplayer_infinite_decks": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api\u0026trafcat=infinite\u0026u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26q%3DSadistic%2BSacrament",
			"edhrec": "https://edhrec.com/route/?cc=Sadistic+Sacrament"
		},
		"purchase_uris": {
			"tcgplayer": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api\u0026u=https%3A%2F%2Fwww.tcgplayer.com%2Fsearch%2Fmagic%2Fproduct%3FproductLineName%3Dmagic%26q%3DSadistic%2BSacrament%26view%3Dgrid",
			"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall\u0026searchString=Sadistic+Sacrament\u0026utm_campaign=card_prices\u0026utm_medium=text\u0026utm_source=scryfall",
			"cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall\u0026data%5Bsearch%5D=Sadistic+Sacrament\u0026ref=card-profile\u0026utm_campaign=affiliate\u0026utm_medium=card\u0026utm_source=scryfall"
		},
		"Prices": {
			"idProduct": 21914,
			"idCategory": 1,
			"avg": 0.62,
			"low": 0.08,
			"trend": 0.52,
			"avg1": 0.74,
			"avg7": 0.49,
			"avg30": 0.52,
			"avg-foil": 2,
			"low-foil": 0.25,
			"trend-foil": 2,
			"avg1-foil": 2.98,
			"avg7-foil": 2.18,
			"avg30-foil": 1.97
		}
	}]`;

let cards = JSON.parse(data);

// Iterate through cards
for (let card of cards) {

    // Añadir a la web, en cuerpo
    let fragment = document.createDocumentFragment();

    let section = document.createElement("section");
    section.id = card.id;
    section.className = "CardSleeve";


    let cardImage = document.createElement("img");
    cardImage.src = card.image_uris.png;
    cardImage.className = "ImageSleeve";

    let cardName = document.createElement("p");
    cardName.textContent = card.printed_name ? card.printed_name : card.name;

    let cardPriceRange = document.createElement("p");
    cardPriceRange.textContent = card.Prices.low + " € — " + card.Prices.avg + " €";
    cardPriceRange.className = "PriceInfo";

    section.append(cardImage, document.createElement("br"), cardName, cardPriceRange);
    document.getElementById("Gallery").append(section);
}