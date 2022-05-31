const router = require('express').Router();

router.get('/', (req, res) => res.render('homepage'));
router.get('/menu', (req, res) => res.render('menu'));
router.get('/about', (req, res) => res.render('aboutus'));
router.get('/order', (req, res) => res.render('order'));
router.get('/login', (req, res) => res.render('login'));

module.exports = router;