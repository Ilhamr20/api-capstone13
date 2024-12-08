import Ingredient from "../models/ingredientModel.js";

class IngredientController {
  async index(req, res) {
    try {
      const ingredients = await Ingredient.findAll();
      res.status(200).json(ingredients);
    } catch (error) {}
  }

  async show(req, res) {
    try {
      const id = req.params.id;
      const ingredient = await Ingredient.findOne({
        where: {
          id_ingredient: id,
        },
      });

      return res.status(200).json(ingredient);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "fetch error" });
    }
  }
}

export default new IngredientController();
