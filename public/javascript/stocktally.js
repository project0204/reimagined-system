//function to add data into db
async function addIngredient(event) {
	event.preventDefault();

	const name = document
		.querySelector('textarea[name="ingrediantInput"]')
		.value.trim();
	const perPizza = document
		.querySelector("textarea[name='perPizzaInput']")
		.value.trim();
	const stock = document
		.querySelector('textarea[name="stockInput"]')
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
			document.location.reload();
		} else {
			alert(response.statusText);
		}
	}
}

document.querySelector(".addStock").addEventListener("submit", addIngredient);
