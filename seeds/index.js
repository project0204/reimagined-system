const sequelize = require('../config/connection');
const seedIngredients = require('./ingredient-seeds');
const seedPizzas = require('./pizza-seeds');
const seedPizzaIngredients = require('./Pizza_ingredients-seeds');

const seed = async () => {
    await sequelize.sync({ force: true });

    console.log('--------------');

    await seedPizzas();

    console.log('--------------');
    console.log('<><><><><><><><>');
    console.log('--------------');

    await seedIngredients();

    console.log('--------------');

    await seedPizzaIngredients();
};

seed();