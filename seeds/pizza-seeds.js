const { Pizza } = require("../models");

// Pizza 1: Pepperoni
// Pizza 2: Vegetarian
// Pizza 3: Pineapple

const pizzaData = [
  {
    title: "Pepperoni",
    price: 19.99,
    image_url:
      "https://www.jennycancook.com/wp-content/uploads/2013/02/PeppPizza_600.jpg",
    stock: 30,
    menu_id: 1,
  },
  {
    title: "Vegetarian",
    price: 17.99,
    image_url:
      "https://cookieandkate.com/images/2020/10/best-veggie-pizza-recipe-1-768x1152.jpg",
    stock: 30,
    menu_id: 1,
  },
  {
    title: "Pineapple",
    price: 19.99,
    image_url:
      "https://www.jessicagavin.com/wp-content/uploads/2020/07/hawaiian-pizza-16-1024x1536.jpg",
    stock: 20,
    menu_id: 1,
  },
];

const seedPizzas = () => Pizza.bulkCreate(pizzaData);

module.exports = seedPizzas;
