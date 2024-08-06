import Express, {Router} from "express";
import categoryController from "../controllers/categoryController";


const router:Router = Express.Router();

router.get("/:id",categoryController.getSingleCategory)

router.get("/",categoryController.getAllCategories);

router.post("/",categoryController.createCategory);

router.put("/:id", categoryController.updateCategory);

router.delete("/:id", categoryController.deleteCategory);

export default router;