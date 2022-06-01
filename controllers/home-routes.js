const router = require("express").Router();
const sequelize = require("../config/connection.js");
const { Menu, Pizza, Ingredient } = require("../models");

// The `/api/menu` endpoint

// get all menu items for homepage
router.get("/", (req, res) => {
  Menu.findAll({
    attributes: ["id", "menu_name"],
    include: [
      {
        model: Pizza,
        attributes: ["id", "title", "price", "image_url", "stock"],
        include: {
          model: Ingredient,
          attributes: ["name"],
        },
      },
    ],
  })
    .then((dbMenuData) => {
      const menus = dbMenuData.map((menu) =>
        menu.get({
          plain: true,
        })
      );

      res.render("homepage", {
        menus,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single menu item
router.get("/menu/:id", (req, res) => {
  Menu.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "menu_name"],
    include: [
      {
        model: Pizza,
        attributes: ["id", "title", "price", "image_url", "stock"],
        include: {
          model: Ingredient,
          attributes: ["name"],
        },
      },
    ],
  })
    .then((dbMenuData) => {
      if (!dbMenuData) {
        res.status(404).json({ message: "No menu found with this id" });
        return;
      }

      const menu = dbMenuData.get({ plain: true });

      res.render("stocktally", {
        menu,
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

module.exports = router;