const router = require("express").Router();

const menuRoutes = require("./menu-routes");
const pizzaRoutes = require("./pizza-routes");
const ingredientRoutes = require("./ingredient-routes");

router.use("/menu", menuRoutes);
router.use("/pizzas", pizzaRoutes);
router.use("/ingredients", ingredientRoutes);

module.exports = router;
