const router = require("express").Router();
const sequelize = require("../config/connection.js");
const { Menu, Pizza, Ingredient, PizzaIngredients } = require("../models");

// The `/api/pizza` endpoint

// get all pizzas for homepage
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
		.then((dbPizzaData) => {
			const pizzas = dbPizzaData.map((pizza) =>
				pizza.get({
					plain: true,
				})
			);

			res.render("menu", {
				pizzas,
				loggedIn: req.session.loggedIn,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.get("/menu", (req, res) => {
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
		.then((dbPizzaData) => {
			const pizzas = dbPizzaData.map((pizza) =>
				pizza.get({
					plain: true,
				})
			);

			res.render("menu", {
				pizzas,
				loggedIn: req.session.loggedIn,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// get single pizza
router.get("/pizzas/:id", (req, res) => {
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

			const pizza = dbPizzaData.get({ plain: true });

			res.render("single-pizza", {
				pizza,
				loggedIn: req.session.loggedIn,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// get login page
router.get("/login", (req, res) => {
	if (req.session.loggedIn) {
		res.redirect("/");
		return;
	}

	res.render("login");
});

// get signup page
router.get("/signup", (req, res) => {
	if (req.session.loggedIn) {
		res.redirect("/");
		return;
	}

	res.render("signup");
});

// get stock page
router.get("/stock", (req, res) => {
	Ingredient.findAll({
		attributes: ["id", "name", "image_url", "perPizza", "stock"],
	})
		.then((dbIngredientData) => {
			const ingredients = dbIngredientData.map((ingredient) =>
				ingredient.get({
					plain: true,
				})
			);
			res.render("stocktally", {
				ingredients,
				loggedIn: req.session.loggedIn,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
