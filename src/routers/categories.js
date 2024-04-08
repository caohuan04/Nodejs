import { Router } from "express";
import CategoriesController from "../controllers/categories.js";


const categoriesRouter = Router();
const categoriesController = new CategoriesController();

categoriesRouter.get("/", categoriesController.getAllCategories)
categoriesRouter.post("/", categoriesController.createCategories)
categoriesRouter.get("/:id", categoriesController.getCategoriesDetail)
categoriesRouter.put("/:id", categoriesController.updateCategories)
categoriesRouter.delete("/:id", categoriesController.deleteCategories)

export default categoriesRouter