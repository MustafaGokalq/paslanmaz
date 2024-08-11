"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productController_1 = __importDefault(require("../controllers/productController"));
const auth_1 = __importDefault(require("../middlewares/auth"));
const authorize_1 = __importDefault(require("../middlewares/authorize"));
const router = express_1.default.Router();
// Public routes
router.get("/", productController_1.default.getAllProducts);
router.get("/:id", productController_1.default.getProductById);
router.get("/category/:categoryId/products", productController_1.default.getProductsByCategory);
router.get("/click-most-product", productController_1.default.getMostClickedProduct);
router.get("/category/:categoryId/products-with-video", productController_1.default.getProductsWithVideo);
router.get("/category/:categoryId/products-without-video", productController_1.default.getProductsWithoutVideo);
// Protected routes (require authentication and authorization)
router.post("/", auth_1.default, (0, authorize_1.default)(["superAdmin", "admin"]), productController_1.default.createProduct);
router.put("/:id", auth_1.default, (0, authorize_1.default)(["superAdmin", "admin"]), productController_1.default.updateProduct);
router.delete("/:id", auth_1.default, (0, authorize_1.default)(["superAdmin", "admin"]), productController_1.default.deleteProduct);
router.post("/purchase", auth_1.default, productController_1.default.purchase); // Purchase işlemi sadece authenticated user gerektirir
exports.default = router;
