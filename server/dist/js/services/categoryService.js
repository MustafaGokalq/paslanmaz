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
const categoryModel_1 = __importDefault(require("../models/categoryModel"));
class categoryService {
    getAllCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield categoryModel_1.default.find();
                if (categories.length === 0) {
                    return null; // veya empty array [] döndürebilirsiniz
                }
                return categories;
            }
            catch (error) {
                console.error("Error fetching categories:", error); // Hata loglama
                throw new Error("Error fetching categories"); // Hata fırlatma
            }
        });
    }
    getCategoryById(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Geçerli bir ObjectId olup olmadığını kontrol edin
                if (!mongoose_1.Types.ObjectId.isValid(categoryId)) {
                    throw new Error("Invalid category ID");
                }
                const category = yield categoryModel_1.default.findById(categoryId).exec();
                if (!category) {
                    return null;
                }
                return category;
            }
            catch (error) {
                console.error("Error fetching category by ID:", error);
                throw new Error("Error fetching category by ID");
            }
        });
    }
    createCategory(categoryBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield categoryModel_1.default.create(categoryBody);
                return category;
            }
            catch (error) {
                console.error("Error creating category:", error);
                throw new Error("Error creating category");
            }
        });
    }
    updateCategory(categoryId, videoBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!mongoose_1.Types.ObjectId.isValid(categoryId)) {
                    throw new Error("Invalid video ID");
                }
                const updatedCategory = yield categoryModel_1.default.findByIdAndUpdate(categoryId, videoBody, { new: true }).exec();
                if (!updatedCategory) {
                    return null;
                }
                return updatedCategory;
            }
            catch (error) {
                console.error("Error updating video:", error);
                throw new Error("Error updating video");
            }
        });
    }
    deleteCategory(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!mongoose_1.Types.ObjectId.isValid(categoryId)) {
                    throw new Error("Invalid category ID");
                }
                const deletedCategory = yield categoryModel_1.default.findByIdAndDelete(categoryId).exec();
                if (!deletedCategory) {
                    return null;
                }
                return deletedCategory;
            }
            catch (error) {
                console.error("Error category video:", error);
                throw new Error("Error category video");
            }
        });
    }
}
exports.default = new categoryService();
