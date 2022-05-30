const router = require('express').Router();

const pizzaRoute = require('./Pizza.route');

router.use('/pizza', pizzaRoute);

module.exports = router;