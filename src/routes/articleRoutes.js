// /routes/article.routes.js
import express from "express";
import {
  getArticles,
  getArticleById,
} from "../controllers/articleController.js";

const articleRouter = express.Router();

// Route untuk mengambil semua artikel
articleRouter.get("/articles", getArticles);

// Route untuk mengambil artikel berdasarkan ID
articleRouter.get("/articles/:id", getArticleById);

export default articleRouter;
