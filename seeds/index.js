const seedMenu = require("./menu-seeds");
const seedIngredients = require("./ingredient-seeds");
const seedPizzas = require("./pizza-seeds");
const seedPizzaIngredients = require("./pizza_ingredients-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  console.log("<><><><><><><><>");

  await seedMenu();
  console.log("\n----- MENU SEEDED -----\n");
  console.log("<><><><><><><><>");

  await seedPizzas();
  console.log("\n----- PIZZAS SEEDED -----\n");
  console.log("<><><><><><><><>");

  await seedIngredients();
  console.log("\n----- INGREDIENTS SEEDED -----\n");
  console.log("<><><><><><><><>");

  await seedPizzaIngredients();
  console.log("\n----- PIZZA INGREDIENTS SEEDED -----\n");
  console.log("<><><><><><><><>");

  process.exit(0);
};

seedAll();
