import express from "express";
import authRouter from "./auth.js";
import inventoryRouter from "./inventoryRoutes.js";
import ingredientRouter from "./ingredient.js";
import articleRouter from "./articleRoutes.js";
import recipeRouter from "./recipeRoutes.js";

const router = express();

router.use("/api", authRouter);
router.use("/api", inventoryRouter);
router.use("/api", ingredientRouter);
router.use("/api", articleRouter);
router.use("/api", recipeRouter);

export default router;
