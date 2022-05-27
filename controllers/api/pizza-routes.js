const router = require('express').Router();
const { Pizza, Ingredient } = require('../../models');

router.get('/:id', (req, res) => {
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
            'ingredient_id',
        ],
        include: [
            {
                model: Ingredient,
                attributes: ['pizza_id']
            }
        ]
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
})

router.get('/', (req, res) => {
    Pizza.findAll({
        attributes: [
            'id',
            'title',
            'price',
            'image_url',
            'stock',
            'ingredient_id',
        ],
        include: [
            {
                model: Ingredient,
                attributes: ['pizza_id']
            }
        ]
    })
        .then(dbPizzaData => res.json(dbPizzaData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        price: req.body.price,
        image_url: req.body.image_url,
        stock: req.body.stock,
        // maybe change this to req.params.ingredient_id in the future?        
        ingredient_id: req.body.ingredient_id
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.put('/:id', (req, res) => {
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
})

router.delete('/:id', (req, res) => {
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
});

module.exports = router;