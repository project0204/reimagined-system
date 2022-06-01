const router = require('express').Router();

const pizzaRoute = require('./pizza');
const userRoute = require('./users');

router.use('/pizza', pizzaRoute);
router.use('/users', userRoute);

module.exports = router;