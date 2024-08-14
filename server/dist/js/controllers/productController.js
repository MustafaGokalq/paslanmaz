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
    getProductsWithVideo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { categoryId } = req.params;
                const products = yield productService_1.default.getProductsWithVideo(categoryId);
                res.json(products);
            }
            catch (error) {
                res.status(500).json({ error: "Videolu ürünler getirilemedi" });
            }
        });
    }
    getProductsWithoutVideo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { categoryId } = req.params;
                const products = yield productService_1.default.getProductsWithoutVideo(categoryId);
                res.json(products);
            }
            catch (error) {
                res.status(500).json({ error: "Videosuz ürünler getirilemedi" });
            }
        });
    }
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
                const { role, _id } = req.user;
                if (role !== "superAdmin" && role !== "admin") {
                    return res.status(403).json({
                        success: false,
                        message: "Bu işlemi gerçekleştirme yetkiniz yok",
                    });
                }
                const product = yield productService_1.default.createProduct(req.body, _id); // _id'yi ekleyin
                if (!product) {
                    return res.status(400).json({
                        success: false,
                        message: "Ürün oluşturulurken hata oluştu",
                    });
                }
                return res.status(201).json({
                    success: true,
                    product,
                });
            }
            catch (error) {
                console.error("Ürün oluşturulurken hata oluştu:", error);
                return res.status(500).json({
                    success: false,
                    message: "Sunucu hatası",
                    error: " error.message" || error,
                });
            }
        });
    }
    updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { role, _id } = req.user;
                if (!id) {
                    return res.status(400).json({
                        success: false,
                        message: "Product ID is required",
                    });
                }
                const product = yield productService_1.default.getProductById(id);
                if (!product) {
                    return res.status(404).json({
                        success: false,
                        message: "Product Not Found",
                    });
                }
                if (role === "superAdmin") {
                    const updatedProduct = yield productService_1.default.updateProduct(id, req.body);
                    return res.status(200).json({
                        success: true,
                        updatedProduct,
                    });
                }
                if (product.createdBy.toString() !== _id.toString()) {
                    return res.status(403).json({
                        success: false,
                        message: "Bu ürünü düzenleme yetkiniz yok",
                    });
                }
                const updatedProduct = yield productService_1.default.updateProduct(id, req.body);
                return res.status(200).json({
                    success: true,
                    updatedProduct,
                });
            }
            catch (error) {
                console.error("Error updating product:", error);
                return res.status(500).json({
                    success: false,
                    message: "Server Error",
                });
            }
        });
    }
    deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { role, _id } = req.user;
                if (!id) {
                    return res.status(400).json({
                        success: false,
                        message: "Ürün ID'si gerekli",
                    });
                }
                const product = yield productService_1.default.getProductById(id);
                if (!product) {
                    return res.status(404).json({
                        success: false,
                        message: "Ürün bulunamadı",
                    });
                }
                if (role === "superAdmin") {
                    // SuperAdmin her ürünü silebilir
                    const deletedProduct = yield productService_1.default.deleteProduct(id);
                    return res.status(200).json({
                        success: true,
                        message: "Ürün başarıyla silindi",
                        deletedProduct,
                    });
                }
                if (product.createdBy.toString() !== _id.toString()) {
                    // Admin sadece kendi ürünlerini silebilir
                    return res.status(403).json({
                        success: false,
                        message: "Bu ürünü silme yetkiniz yok",
                    });
                }
                const deletedProduct = yield productService_1.default.deleteProduct(id);
                return res.status(200).json({
                    success: true,
                    message: "Ürün başarıyla silindi",
                    deletedProduct,
                });
            }
            catch (error) {
                console.error("Ürün silme hatası:", error);
                return res.status(500).json({
                    success: false,
                    message: "İç Sunucu Hatası",
                });
            }
        });
    }
    //product category
    getProductsByCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { categoryId } = req.params;
                const products = yield productService_1.default.getProductsByCategory(categoryId);
                res.json(products);
            }
            catch (error) {
                res.status(500).json({ error: "Ürünler getirilemedi" });
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
