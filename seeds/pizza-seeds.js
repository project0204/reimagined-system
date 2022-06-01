const { Pizza } = require('../models')

// Pizza 1: Pepperoni
// Pizza 2: Vegetarian
// Pizza 3: Hawaiian

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
        "image_url": "https://cookieandkate.com/images/2020/10/best-veggie-pizza-recipe-1-768x1152.jpg",
        "stock": 30,
    },
    {
        "title": "Hawaiian",
        "price": 19.99,
        "image_url": "https://www.jessicagavin.com/wp-content/uploads/2020/07/hawaiian-pizza-16-1024x1536.jpg",
        "stock": 30,
    },
    {
        "title": "Buffalo Chicken",
        "price": 19.99,
        "image_url": "https://easychickenrecipes.com/wp-content/uploads/2019/11/buffalo-chicken-pizza-4.jpg",
        "stock": 30,
    },
    {
        "title": "Meat Lovers",
        "price": 17.99,
        "image_url": "https://www.queensleeappetit.com/wp-content/uploads/2019/02/Meat-Lovers-Pizza-5-1-480x480.jpg",
        "stock": 30,
    },
    {
        "title": "Canadian",
        "price": 19.99,
        "image_url": "https://storage.pizzapizza.ca/phx2/ppl_images/products/en/2x/canadian.png?cache_key=26",
        "stock": 30,
    },
    {
        "title": "Pesto",
        "price": 19.99,
        "image_url": "https://www.jessicagavin.com/wp-content/uploads/2020/07/hawaiian-pizza-16-1024x1536.jpg",
        "stock": 30,
    },
    {
        "title": "Mediterranean Veggie",
        "price": 19.99,
        "image_url": "https://www.foodiecrush.com/wp-content/uploads/2022/01/Mediterranean-Pizza-foodiecrush.com-63.jpg",
        "stock": 30,
    },
    {
        "title": "Mushroom Florentine",
        "price": 17.99,
        "image_url": "https://www.acouplecooks.com/wp-content/uploads/2019/06/Mushroom-Pizza-with-Herbs-011-800x1000.jpg",
        "stock": 30,
    },
]

const seedPizzas = () => Pizza.bulkCreate(pizzaData);

module.exports = seedPizzas;
