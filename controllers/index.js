const router = require('express').Router();

const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');

// HOME - View pizzas, deals and business information
router.use('/', homeRoutes);

// PIZZA - Create, update, delete, add pizzas
router.use('/api', apiRoutes);

module.exports = router;