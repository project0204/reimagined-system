// import Models
const Pizza = require("./Pizza");
const Ingredient = require("./Ingredients");

// Pizza hasMany Ingredients
// Pizza.hasMany(Ingredient, {
//   foreignKey: "pizza_id",
//   as: "Pizza_id",
// });

// // Ingredient belongsTo Pizza
// Ingredient.belongsTo(Pizza, {
//   foreignKey: "pizza_id",
//   as: "pizzaId",
// });

Pizza.belongsToMany(Ingredient, { through: "pizzaingredients", foreignKey: 'pizza_id' })
Ingredient.belongsToMany(Pizza, { through: "pizzaingredients", foreignKey: 'ingredient_id' })

// Ingredient.belongsToMany(Pizza, {
//   foreignKey: "pizza_id",
//   as: "pId",
// });

module.exports = {
  Pizza,
  Ingredient,
};
