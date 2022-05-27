// import Models
const Pizza = require("./Pizza");
const Ingredient = require("./Ingredients");

// Pizza hasMany Ingredients
Pizza.hasMany(Ingredient, {
  foreignKey: "pizza_id",
});

// Ingredient belongsTo Pizza
Ingredient.belongsTo(Pizza, {
  foreignKey: "pizza_id",
});

module.exports = {
  Pizza,
  Ingredient,
};
