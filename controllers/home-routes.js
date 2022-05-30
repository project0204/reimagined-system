const router = require('express').Router();
const sequelize = require('../config/connection');
// const pizzaRoutes = require('./api/Pizza.route');

router.get('/', (req, res) => {
    res.render('homepage')
    console.log('i should be displaying the homepage')
});

router.get('/', (req, res) => {
    pizzaRoutes.getAllPizzas
});

module.exports = router;