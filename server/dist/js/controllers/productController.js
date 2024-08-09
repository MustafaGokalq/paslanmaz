"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../services/productService"));
class ProductController {
    //get all product
    getAllProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield productService_1.default.getAllProducts();
                if (!products || products.length === 0) {
                    return res.status(404).json({
                        success: false,
                        message: "No products found",
                    });
                }
                return res.status(200).json({
                    success: true,
                    products,
                });
            }
            catch (error) {
                console.error("Error fetching products:", error); // Hata loglama
                return res.status(500).json({
                    success: false,
                    message: "Server Error",
                });
            }
        });
    }
    getProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id) {
                    return res.status(400).json({
                        success: false,
                        message: "Product Id is required",
                    });
                }
                const product = yield productService_1.default.getProductById(id);
                if (!product) {
                    return res.status(404).json({
                        success: false,
                        message: "Product Not Found",
                    });
                }
                return res.status(200).json({
                    success: true,
                    product,
                });
            }
            catch (error) {
                console.error("Error fetching video:", error);
                return res.status(500).json({
                    success: false,
                    message: "Internal Server Error",
                });
            }
        });
    }
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield productService_1.default.createProduct(req.body);
                if (!product) {
                    return res.status(400).json({
                        success: false,
                        message: "Error creating product",
                    });
                }
                return res.status(201).json({
                    success: true,
                    product,
                });
            }
            catch (error) {
                console.error("Error creating product:", error); // Hata loglama
                return res.status(500).json({
                    success: false,
                    message: "Server Error",
                });
            }
        });
    }
    updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id) {
                    return res.status(400).json({
                        success: false,
                        message: "Product ID is Required",
                    });
                }
                const updatedProduct = yield productService_1.default.updateProduct(id, req.body);
                if (!updatedProduct) {
                    return res.status(404).json({
                        success: false,
                        message: "Product Not Found",
                    });
                }
                return res.status(200).json({
                    success: true,
                    updatedProduct,
                });
            }
            catch (error) {
                console.error("Error updating video:", error);
                return res.status(500).json({
                    success: false,
                    message: "Internal Server Error",
                });
            }
        });
    }
    deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id) {
                    return res.status(400).json({
                        success: false,
                        message: "Producct ID is required",
                    });
                }
                const deletedProduct = yield productService_1.default.deleteProduct(id);
                if (!deletedProduct) {
                    return res.status(404).json({
                        success: false,
                        message: "Product not found",
                    });
                }
                return res.status(200).json({
                    success: true,
                    message: "Product deleted successfully",
                });
            }
            catch (error) {
                console.error("Error deleting product:", error);
                return res.status(500).json({
                    success: false,
                    message: "Internal Server Error",
                });
            }
        });
    }
    getIsFlashProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const flashProducts = yield productService_1.default.getIsFlashProducts();
                if (!flashProducts || flashProducts.length === 0) {
                    return res.status(404).json({
                        success: false,
                        message: "Flash products not found",
                    });
                }
                return res.status(200).json({
                    success: true,
                    products: flashProducts,
                });
            }
            catch (error) {
                console.error("Error fetching flash products:", error); // Hata loglama
                return res.status(500).json({
                    success: false,
                    message: "Server Error",
                });
            }
        });
    }
    getMostClickedProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const mostClickedProduct = yield productService_1.default.getMostClickedProduct();
                if (!mostClickedProduct) {
                    return res.status(404).json({
                        success: false,
                        message: "Most clicked product not found",
                    });
                }
                return res.status(200).json({
                    success: true,
                    product: mostClickedProduct,
                });
            }
            catch (error) {
                console.error("Error fetching most clicked product:", error); // Hata loglama
                return res.status(500).json({
                    success: false,
                    message: "Server Error",
                });
            }
        });
    }
    purchase(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { productId } = req.body;
                yield productService_1.default.purchaseProduct(productId);
                res.status(200).json({ message: "Purchase request sent to admin" });
            }
            catch (error) {
                res.status(400).json({ message: "Purchase Error" });
            }
        });
    }
}
exports.default = new ProductController();
