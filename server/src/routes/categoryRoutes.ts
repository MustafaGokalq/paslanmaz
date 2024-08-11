import Express, {Router} from "express";
import categoryController from "../controllers/categoryController";
import authorize from "../middlewares/authorize";


const router:Router = Express.Router();

router.get("/:id",categoryController.getSingleCategory)

router.get("/",categoryController.getAllCategories);

router.post("/",authorize(['superAdmin']),categoryController.createCategory);

router.put("/:id",authorize(['superAdmin']), categoryController.updateCategory);

router.delete("/:id",authorize(['superAdmin']), categoryController.deleteCategory);

export default router;