// import { DataTypes } from "sequelize";
// import sequelize from "../config/database.js";
// import Inventory from "./inventoryModel.js";

// // const Ingredient = sequelize.define("Ingredient", {
// //   ingredient_id: {
// //     type: DataTypes.INTEGER,
// //     primaryKey: true,
// //     autoIncrement: true,
// //   },
// //   ingredient_name: {
// //     type: DataTypes.STRING,
// //     allowNull: true,
// //   },
// // });

// // // Relasi dengan Inventory
// // Ingredient.hasMany(Inventory, {
// //   foreignKey: "ingredient_id_ingredient",
// // });

// // export default Ingredient;

// // import { DataTypes } from "sequelize";
// // import sequelize from "../config/database.js";

// const Ingredient = sequelize.define(
//   "Ingredient",
//   {
//     ingredient_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     ingredient_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     tableName: "ingeredient",
//     timestamps: false,
//   }
// );

// // Relasi dengan Inventory

// Ingredient.belongsTo(Inventory, {
//   foreignKey: "ingredient_id_ingredient",
//   as,
// });

// export default Ingredient;

import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Inventory from "./inventoryModel.js"; // Pindahkan impor ke atas

const Ingredient = sequelize.define(
  "Ingredient",
  {
    ingredient_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ingredient_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "ingredient", // Perbaiki penulisan nama tabel
    timestamps: false,
  }
);

// Relasi dengan Inventory
// Ingredient.belongsTo(Inventory, {
//   foreignKey: "ingredient_id_ingredient",
//   as: "ingredient", // Berikan alias
// });

export default Ingredient;
