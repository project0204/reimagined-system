const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Pizza, Ingredient, PizzaIngredients } = require("../../models");

// The `/api/ingredients` endpoint

// get all ingredients
router.get("/", (req, res) => {
	Ingredient.findAll({
		attributes: ["id", "name", "perPizza", "stock"],
		include: [
			{
				model: Pizza,
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

// create an ingredient
router.post("/", (req, res) => {
	Ingredient.create(req.body, { Ingredient })
		.then((dbIngredientData) => res.json(dbIngredientData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// update an ingredient
router.put("/:id", (req, res) => {
	Ingredient.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
		.then((dbIngredientData) => res.json(dbIngredientData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

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
