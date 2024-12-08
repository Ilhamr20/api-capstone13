// import { DataTypes } from "sequelize";
// import sequelize from "../config/database.js";

// const Category = sequelize.define(
//   "Category",
//   {
//     category_id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     category_name: {
//       type: DataTypes.STRING(30),
//       allowNull: false,
//     },
//   },
//   {
//     tableName: "category",
//     timestamps: false,
//   }
// );

// export default Category;

import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Category = sequelize.define(
  "Category",
  {
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "category",
    timestamps: false,
  }
);

export default Category;
