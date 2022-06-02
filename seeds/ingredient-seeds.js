const { Ingredient } = require('../models')

// Pizza 1: Pepperoni
// Pizza 2: Vegetarian
// Pizza 3: Pineapple

const ingredientData = [
    {
        "name": "Anchovies",
        "PerPizza": 10,
        "stock": 100
    },
    {
        "name": "Bacon",
        "PerPizza": 10,
        "stock": 100,
    },
    {
        "name": "Chicken",
        "PerPizza": 10,
        "stock": 100,
    },
    {
        "name": "Ground Beef",
        "PerPizza": 15,
        "stock": 100,
    },
    {
        "name": "Ham",
        "PerPizza": 10,
        "stock": 100,
    },
    {
        "name": "Pepperoni",
        "perPizza": 15,
        "stock": 100,
    },
    {
        "name": "Sausage",
        "PerPizza": 15,
        "stock": 100,
    },
    {

        "name": "Green Peppers",
        "PerPizza": 15,
        "stock": 100,
    },
    {
        "name": "Hot Peppers",
        "PerPizza": 15,
        "stock": 100,
    },
    {
        "name": "Jalapeno Peppers",
        "PerPizza": 15,
        "stock": 100,
    },
    {
        "name": "Kalamata Olives",
        "PerPizza": 15,
        "stock": 100,
    },
    {
        "name": "Mushrooms",
        "perPizza": 15,
        "stock": 100,
    },
    {
        "name": "Pineapple",
        "perPizza": 15,
        "stock": 100,
    },
    {
        "name": "Plant based Pepperoni",
        "PerPizza": 15,
        "stock": 100,
    },
    {
        "name": "Red Onions",

        "PerPizza": 15,
        "stock": 100,
    },
    {
        "name": "Roasted Garlic",
        "PerPizza": 15,
        "stock": 100,
    },
    {
        "name": "Spinach",
        "PerPizza": 15,
        "stock": 100,
    },
    {
        "name": "Sun-Dried Tomatoes",
        "PerPizza": 15,
        "stock": 100,
    },
    {
        "name": "Plant based Pepperoni",
        "PerPizza": 15,
        "stock": 100,
    }

]

const seedIngredients = () => Ingredient.bulkCreate(ingredientData);

module.exports = seedIngredients;
