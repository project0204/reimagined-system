const sequelize = require("../config/connection");

const seedIngredients = require("./ingredient-seeds");
const seedPizzas = require("./pizza-seeds");
const seedPizzaIngredients = require("./pizza_ingredients-seeds");
const seedUsers = require("./user-seeds");
const seedMenu = require("./menu-seeds");

const seed = async () => {
	await sequelize.sync({ force: true });
	console.log("--------------");
	await seedUsers();
	console.log("--------------");

	await seedMenu();
	console.log("--------------");

	await seedPizzas();
	console.log("--------------");

	await seedIngredients();
	console.log("--------------");

	await seedPizzaIngredients();
	console.log("--------------");

	process.exit(0);
};

seed();
