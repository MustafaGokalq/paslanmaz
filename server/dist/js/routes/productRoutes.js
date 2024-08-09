"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productController_1 = __importDefault(require("../controllers/productController"));
const router = express_1.default.Router();
router.get("/", productController_1.default.getAllProducts);
router.get("/:id", productController_1.default.getProductById);
router.post("/", productController_1.default.createProduct);
router.put("/:id", productController_1.default.updateProduct);
router.delete("/:id", productController_1.default.deleteProduct);
router.get("/flash-products", productController_1.default.getIsFlashProducts);
router.get("/click-most-product", productController_1.default.getMostClickedProduct);
router.post("/purchase", productController_1.default.purchase);
exports.default = router;
