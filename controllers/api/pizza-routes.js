const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Menu, Pizza, Ingredient, PizzaIngredients } = require("../../models");
const auth = require("../../utils/auth");

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

// create a pizza
router.post("/", auth, (req, res) => {
	Pizza.create(req.body, { Pizza })
		.then((pizza) => {
			if (req.body.ingredients.length) {
				const ingredientTagIdArr = req.body.ingredients.map((ingredient_id) => {
					return {
						pizza_id: pizza.id,
						ingredient_id,
					};
				});
				return PizzaIngredients.bulkCreate(ingredientTagIdArr);
			}
			res.status(200).json(pizza);
		})
		.then((dbPizzaData) => res.json(dbPizzaData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// update a pizza
router.put("/:id", auth, (req, res) => {
	Pizza.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
		.then((pizza) => {
			return PizzaIngredients.findAll({
				where: {
					pizza_id: req.params.id,
				},
			});
		})
		.then((pizzaIngredients) => {
			const pizzaIngredientsIds = pizzaIngredients.map(
				({ ingredient_id }) => ingredient_id
			);

			const newPizzaIngredients = req.body.ingredients
				.filter((ingredient_id) => !pizzaIngredientsIds.includes(ingredient_id))
				.map((ingredient_id) => {
					return {
						pizza_id: req.params.id,
						ingredient_id,
					};
				});

			const pizzaIngredientsToRemove = pizzaIngredients
				.filter(
					({ ingredient_id }) => !req.body.ingredients.includes(ingredient_id)
				)
				.map(({ id }) => id);

			return Promise.all([
				PizzaIngredients.destroy({ where: { id: pizzaIngredientsToRemove } }),
				PizzaIngredients.bulkCreate(newPizzaIngredients),
			]);
		})
		.then((updatedPizzaIngredients) => res.json(updatedPizzaIngredients))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// delete a pizza
router.delete("/:id", auth, (req, res) => {
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
