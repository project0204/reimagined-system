// import Models
const Pizza = require("./Pizza");
const Ingredient = require("./Ingredients");

// Pizza hasMany Ingredients
Pizza.hasMany(Ingredient, {
  foreignKey: "ingredient_id",
});

// Ingredient belongsToMany Pizza
Ingredient.belongsToMany(Pizza, {
  foreignKey: "pizza_id",
});

module.exports = {
  Pizza,
  Ingredient,
};
