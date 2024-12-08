// /controllers/article.controller.js
import Article from "../models/articleModel.js";

// Fungsi untuk mengambil semua artikel
export const getArticles = async (req, res) => {
  try {
    const articles = await Article.findAll();
    res.status(200).json(articles); // Mengembalikan data artikel dalam format JSON
  } catch (error) {
    console.error("Error fetching articles:", error);
    res.status(500).json({ message: "Failed to fetch articles" }); // Jika error, kirimkan pesan error
  }
};

// Fungsi untuk mengambil artikel berdasarkan ID
export const getArticleById = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await Article.findByPk(id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    res.status(200).json(article); // Mengembalikan artikel berdasarkan ID
  } catch (error) {
    console.error("Error fetching article:", error);
    res.status(500).json({ message: "Failed to fetch article" });
  }
};
