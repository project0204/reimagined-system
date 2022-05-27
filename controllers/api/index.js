const router = require('express').Router();

const pizzaRoutes = require('./pizza-routes');

router.use('/pizza', pizzaRoutes);

module.exports = router;