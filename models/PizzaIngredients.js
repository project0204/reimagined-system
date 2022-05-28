const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our PizzaIngredients model
class PizzaIngredients extends Model {}

PizzaIngredients.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  pizza_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "pizza",
      key: "id",
    },
  },
  ingredient_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "ingredient",
      key: "id",
    },
  },
});

model.exports = PizzaIngredients;
