// import Models
const Pizza = require("./Pizza");
const Ingredient = require("./Ingredients");
const PizzaIngredients = require("./PizzaIngredients");

// Many-to-Many assocations

Pizza.belongsToMany(Ingredient, {
  through: PizzaIngredients,
  foreignKey: "pizza_id",
});

Ingredient.belongsToMany(Pizza, {
  through: PizzaIngredients,
  foreignKey: "ingredient_id",
});

module.exports = {
  Pizza,
  Ingredient,
  PizzaIngredients,
};
