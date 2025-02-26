
showCards();

async function getCards() {
	response = await fetch('http://localhost:8000/cards?limit=200');
	const cards = await response.json();
	return cards;
}

async function showCards() {
	const cards = await getCards();

	// Iterate through cards
	for (const card of cards) {

		// Add card component to web
		const section = document.createElement("section");
		section.id = card.id;
		section.className = "CardSleeve";


		const cardImage = document.createElement("img");
		cardImage.src = card.image_uris.png;
		cardImage.className = "ImageSleeve";

		const cardName = document.createElement("p");
		cardName.textContent = card.printed_name ? card.printed_name : card.name;

		const cardPriceRange = document.createElement("p");
		cardPriceRange.textContent = `${card.prices.low} € — ${card.prices.avg} €`;
		cardPriceRange.className = "PriceInfo";

		section.append(cardImage, document.createElement("br"), cardName, cardPriceRange);
		document.getElementById("Gallery").append(section);
	}
}