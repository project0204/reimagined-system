const router = require('express').Router();
const userController = require('../userController')

const { User } = require('../../models');

router.get('/:id', userController.getUserById)

router.get('/', userController.getAllUsers)

router.post('/', userController.createUser)

router.put('/:id', userController.updateUserEmail)

router.delete('/:id', userController.deleteUser);

module.exports = router;