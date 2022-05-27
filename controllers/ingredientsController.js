const db = require('../models');

// MODEL

const Ingredient = db.Ingredient;

// FUNCTIONS

const addIngredient = async (req, res) => {
    let ingredientData = {
        name: req.body.name,
    }

    const ingredient = await Ingredient.create(ingredientData);
    res.status(200).send(ingredient);
};

const getAllIngredients = async (req, res) => {
    let ingredients = await Ingredient.findAll({
        where: {
            id: req.params.id
        }
    })
}