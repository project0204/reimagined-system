const { PizzaIngredients } = require("../models");

const pizza_ingredientsData = [
  {
    pizza_id: 1,
    ingredient_id: 1,
  },
  {
    pizza_id: 1,
    ingredient_id: 2,
  },
  {
    pizza_id: 1,
    ingredient_id: 3,
  },
  {
    pizza_id: 2,
    ingredient_id: 1,
  },
  {
    pizza_id: 2,
    ingredient_id: 2,
  },
  {
    pizza_id: 2,
    ingredient_id: 3,
  },
  {
    pizza_id: 3,
    ingredient_id: 1,
  },
  {
    pizza_id: 3,
    ingredient_id: 2,
  },
  {
    pizza_id: 3,
    ingredient_id: 3,
  },
];

const seedPizzaIngredients = () => PizzaIngredients.bulkCreate(pizza_ingredientsData);

module.exports = seedPizzaIngredients;