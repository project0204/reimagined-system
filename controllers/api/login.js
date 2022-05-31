const router = require('express').Router;
const { signupView, loginView } = require('../../controllers/loginController');

router.get('/register', signupView);
router.get('/login', loginView);

module.exports = router;