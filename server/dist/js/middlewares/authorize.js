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
const productModel_1 = __importDefault(require("../models/productModel"));
const authorize = (roles) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = req.user;
            if (!user) {
                return res.status(401).json({ message: "yetkisiz işlem" });
            }
            if (!roles.includes(user.role)) {
                return res.status(403).json({
                    message: "Bu işlemi gerçekleştirmeye yetkiniz yok"
                });
            }
            if (user.role === "admin") {
                const product = yield productModel_1.default.findById(req.params.id);
                if (!product) {
                    return res.status(404).json({ message: "ürün bulunamadı" });
                }
                if (product && String(product.createdBy) !== String(user._id)) {
                    return res.status(403).json({ message: "Bu ürünü değiştirme izniniz yok" });
                }
            }
            next();
        }
        catch (error) {
            console.error("Authorize middleware error:", error);
            res.status(500).json({ message: "Bir hata oluştu" });
        }
    });
};
exports.default = authorize;
