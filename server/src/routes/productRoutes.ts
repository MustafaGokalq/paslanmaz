import express, {Router} from "express";
import productController from "../controllers/productController";


const router:Router = express.Router();


router.get("/",productController.getAllProducts);

router.get("/:id",productController.getProductById)

router.post("/",productController.createProduct);

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

router.get("/flash-products",productController.getIsFlashProducts);

router.get("/click-most-product", productController.getMostClickedProduct);

router.post("/purchase", productController.purchase);

export default router;