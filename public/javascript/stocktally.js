//function to add data into db
async function addIngredient(event) {
	event.preventDefault();

	const name = document
		.querySelector('input[name="ingrediantInput"]')
		.value.trim();
	const perPizza = document
		.querySelector("input[name='perPizzaInput']")
		.value.trim();
	const stock = document
		.querySelector('input[name="stockInput"]')
		.value.trim();

	if (name && perPizza && stock) {
		const response = await fetch("/api/ingredients", {
			method: "POST",
			body: JSON.stringify({
				name,
				perPizza,
				stock,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (response.ok) {
			document.location.replace('/stock');
		} else {
			alert(response.statusText);
		}
	}
}

document.querySelector(".addStock").addEventListener("submit", addIngredient);
