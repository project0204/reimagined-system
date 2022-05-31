const router = require('express').Router();

const pizzaRoute = require('./pizza');

router.use('/pizza', pizzaRoute);

module.exports = router;