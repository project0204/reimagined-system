const { Menu } = require("../models");

const menuData = [
  {
    menu_name: "FostonPizza",
  },
];

const seedMenu = () => Menu.bulkCreate(menuData);

module.exports = seedMenu;
