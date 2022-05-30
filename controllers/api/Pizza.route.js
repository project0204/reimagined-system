const router = require('express').Router();
const pizzaController = require('../Pizza.controller')

const { Pizza, Ingredient } = require('../../models');

router.get('/:id', pizzaController.getPizzaById)

router.get('/', pizzaController.getAllPizzas)

router.post('/', pizzaController.createPizza)

router.put('/:id', pizzaController.updatePizzaById)

router.delete('/:id', pizzaController.deletePizzaById);

module.exports = router;