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
class ProductService {
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
    createProduct(productBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = {
                    name: productBody.name,
                    description: productBody.description,
                    price: productBody.price,
                    imageUrl: productBody.imageUrl,
                    video: productBody.video,
                    isClick: productBody.isClick,
                    isFlash: productBody.isFlash,
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
    //flash product
    getIsFlashProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const isFlashProducts = yield productModel_1.default.find({ isFlash: true });
                if (isFlashProducts.length === 0)
                    return null;
                return isFlashProducts;
            }
            catch (error) {
                console.error("Error fetching flash products:", error);
                throw new Error("Error fetching flash products");
            }
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
}
exports.default = new ProductService();
