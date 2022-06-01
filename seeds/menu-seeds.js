const sequelize = require("../config/connection");
const { Menu } = require("../models");

const menudata = [
	{
		menu_name: "pizzas",
	},
];

const seedMenu = () => Menu.bulkCreate(menudata, { individualHooks: true });

module.exports = seedMenu;
