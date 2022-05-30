const { Ingredient } = require('../models')

// Pizza 1: Pepperoni
// Pizza 2: Vegetarian
// Pizza 3: Pineapple

const ingredientData = [
    {
        "ingredient_name": "Anchovies",
        "image_url": "https://storage.pizzapizza.ca/phx2/ppl_images/toppings/en/2x/AN.png?cache_key=26",
        "stock": 159,
        "pizza_id": 3
    },
    {
        "ingredient_name": "Bacon",
        "image_url": "https://www.mensjournal.com/wp-content/uploads/2019/05/bacon.jpg?w=800&h=450&crop=1&quality=70&strip=all",
        "stock": 159,
        "pizza_id": 3
    },
    {
        "ingredient_name": "Chicken",
        "image_url": "https://storage.pizzapizza.ca/phx2/ppl_images/toppings/en/2x/CH.png?cache_key=26",
        "stock": 159,
        "pizza_id": 3
    },
    {
        "ingredient_name": "Ground Beef",
        "image_url": "https://steamykitchen.com/wp-content/uploads/2021/07/ground-beef-1.png",
        "stock": 159,
        "pizza_id": 3
    },
    {
        "ingredient_name": "Ham",
        "image_url": "https://storage.pizzapizza.ca/phx2/ppl_images/toppings/en/2x/H.png?cache_key=26",
        "stock": 159,
        "pizza_id": 3
    },
    {
        "ingredient_name": "Pepperoni",
        "image_url": "https://media.istockphoto.com/photos/single-slice-of-pepperoni-meatisolated-on-white-with-path-shot-from-picture-id1153708773?k=20&m=1153708773&s=612x612&w=0&h=GQ_BGoGypsBLRzmuFwLZtANuu_A4kkQ5DNwKr6gwchY=",
        "perPizza": 24,
        "pizza_id": 1
    },
    {
        "ingredient_name": "Sausage",
        "image_url": "https://media.istockphoto.com/photos/portion-of-crumbled-italian-sausage-on-white-background-picture-id493531198?k=20&m=493531198&s=170667a&w=0&h=v9btau4j2c6zdp6DWZuwHairW6SPkMApK89Wy_w9z1s=",
        "stock": 555,
        "pizza_id": 1
    },
    {
        "ingredient_name": "Green Peppers",
        "image_url": "https://media.istockphoto.com/photos/cut-slices-of-green-sweet-bell-pepper-isolated-on-white-background-picture-id1177893341?k=20&m=1177893341&s=612x612&w=0&h=KI9fD2n6_h7LWLRVczVPCt9rXT4KQ0LPBeMIj53Qivw=",
        "stock": 478,
        "pizza_id": 2
    },
    {
        "ingredient_name": "Hot Peppers",
        "image_url": "https://storage.pizzapizza.ca/phx2/ppl_images/toppings/en/2x/HP.png?cache_key=26",
        "stock": 159,
        "pizza_id": 3
    },
    {
        "ingredient_name": "Jalapeno Peppers",
        "image_url": "https://media.istockphoto.com/photos/sliced-green-jalapeno-peppers-on-white-background-picture-id512421793",
        "stock": 159,
        "pizza_id": 3
    },
    {
        "ingredient_name": "Mushrooms",
        "image_url": "https://purepng.com/public/uploads/large/purepng.com-mushroommushroomtoadstoolgilled-fungipuffball-1411527070904r34nd.png",
        "perPizza": 8,
        "pizza_id": 2
    },
    {
        "ingredient_name": "Pineapple",
        "image_url": "https://mpng.subpng.com/20180529/hhy/kisspng-pineapple-cocktail-garnish-slice-clip-art-pineapple-juice-5b0da839ecb0a0.2522564715276216899695.jpg",
        "perPizza": 15,
        "pizza_id": 3
    },
    {
        "ingredient_name": "Plant based Pepperoni",
        "image_url": "https://media.istockphoto.com/photos/single-slice-of-pepperoni-meatisolated-on-white-with-path-shot-from-picture-id1153708773?k=20&m=1153708773&s=612x612&w=0&h=GQ_BGoGypsBLRzmuFwLZtANuu_A4kkQ5DNwKr6gwchY=",
        "stock": 555,
        "pizza_id": 1
    },
    {
        "ingredient_name": "Red Onions",
        "image_url": "https://www.loveandoliveoil.com/wp-content/uploads/2021/04/how-to-cut-red-onions-2-600x900.jpg",
        "stock": 555,
        "pizza_id": 1
    },
    {
        "ingredient_name": "Roasted Garlic",
        "image_url": "https://mpng.subpng.com/20180529/hhy/kisspng-pineapple-cocktail-garnish-slice-clip-art-pineapple-juice-5b0da839ecb0a0.2522564715276216899695.jpg",
        "stock": 159,
        "pizza_id": 3
    },
    {
        "ingredient_name": "Spinach",
        "image_url": "https://wholesomebabyfood.momtastic.com/assets/uploads/2015/04/baby-spinach-1280x720.jpg",
        "stock": 478,
        "pizza_id": 2
    },
    {
        "ingredient_name": "Sun-Dried Tomatoes",
        "image_url": "https://www.gardeningknowhow.com/wp-content/uploads/2021/06/pile-of-sundried-tomato-halves.jpg",
        "stock": 159,
        "pizza_id": 3
    },
    {
        "ingredient_name": "Plant based Pepperoni",
        "image_url": "https://media.istockphoto.com/photos/single-slice-of-pepperoni-meatisolated-on-white-with-path-shot-from-picture-id1153708773?k=20&m=1153708773&s=612x612&w=0&h=GQ_BGoGypsBLRzmuFwLZtANuu_A4kkQ5DNwKr6gwchY=",
        "stock": 555,
        "pizza_id": 1
    }
    
]

const seedIngredients = () => Ingredient.bulkCreate(ingredientData);

module.exports = seedIngredients;
