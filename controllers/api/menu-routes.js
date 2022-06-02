const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Menu, Pizza, Ingredient, PizzaIngredients } = require("../../models");
const auth = require("../../utils/auth");

// The `/api/menu` endpoint

// get all menu items for homepage
router.get("/", (req, res) => {
	Menu.findAll({
		attributes: ["id", "menu_name"],
		include: [
			{
				model: Pizza,
				attributes: ["id", "title", "price", "image_url", "stock"]
			},
		],
	})
		.then((dbMenuData) => res.json(dbMenuData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// get single menu item
router.get("/:id", (req, res) => {
	Menu.findOne({
		where: {
			id: req.params.id,
		},
		attributes: ["id", "menu_name"],
	})
		.then((dbMenuData) => {
			if (!dbMenuData) {
				res.status(404).json({ message: "No menu found with this id" });
				return;
			}
			res.json(dbMenuData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// create a menu item
router.post("/", (req, res) => {
	Menu.create({
		menu_name: req.body.menu_name,
	})
		.then((dbMenuData) => res.json(dbMenuData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// edit a menu item
router.put("/:id", (req, res) => {
	Menu.update(
		{
			menu_name: req.body.menu_name,
		},
		{
			where: {
				id: req.params.id,
			},
		}
	)
		.then((dbMenuData) => {
			if (!dbMenuData) {
				res.status(404).json({ message: "No menu found with this id" });
				return;
			}
			res.json(dbMenuData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// delete a menu item
router.delete("/:id", (req, res) => {
	Menu.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((dbMenuData) => {
			if (!dbMenuData) {
				res.status(404).json({ message: "No menu found with this id" });
				return;
			}
			res.json(dbMenuData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
