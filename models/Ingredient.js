const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Ingredient model
class Ingredient extends Model { }

// create fields/columns for Ingredients model
Ingredient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    perPizza: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 10,
      validate: {
        isNumeric: true,
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
