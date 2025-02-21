// Example data taken straight from api_data.json
let data = `[
	{
		"Quantity": 1,
		"object": "card",
		"id": "deaa0b9b-258e-4daf-8fec-ce64864d6bbf",
		"oracle_id": "97428d25-d850-4a98-8852-9440e06a9091",
		"multiverse_ids": [
			43529
		],
		"mtgo_id": 20656,
		"mtgo_foil_id": 20657,
		"tcgplayer_id": 11871,
		"cardmarket_id": 579,
		"name": "Cosmic Larva",
		"lang": "en",
		"released_at": "2004-06-04",
		"uri": "https://api.scryfall.com/cards/deaa0b9b-258e-4daf-8fec-ce64864d6bbf",
		"scryfall_uri": "https://scryfall.com/card/5dn/63/cosmic-larva?utm_source=api",
		"layout": "normal",
		"highres_image": true,
		"image_status": "highres_scan",
		"image_uris": {
			"small": "https://cards.scryfall.io/small/front/d/e/deaa0b9b-258e-4daf-8fec-ce64864d6bbf.jpg?1562880234",
			"normal": "https://cards.scryfall.io/normal/front/d/e/deaa0b9b-258e-4daf-8fec-ce64864d6bbf.jpg?1562880234",
			"large": "https://cards.scryfall.io/large/front/d/e/deaa0b9b-258e-4daf-8fec-ce64864d6bbf.jpg?1562880234",
			"png": "https://cards.scryfall.io/png/front/d/e/deaa0b9b-258e-4daf-8fec-ce64864d6bbf.png?1562880234",
			"art_crop": "https://cards.scryfall.io/art_crop/front/d/e/deaa0b9b-258e-4daf-8fec-ce64864d6bbf.jpg?1562880234",
			"border_crop": "https://cards.scryfall.io/border_crop/front/d/e/deaa0b9b-258e-4daf-8fec-ce64864d6bbf.jpg?1562880234"
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
		"rulings_uri": "https://api.scryfall.com/cards/deaa0b9b-258e-4daf-8fec-ce64864d6bbf/rulings",
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
		"edhrec_rank": 18367,
		"penny_rank": 9580,
		"prices": {
			"usd": "0.30",
			"usd_foil": "2.37",
			"usd_etched": null,
			"eur": "0.21",
			"eur_foil": "1.46",
			"tix": "0.02"
		},
		"related_uris": {
			"gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=43529\u0026printed=false",
			"tcgplayer_infinite_articles": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api\u0026trafcat=infinite\u0026u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26q%3DCosmic%2BLarva",
			"tcgplayer_infinite_decks": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api\u0026trafcat=infinite\u0026u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26q%3DCosmic%2BLarva",
			"edhrec": "https://edhrec.com/route/?cc=Cosmic+Larva"
		},
		"purchase_uris": {
			"tcgplayer": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api\u0026u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F11871%3Fpage%3D1",
			"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Fifth-Dawn/Cosmic-Larva?referrer=scryfall\u0026utm_campaign=card_prices\u0026utm_medium=text\u0026utm_source=scryfall",
			"cardhoarder": "https://www.cardhoarder.com/cards/20656?affiliate_id=scryfall\u0026ref=card-profile\u0026utm_campaign=affiliate\u0026utm_medium=card\u0026utm_source=scryfall"
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
			"trend-foil": 1.46,
			"avg1-foil": 0.2,
			"avg7-foil": 1.5,
			"avg30-foil": 1.7
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
		"penny_rank": 8774,
		"prices": {
			"usd": "0.11",
			"usd_foil": "0.79",
			"usd_etched": null,
			"eur": "0.20",
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
			"avg": 0.12,
			"low": 0.02,
			"trend": 0.2,
			"avg1": 0.02,
			"avg7": 0.24,
			"avg30": 0.16,
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
		"id": "e6c26b98-790e-403b-b94b-261a4c92e721",
		"oracle_id": "9f2af06d-8fb7-4276-bb92-3559a6d1fa18",
		"multiverse_ids": [
			191070
		],
		"mtgo_id": 32839,
		"mtgo_foil_id": 32840,
		"tcgplayer_id": 32568,
		"cardmarket_id": 21052,
		"name": "Captain of the Watch",
		"lang": "en",
		"released_at": "2009-07-17",
		"uri": "https://api.scryfall.com/cards/e6c26b98-790e-403b-b94b-261a4c92e721",
		"scryfall_uri": "https://scryfall.com/card/m10/6/captain-of-the-watch?utm_source=api",
		"layout": "normal",
		"highres_image": true,
		"image_status": "highres_scan",
		"image_uris": {
			"small": "https://cards.scryfall.io/small/front/e/6/e6c26b98-790e-403b-b94b-261a4c92e721.jpg?1561999339",
			"normal": "https://cards.scryfall.io/normal/front/e/6/e6c26b98-790e-403b-b94b-261a4c92e721.jpg?1561999339",
			"large": "https://cards.scryfall.io/large/front/e/6/e6c26b98-790e-403b-b94b-261a4c92e721.jpg?1561999339",
			"png": "https://cards.scryfall.io/png/front/e/6/e6c26b98-790e-403b-b94b-261a4c92e721.png?1561999339",
			"art_crop": "https://cards.scryfall.io/art_crop/front/e/6/e6c26b98-790e-403b-b94b-261a4c92e721.jpg?1561999339",
			"border_crop": "https://cards.scryfall.io/border_crop/front/e/6/e6c26b98-790e-403b-b94b-261a4c92e721.jpg?1561999339"
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
		"rulings_uri": "https://api.scryfall.com/cards/e6c26b98-790e-403b-b94b-261a4c92e721/rulings",
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
		"edhrec_rank": 3344,
		"penny_rank": 3889,
		"prices": {
			"usd": "0.52",
			"usd_foil": "7.50",
			"usd_etched": null,
			"eur": "0.43",
			"eur_foil": "2.23",
			"tix": "0.02"
		},
		"related_uris": {
			"gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=191070\u0026printed=false",
			"tcgplayer_infinite_articles": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api\u0026trafcat=infinite\u0026u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26q%3DCaptain%2Bof%2Bthe%2BWatch",
			"tcgplayer_infinite_decks": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api\u0026trafcat=infinite\u0026u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26q%3DCaptain%2Bof%2Bthe%2BWatch",
			"edhrec": "https://edhrec.com/route/?cc=Captain+of+the+Watch"
		},
		"purchase_uris": {
			"tcgplayer": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api\u0026u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F32568%3Fpage%3D1",
			"cardmarket": "https://www.cardmarket.com/en/Magic/Products/Singles/Magic-2010/Captain-of-the-Watch?referrer=scryfall\u0026utm_campaign=card_prices\u0026utm_medium=text\u0026utm_source=scryfall",
			"cardhoarder": "https://www.cardhoarder.com/cards/32839?affiliate_id=scryfall\u0026ref=card-profile\u0026utm_campaign=affiliate\u0026utm_medium=card\u0026utm_source=scryfall"
		},
		"Prices": {
			"idProduct": 21052,
			"idCategory": 1,
			"avg": 0.44,
			"low": 0.05,
			"trend": 0.43,
			"avg1": 0.05,
			"avg7": 0.41,
			"avg30": 0.45,
			"avg-foil": 1.82,
			"low-foil": 0.75,
			"trend-foil": 2.23,
			"avg1-foil": 0.89,
			"avg7-foil": 2.01,
			"avg30-foil": 2.81
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
    cardName.textContent = card.name;

    let cardPriceRange = document.createElement("p");
    cardPriceRange.textContent = card.Prices.low + " € — " + card.Prices.avg + " €";
    cardPriceRange.className = "PriceInfo";

    section.append(cardImage, document.createElement("br"), cardName, cardPriceRange);
    document.getElementById("Gallery").append(section);
}