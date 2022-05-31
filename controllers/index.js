const router = require('express').Router();

const homeRoutes = require('./api/home');
const apiRoutes = require('./api');
const { loginView, signupView } = require('../controllers/loginController')

router.use('/', homeRoutes);
router.use('/', loginView);

router.use('/api', apiRoutes);

module.exports = router;