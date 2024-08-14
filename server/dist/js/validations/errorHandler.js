"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = __importDefault(require("../utils/errors"));
const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof errors_1.default) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message
        });
    }
    // Diğer hatalar için (Örneğin MongoDB hataları) genel hata yönetimi
    console.error('Uncaught Error:', err); // Bu satırı konsola hata yazdırır.
    return res.status(500).json({
        success: false,
        message: "Bir hata ile karşılaşıldı, lütfen API'nizi kontrol ediniz."
    });
};
exports.default = errorHandlerMiddleware;
