// /models/article.model.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Article = sequelize.define(
  "Article",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(512),
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING(512),
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "article",
    timestamps: false,
  }
);

export default Article;
