const { Pizza } = require('../models')

// Pizza 1: Pepperoni
// Pizza 2: Vegetarian
// Pizza 3: Pineapple

const pizzaData = [
    {
        "title": "Pepperoni",
        "price": 19.99,
        "image_url": "https://www.jennycancook.com/wp-content/uploads/2013/02/PeppPizza_600.jpg",
        "stock": 30,
    },
    {
        "title": "Vegetarian",
        "price": 17.99,
        "image_url": "https://www.jennycancook.com/wp-content/uploads/2013/02/PeppPizza_600.jpg",
        "stock": 30,
    },
    {
        "title": "Pineapple",
        "price": 19.99,
        "image_url": "https://www.jennycancook.com/wp-content/uploads/2013/02/PeppPizza_600.jpg",
        "stock": 20,
    },
]

const seedPizzas = () => Pizza.bulkCreate(pizzaData);

module.exports = seedPizzas;
