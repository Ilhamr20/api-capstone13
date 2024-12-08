import express from "express";
import IngredientController from "../controllers/ingredientController.js";
// import IngredientController from "../controllers/ingredient";
// ingredient

const ingredientRouter = express.Router();

// Rute untuk mendapatkan semua data inventory
ingredientRouter.get("/ingredient", IngredientController.index);
ingredientRouter.get("/ingredient/:id", IngredientController.show);

export default ingredientRouter;
