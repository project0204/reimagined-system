const router = require('express').Router();

const homeRoutes = require('./home-routes');
const pizzaRoutes = require('./pizza-routes');

// HOME - View pizzas, deals and business information
router.use('/', homeRoutes);

// PIZZA - Create, update, delete, add pizzas
router.use('/pizza', pizzaRoutes);

module.exports = router;