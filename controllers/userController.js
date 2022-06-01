const { User } = require('../models');

const getUserById = async (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: { id: req.params.id }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.json({ message: 'No user found with this id' })
                return;
            }
            console.log(`================ USER ${req.params.id} ================`)
            res.json(dbUserData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
};
const getAllUsers = async (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbUserData => {
            console.log('================ ALL USERS ================')
            res.json(dbUserData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).res(err);
        })
};
const createUser = async (req, res) => {
    User.create({
        email: req.body.email,
        password: req.body.password
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
};
const updateUserEmail = async (req, res) => {
    User.update(
        {
            email: req.body.email,
        },
        {
            individualHooks: true,
            where: {
                id: req.params.id
            }
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' })
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
};
const deleteUser = async (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
};

module.exports = {
    getUserById,
    getAllUsers,
    createUser,
    updateUserEmail,
    deleteUser
};