import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Category from "./categoryModel.js"; // Import model Category
import Ingredient from "./ingredientModel.js"; // Import model Ingredient

const Recipe = sequelize.define(
  "Recipe",
  {
    recipe_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name_recipe: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    cooking_method: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    prep_time: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    serves: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "recipe", // Sesuaikan dengan nama tabel di MySQL
    timestamps: false,
  }
);

// Relasi one-to-many: Recipe -> Category (Many recipes can belong to one category)
Recipe.belongsToMany(Category, {
  through: "recipe_has_category", // Tabel penghubung
  foreignKey: "recipe_id_recipe",
  otherKey: "category_id_category",
  as: "category",
  timestamps: false, // Aktifkan timestamps
});

// Relasi many-to-many: Recipe <-> Ingredient (A recipe can have many ingredients)
Recipe.belongsToMany(Ingredient, {
  through: "recipe_has_ingredient", // Tabel penghubung
  foreignKey: "recipe_id_recipe",
  otherKey: "ingredient_id_ingredient",
  as: "ingredient",
  timestamps: false, // Aktifkan timestamps
});

export default Recipe;

// import { DataTypes } from "sequelize";
// import sequelize from "../config/database.js"; // Pastikan sudah mengonfigurasi Sequelize

// const Recipe = sequelize.define(
//   "Recipe",
//   {
//     recipe_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name_recipe: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     cooking_method: {
//       type: DataTypes.STRING,
//     },
//     image: {
//       type: DataTypes.STRING,
//     },
//     prep_time: {
//       type: DataTypes.STRING,
//     },
//     serves: {
//       type: DataTypes.INTEGER,
//     },
//   },
//   {
//     tableName: "recipe",
//     timestamps: false,
//   }
// );

// export default Recipe;
