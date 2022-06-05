const ctx = document.getElementById("myChart");
const allData = [];
let stock1 = [];
let name1 = [];

async function getData() {
	const response = await fetch("/api/ingredients", {
		method: "GET",
	}); //from data base
	if (response.ok) {
		response
			.json()
			.then(function (data) {
				name1 = [
					data[0].name,
					data[1].name,
					data[2].name,
					data[3].name,
					data[4].name,
					data[5].name,
				];
				stock1 = [
					data[0].stock,
					data[1].stock,
					data[2].stock,
					data[3].stock,
					data[4].stock,
					data[5].stock,
				];
				const ingredientChart = new Chart(ctx, {
					type: "bar", //other options are pie horizontal bar line doughnut radar and polararea
					data: {
						labels: name1,
						datasets: [
							{
								label: "Stock",
								data: stock1,
								backgroundColor: [
									"rgba(255, 99, 132, 0.2)",
									"rgba(54, 162, 235, 0.2)",
									"rgba(255, 206, 86, 0.2)",
									"rgba(75, 192, 192, 0.2)",
									"rgba(153, 102, 255, 0.2)",
									"rgba(255, 159, 64, 0.2)",
								],
								borderColor: [
									"rgba(255, 99, 132, 1)",
									"rgba(54, 162, 235, 1)",
									"rgba(255, 206, 86, 1)",
									"rgba(75, 192, 192, 1)",
									"rgba(153, 102, 255, 1)",
									"rgba(255, 159, 64, 1)",
								],
								borderWidth: 1,
							},
						],
					},
					options: {
						plugins: {
							title: {
								display: true,
								text: "Stock Levels of Top Ingredients",
							},
						},

						scales: {
							y: {
								beginAtZero: true,
							},
						},
						responsive: true,
						maintainAspectRatio: false,
					},
				});
			})
			.catch((err) => {
				console.log(err);
			});
	} else {
		console.log("failed");
	}
}

getData();
