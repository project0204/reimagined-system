const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Pizza, Ingredient, PizzaIngredients } = require("../../models");

// The `/api/ingredients` endpoint

// get all ingredients
router.get("/", (req, res) => {
  Ingredient.findAll({
    attributes: ["id", "name", "image_url", "perPizza", "stock"],
    include: [
      {
        model: Pizza,
        attributes: ["id", "title", "price", "image_url", "stock"],
        through: PizzaIngredients,
        as: "pizzas",
      },
    ],
  })
    .then((dbIngredientData) => {
      if (!dbIngredientData) {
        res.status(404).json({ message: "No ingredients found" });
        return;
      }
      res.json(dbIngredientData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single ingredient
router.get("/:id", (req, res) => {
  Ingredient.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Pizza,
        attributes: ["id", "title", "price", "image_url", "stock"],
        through: PizzaIngredients,
        as: "pizzas",
      },
    ],
  })
    .then((dbIngredientData) => {
      if (!dbIngredientData) {
        res.status(404).json({ message: "No ingredient found with that id" });
        return;
      }
      res.json(dbIngredientData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// // create a new ingredient
// router.post("/", (req, res) => {
//   /* req.body should look like this...
//     {
//       name: "Mushrooms2",
//       image_url: "https://media.istockphoto.com/photos/fresh-agaricus-bisporus-or-portobello-mushrooms-picture-id1140162145?k=20&m=1140162145&s=612x612&w=0&h=llOEXVVpUXU_e-Hsl6RS4TxJiZt_gcxwOTtnkLX_Cwk=",
//       perPizza: 12,
//       stock: 500,
//     } 
//   */
//   Ingredient.create(req.body, { Ingredient })
//     .then((dbIngredientData) => res.json(dbIngredientData))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// // update an ingredient
// router.put("/:id", (req, res) => {
//   Ingredient.update(req.body, {
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((ingredient) => {
//       return PizzaIngredients.findAll({
//         where: { ingredient_id: req.params.id },
//       });
//     })
//     .then((ingredients) => {
//       const ingredientIds = ingredients.map(({ pizza_id }) => pizza_id);

//       const newIngredient = req.body.ingredientIds
//         .filter((pizza_id) => !ingredientIds.includes(pizza_id))
//         .map((pizza_id) => {
//           return {
//             pizza_id,
//             ingredient_id: req.params.id,
//           };
//         });

//       const pizzasToRemove = PizzaIngredients.filter(
//         ({ pizza_id }) => !req.body.pizzaIds.includes(pizza_id)
//       ).map(({ id }) => id);

//       return Promise.all([
//         PizzaIngredients.destroy({ where: { id: pizzasToRemove } }),
//         PizzaIngredients.bulkCreate(newIngredient),
//       ]);
//     })
//     .then((updatedIngredient) => res.json(updatedIngredient))
//     .catch((err) => {
//       console.log(err);
//       res.status(400).json(err);
//     });
// });

// delete an ingredient
router.delete("/:id", (req, res) => {
  Ingredient.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbIngredientData) => {
      if (!dbIngredientData) {
        res.status(404).json({ message: "No ingredients found with this id" });
        return;
      }
      res.json(dbIngredientData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
