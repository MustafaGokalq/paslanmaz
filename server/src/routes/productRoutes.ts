import express, { Router } from "express";
import productController from "../controllers/productController";
import auth from "../middlewares/auth";
import authorize from "../middlewares/authorize";

const router: Router = express.Router();

// Public routes
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.get("/category/:categoryId/products", productController.getProductsByCategory);
router.get("/category/:categoryId/products-with-video", productController.getProductsWithVideo);
router.get("/category/:categoryId/products-without-video", productController.getProductsWithoutVideo);

// Protected routes (require authentication and authorization)
router.post("/", auth, productController.createProduct);
router.put("/:id", auth, authorize(["superAdmin", "admin"]), productController.updateProduct);
router.delete("/:id", auth, authorize(["superAdmin", "admin"]), productController.deleteProduct);
router.post("/purchase", auth, productController.purchase);  // Purchase işlemi sadece authenticated user gerektirir

export default router;
