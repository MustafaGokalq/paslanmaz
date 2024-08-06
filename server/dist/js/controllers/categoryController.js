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
const categoryService_1 = __importDefault(require("../services/categoryService"));
class CategoryController {
    getAllCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield categoryService_1.default.getAllCategories();
                if (!categories || categories.length === 0) {
                    return res.status(404).json({
                        success: false,
                        message: "Categories not found",
                    });
                }
                return res.status(200).json({
                    success: true,
                    categories,
                });
            }
            catch (error) {
                console.error("Error fetching categories:", error);
                return res.status(500).json({
                    success: false,
                    message: "Server Error",
                });
            }
        });
    }
    getSingleCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                // ID'nin mevcut olup olmadığını kontrol edin
                if (!id) {
                    return res.status(400).json({
                        success: false,
                        message: "Category ID is required",
                    });
                }
                const category = yield categoryService_1.default.getCategoryById(id);
                if (!category) {
                    return res.status(404).json({
                        success: false,
                        message: "Category not found",
                    });
                }
                return res.status(200).json({
                    success: true,
                    category,
                });
            }
            catch (error) {
                console.error("Error fetching category:", error);
                return res.status(500).json({
                    success: false,
                    message: "Internal Server Error",
                });
            }
        });
    }
    createCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield categoryService_1.default.createCategory(req.body);
                return res.status(201).json({
                    success: true,
                    category,
                });
            }
            catch (error) {
                console.error("Error creating category:", error);
                return res.status(500).json({
                    success: false,
                    message: "Internal Server Error",
                });
            }
        });
    }
    updateCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id) {
                    return res.status(400).json({
                        success: false,
                        message: "Category ID is required"
                    });
                }
                const updatedCategory = yield categoryService_1.default.updateCategory(id, req.body);
                if (!updatedCategory) {
                    return res.status(404).json({
                        success: false,
                        message: "Category Not Found"
                    });
                }
                return res.status(200).json({
                    success: true,
                    updatedCategory
                });
            }
            catch (error) {
                return res.status(500).json({
                    success: false,
                    message: "Video not found"
                });
            }
        });
    }
    deleteCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id) {
                    return res.status(400).json({
                        success: false,
                        message: "Category ID is required"
                    });
                }
                const deletedCategory = yield categoryService_1.default.deleteCategory(id);
                if (!deletedCategory) {
                    return res.status(404).json({
                        success: false,
                        message: "Category not Found"
                    });
                }
                return res.status(200).json({
                    success: true,
                    message: "Video deleted successfully"
                });
            }
            catch (error) {
                console.error("Error deleting video:", error);
                return res.status(500).json({
                    success: false,
                    message: "Internal Server Error",
                });
            }
        });
    }
}
exports.default = new CategoryController();
