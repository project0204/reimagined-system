async function editFormHandler(event) {
	event.preventDefault();

	const id = window.location.toString().split("/")[
		window.location.toString().split("/").length - 1
	];
	const name = document.querySelector("#ingredientInput").value.trim();
	const perPizza = document.querySelector("#perPizzaInput").value.trim();
	const stock = document.querySelector("#stockInput").value.trim();

	const response = await fetch(`/api/ingredients/${id}`, {
		method: "PUT",
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
		document.location.replace("/dashboard");
	} else {
		alert(response.statusText);
	}
}

document
	.querySelector("#editStock")
	.addEventListener("submit", editFormHandler);
