const router = require("express").Router();
const sequelize = require("../config/connection");
const {
	User,
	Menu,
	Pizza,
	Ingredient,
	PizzaIngredients,
} = require("../models");
const auth = require("../utils/auth");

// get all ingredients for dashboard
router.get("/", auth, (req, res) => {
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
			const ingredients = dbIngredientData.map((ingredient) =>
				ingredient.get({ plain: true })
			);
			res.render("dashboard", { ingredients, loggedIn: true });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.get("/edit/:id", auth, (req, res) => {
	Ingredient.findByPk(req.params.id, {
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
			if (dbIngredientData) {
				const ingredient = dbIngredientData.get({ plain: true });

				res.render("edit-ingredient", {
					ingredient,
					loggedIn: true,
				});
			} else {
				res.status(404).end();
			}
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

module.exports = router;
