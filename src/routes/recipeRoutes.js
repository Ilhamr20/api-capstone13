import express from "express";
import { getRecipeDetails } from "../controllers/recipeController.js";

const recipeRouter = express.Router();

recipeRouter.get("/recipes/:id", getRecipeDetails);

export default recipeRouter;
