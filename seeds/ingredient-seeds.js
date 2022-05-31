const { Ingredient } = require("../models");

// Pizza 1: Pepperoni
// Pizza 2: Vegetarian
// Pizza 3: Pineapple

const ingredientData = [
  {
    name: "Pepperoni",
    image_url:
      "https://media.istockphoto.com/photos/single-slice-of-pepperoni-meatisolated-on-white-with-path-shot-from-picture-id1153708773?k=20&m=1153708773&s=612x612&w=0&h=GQ_BGoGypsBLRzmuFwLZtANuu_A4kkQ5DNwKr6gwchY=",
    perPizza: 24,
    stock: 500,
  },
  {
    name: "Mushrooms",
    image_url:
      "https://purepng.com/public/uploads/large/purepng.com-mushroommushroomtoadstoolgilled-fungipuffball-1411527070904r34nd.png",
    perPizza: 8,
    stock: 500,
  },
  {
    name: "Pineapple",
    image_url:
      "https://mpng.subpng.com/20180529/hhy/kisspng-pineapple-cocktail-garnish-slice-clip-art-pineapple-juice-5b0da839ecb0a0.2522564715276216899695.jpg",
    perPizza: 15,
    stock: 500,
  },
];

const seedIngredients = () => Ingredient.bulkCreate(ingredientData);

module.exports = seedIngredients;
