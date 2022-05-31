const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Menu, Pizza, Ingredient, PizzaIngredients } = require("../../models");
const withAuth = require("../../utils/auth");

// The `/api/pizzas` endpoint

// get all pizzas
router.get("/", (req, res) => {
  Pizza.findAll({
    attributes: ["id", "title", "price", "image_url", "stock"],
    include: [
      {
        model: Ingredient,
        through: PizzaIngredients,
        as: "ingredients",
      },
    ],
  })
    .then((dbPizzaData) => res.json(dbPizzaData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single pizza
router.get("/:id", (req, res) => {
  Pizza.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "price", "image_url", "stock"],
    include: [
      {
        model: Ingredient,
        through: PizzaIngredients,
        as: "ingredients",
      },
    ],
  })
    .then((dbPizzaData) => {
      if (!dbPizzaData) {
        res.status(404).json({ message: "No pizza found with this id" });
        return;
      }
      res.json(dbPizzaData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// // create a pizza
// router.post("/", withAuth, (req, res) => {
//   /* req.body should look like this...
//     {
//       title: "Tropical Chicken",
//       price: 19.99,
//       image_url: "https://www.thereciperebel.com/wp-content/uploads/2016/05/Tropical-Chicken-Pizza-www.thereciperebel.com-1-of-1-2-646x1200.jpg",
//       stock: 500,
//       menu_id: 1,
//       ingredientIds: [1, 2, 3, 4]
//     } 
//   */
//   Pizza.create(req.body, { Pizza })
//     .then((pizza) => {
//       if (req.body.ingredientIds.length) {
//         const pizzaIngredientIdArr = req.body.ingredientIds.map(
//           (ingredient_id) => {
//             return {
//               pizza_id: pizza.id,
//               ingredient_id,
//             };
//           }
//         );
//         return PizzaIngredients.bulkCreate(pizzaIngredientIdArr);
//       }
//       res.status(200).json(pizza);
//     })
//     .then((pizzaIngredientIds) => res.status(200).json(pizzaIngredientIds))
//     .catch((err) => {
//       console.log(err);
//       res.status(400).json(err);
//     });
// });

// update a pizza
// router.put("/:id", withAuth, (req, res) => {
//   Pizza.update(req.body, {
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((pizza) => {
//       return PizzaIngredients.findAll({ where: { pizza_id: req.params.id } });
//     })
//     .then((pizzaIngredients) => {
//       const pizzaIngredientIds = pizzaIngredients.map(
//         ({ ingredient_id }) => ingredient_id
//       );

//       const newPizzaIngredients = req.body.pizzaIngredientIds
//         .filter((ingredient_id) => !pizzaIngredientIds.includes(ingredient_id))
//         .map((ingredient_id) => {
//           return {
//             pizza_id: req.params.id,
//             ingredient_id,
//           };
//         });

//       const pizzaIngredientsToRemove = pizzaIngredients
//         .filter(
//           ({ ingredient_id }) => !req.body.ingredientIds.includes(ingredient_id)
//         )
//         .map(({ id }) => id);

//       return Promise.all([
//         PizzaIngredient.destroy({ where: { id: pizzaIngredientsToRemove } }),
//         PizzaIngredient.bulkCreate(newPizzaIngredients),
//       ]);
//     })
//     .then((updatedPizzaIngredients) => res.json(updatedPizzaIngredients))
//     .catch((err) => {
//       console.log(err);
//       res.status(400).json(err);
//     });
// });

// delete a pizza
router.delete("/:id", (req, res) => {
  Pizza.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPizzaData) => {
      if (!dbPizzaData) {
        res.status(404).json({ message: "No pizza found with this id" });
        return;
      }
      res.json(dbPizzaData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
