// import Models
const Menu = require("./Menu");
const Pizza = require("./Pizza");
const Ingredient = require("./Ingredient");
const PizzaIngredients = require("./PizzaIngredients");

// Associations
Pizza.belongsTo(Menu, {
  foreignKey: "menu_id",
});

Menu.hasMany(Pizza, {
  foreignKey: "menu_id",
});

Pizza.belongsToMany(Ingredient, {
  through: PizzaIngredients,
  foreignKey: "pizza_id",
});

Ingredient.belongsToMany(Pizza, {
  through: PizzaIngredients,
  foreignKey: "ingredient_id",
});

module.exports = {
  Menu,
  Pizza,
  Ingredient,
  PizzaIngredients,
};
