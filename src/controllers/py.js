// // controllers/recipeController.js
// import axios from "axios";
// import { Op } from "sequelize";
// import Recipe from "../models/recipeModel.js";
// import Ingredient from "../models/ingredientModel.js";
// import RecipeIngredient from "../models/recipe_has_ingredientModel.js";
// import Inventory from "../models/inventoryModel.js";

// // Fungsi untuk memprediksi resep berdasarkan bahan yang dimasukkan
// export const predictRecipes = async (req, res) => {
//   const { ingredients } = req.body; // Bahan yang dipilih user
//   if (!ingredients || ingredients.length === 0) {
//     return res.status(400).json({ error: "Ingredients are required" });
//   }

//   try {
//     // Kirim bahan ke API Machine Learning Python untuk prediksi kategori
//     const mlResponse = await axios.post("http://localhost:5000/predict", {
//       ingredients,
//     });

//     const { categories } = mlResponse.data;

//     // Ambil resep yang semua bahan dasarnya ada dalam inventory user
//     const recipes = await Recipe.findAll({
//       include: [
//         {
//           model: RecipeIngredient,
//           as: "ingredients",
//           include: [
//             {
//               model: Ingredient,
//               as: "ingredientDetails",
//               where: {
//                 ingredient_name: { [Op.in]: ingredients },
//               },
//             },
//           ],
//         },
//       ],
//       where: {
//         "$ingredients.ingredientDetails.ingredient_name$": {
//           [Op.in]: ingredients,
//         },
//       },
//     });

//     if (recipes.length === 0) {
//       return res.status(404).json({
//         message:
//           "Maaf, tidak ada menu yang bisa dibuat dari bahan yang Anda punya.",
//       });
//     }

//     res.json({
//       categories,
//       recipes,
//     });
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     res.status(500).json({ error: "Something went wrong!" });
//   }
// };

// // Fungsi untuk mengurangi stok bahan sesuai resep yang dipilih
// export const updateStock = async (req, res) => {
//   const { recipeId } = req.body;

//   if (!recipeId) {
//     return res.status(400).json({ error: "Recipe ID is required" });
//   }

//   try {
//     // Ambil bahan resep
//     const recipeIngredients = await RecipeIngredient.findAll({
//       where: { recipe_id_recipe: recipeId },
//       include: [
//         {
//           model: Ingredient,
//           as: "ingredientDetails",
//         },
//       ],
//     });

//     for (const recipeIngredient of recipeIngredients) {
//       const ingredientId = recipeIngredient.ingredient_id_ingredient;
//       const requiredStock = recipeIngredient.stock;

//       // Ambil stok bahan berdasarkan expired (prioritas paling awal)
//       const inventoryItems = await Inventory.findAll({
//         where: { ingredient_id_ingredient: ingredientId },
//         order: [["expiry_date", "ASC"]], // Urutkan berdasarkan expired
//       });

//       let remainingStock = requiredStock;

//       for (const item of inventoryItems) {
//         if (remainingStock <= 0) break;

//         if (item.stock >= remainingStock) {
//           // Kurangi stok sesuai kebutuhan
//           item.stock -= remainingStock;
//           remainingStock = 0;
//         } else {
//           // Kurangi stok dari item saat ini
//           remainingStock -= item.stock;
//           item.stock = 0;
//         }

//         await item.save();
//       }

//       if (remainingStock > 0) {
//         return res.status(400).json({
//           error: `Not enough stock for ingredient ID ${ingredientId}`,
//         });
//       }
//     }

//     res.json({ message: "Stock successfully updated!" });
//   } catch (error) {
//     console.error("Error updating stock:", error);
//     res.status(500).json({ error: "Something went wrong!" });
//   }
// };
