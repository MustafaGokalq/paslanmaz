import express, { Router } from "express";
import categoryController from "../controllers/categoryController";
import authorize from "../middlewares/authorize";
import auth from "../middlewares/auth";

const router: Router = express.Router();

router.get("/:id", categoryController.getSingleCategory);
router.get("/", categoryController.getAllCategories);
router.post("/", auth,authorize(['superAdmin']), categoryController.createCategory);
router.put("/:id", authorize(['superAdmin']), categoryController.updateCategory);
router.delete("/:id", authorize(['superAdmin']), categoryController.deleteCategory);

export default router;
