"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError extends Error {
    constructor(message, statusCode) {
        super(message),
            this.statusCode = statusCode || 400;
    }
}
exports.default = AppError;
