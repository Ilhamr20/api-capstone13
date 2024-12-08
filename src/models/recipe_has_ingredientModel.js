// models/RecipeIngredient.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const RecipeIngredient = sequelize.define("RecipeIngredient", {
  recipe_id_recipe: {
    type: DataTypes.INTEGER,
    references: {
      model: "Recipes",
      key: "id",
    },
  },
  ingredient_id_ingredient: {
    type: DataTypes.INTEGER,
    references: {
      model: "Ingredients",
      key: "id",
    },
  },
  unit: {
    type: DataTypes.STRING(20), // Sesuaikan dengan panjang unit yang diinginkan
    allowNull: true, // Bisa kosong
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: true, // Bisa kosong jika tidak ada stok yang diberikan
  },
});

export default RecipeIngredient;
