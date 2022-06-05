async function loginFormHandler(event) {
	event.preventDefault();

	const email = document.getElementById("email-login").value.trim();
	const password = document.getElementById("password-login").value.trim();

	if (email && password) {
		const response = await fetch("/api/user/login", {
			method: "post",
			body: JSON.stringify({
				email,
				password,
			}),
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			document.location.replace("/dashboard");
		} else {
			alert(response.statusText);
		}
	}
}

document
	.querySelector(".login-form")
	.addEventListener("submit", loginFormHandler);
