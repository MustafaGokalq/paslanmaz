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
const mongoose_1 = require("mongoose");
const productModel_1 = __importDefault(require("../models/productModel"));
const emailService_1 = __importDefault(require("../utils/emailService"));
class ProductService {
    //videolu produclar
    getProductsWithVideo(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield productModel_1.default.find({ categoryId, videoUrl: { $exists: true, $ne: "" } });
        });
    }
    //videosuz produclar
    getProductsWithoutVideo(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield productModel_1.default.find({ categoryId, videoUrl: { $exists: false } });
        });
    }
    //fetch all product
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield productModel_1.default.find();
                return products;
            }
            catch (error) {
                console.error("Error fetching products:", error);
                throw new Error("Error fetching products");
            }
        });
    }
    getProductById(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!mongoose_1.Types.ObjectId.isValid(productId)) {
                    throw new Error("Invalid product ID");
                }
                const product = yield productModel_1.default.findById(productId).exec();
                if (!product) {
                    return null;
                }
                return product;
            }
            catch (error) {
                console.error("Error fetching product by ID", error);
                throw new Error("Error fetching product by ID");
            }
        });
    }
    //create product
    createProduct(productBody, createdBy) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = {
                    name: productBody.name,
                    description: productBody.description,
                    price: productBody.price,
                    imageUrl: productBody.imageUrl,
                    videoUrl: productBody.videoUrl,
                    isClick: productBody.isClick,
                    categoryId: productBody.categoryId,
                    createdBy: productBody.createdBy,
                };
                const newProduct = yield productModel_1.default.create(product);
                return newProduct;
            }
            catch (error) {
                console.error("Error creating product:", error);
                throw new Error("Error creating product");
            }
        });
    }
    updateProduct(productId, productBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!mongoose_1.Types.ObjectId.isValid(productId)) {
                    throw new Error("Invalid Product ID");
                }
                const updatedProduct = yield productModel_1.default.findByIdAndUpdate(productId, productBody, {
                    new: true,
                }).exec();
                if (!updatedProduct) {
                    return null;
                }
                return updatedProduct;
            }
            catch (error) {
                console.error("Error updating product:", error);
                throw new Error("Error updating product");
            }
        });
    }
    deleteProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!mongoose_1.Types.ObjectId.isValid(productId)) {
                    throw new Error("Invalid Product ID");
                }
                const deletedProduct = yield productModel_1.default.findByIdAndDelete(productId).exec();
                if (!deletedProduct) {
                    return null;
                }
                return deletedProduct;
            }
            catch (error) {
                console.error("Error deleting product:", error);
                throw new Error("Error deleting product");
            }
        });
    }
    //category product
    getProductsByCategory(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield productModel_1.default.find({ categoryId });
        });
    }
    //most click
    getMostClickedProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const mostClickedProduct = yield productModel_1.default.findOne()
                    .sort({ clicks: -1 })
                    .exec();
                if (!mostClickedProduct)
                    return null;
                return mostClickedProduct;
            }
            catch (error) {
                console.error("Error fetching most clicked product:", error);
                throw new Error("Error fetching most clicked product");
            }
        });
    }
    //purchaseProduct
    purchaseProduct(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield productModel_1.default.findById(productId);
            if (!product) {
                throw new Error("Product Not Found");
            }
            yield emailService_1.default.sendProductPurchaseEmail(product.name);
        });
    }
    ;
}
exports.default = new ProductService();
