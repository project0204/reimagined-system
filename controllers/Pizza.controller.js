const { Pizza } = require('../models')

const createPizza = async (req, res) => {
    Pizza.create({
        title: req.body.title,
        price: req.body.price,
        image_url: req.body.image_url,
        stock: req.body.stock,
        // maybe change this to req.params.ingredient_id in the future?        
        ingredient_id: req.body.ingredient_id
    })
        .then(dbPostData => {
            console.log(`THIS IS THE REQUEST ------`, req)
            res.json(dbPostData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};

const getPizzaById = async (req, res) => {
    Pizza.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'price',
            'image_url',
            'stock',
        ],

    })
        .then(dbPizzaData => {
            if (!dbPizzaData) {
                res.status(404).json({ message: 'No pizza found with this id' });
                return;
            }
            res.json(dbPizzaData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};

const getAllPizzas = async (req, res) => {
    Pizza.findAll({
        attributes: [
            'id',
            'title',
            'price',
            'image_url',
            'stock',
        ],

    })
        .then(dbPizzaData => res.json(dbPizzaData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};

const updatePizzaById = async (req, res) => {
    Pizza.update(
        {
            ingredient_id: req.body.ingredient_id
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(dbPizzaData => {
            res.json(dbPizzaData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })

};

const deletePizzaById = async (req, res) => {
    Pizza.delete({
        where: {
            id: req.params.id
        }
    })
        .then(dbPizzaData => {
            if (!dbPizzaData) {
                res.status(500).json({ message: 'No pizza found with this id' })
                return;
            }
            res.json(dbPizzaData);
        })
        .catch(dbPizzaData => {
            console.log(err);
            res.status(400).json(err);
        })
};

module.exports = {
    createPizza,
    getPizzaById,
    getAllPizzas,
    updatePizzaById,
    deletePizzaById
}