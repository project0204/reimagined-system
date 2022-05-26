const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Ingredient model
class Ingredient extends Model {}

// create fields/columns for Ingredients model
Ingredient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ingredient_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    pizza_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "pizza",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "ingredient",
  }
);

module.exports = Ingredient;