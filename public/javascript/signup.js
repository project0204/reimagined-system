async function signupFormHandler(event) {
	event.preventDefault();

	const email = document.getElementById("email-signup").value.trim();
	const password = document.getElementById("password-signup").value.trim();

	if (email && password) {
		const response = await fetch("/api/user", {
			method: "post",
			body: JSON.stringify({
				email,
				password,
			}),
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			document.location.replace("/stock/");
		} else {
			alert(response.statusText);
		}
	}
}
document
	.querySelector(".signup-form")
	.addEventListener("submit", signupFormHandler);
