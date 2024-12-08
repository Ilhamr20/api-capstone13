import Recipe from "../models/recipeModel.js";
import Category from "../models/categoryModel.js";
import Ingredient from "../models/ingredientModel.js";

export const getRecipeDetails = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    // Validasi ID
    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid recipe ID" });
    }

    // Ambil data Recipe beserta relasi Category dan Ingredient
    const recipe = await Recipe.findOne({
      where: { recipe_id: id }, // Filter berdasarkan recipe_id
      include: [
        {
          model: Category,
          as: "category", // Alias sesuai dengan nama tabel
          attributes: ["category_name"], // Pilih kolom yang diperlukan
          through: { attributes: [] }, // Abaikan kolom dari tabel penghubung
        },
        {
          model: Ingredient,
          as: "ingredient", // Alias sesuai dengan nama tabel
          attributes: ["ingredient_name"], // Pilih kolom yang diperlukan
          through: { attributes: [] }, // Abaikan kolom dari tabel penghubung
        },
      ],
    });

    // Jika resep tidak ditemukan
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    // Format respons JSON yang lebih jelas
    const response = {
      recipe_id: recipe.recipe_id,
      name_recipe: recipe.name_recipe,
      cooking_method: recipe.cooking_method,
      image: recipe.image,
      prep_time: recipe.prep_time,
      serves: recipe.serves,
      categories: recipe.category, // Data kategori
      ingredients: recipe.ingredient, // Data bahan
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
