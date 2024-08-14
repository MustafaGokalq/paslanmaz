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
const adminValidation_1 = require("../validations/adminValidation");
const adminModel_1 = __importDefault(require("../models/adminModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errors_1 = __importDefault(require("../utils/errors")); // APIError sınıfınızı import edin
class AdminService {
    registerAdmin(username_1, email_1, password_1) {
        return __awaiter(this, arguments, void 0, function* (username, email, password, role = "admin") {
            try {
                const { error } = adminValidation_1.registerSchema.validate({ username, email, password, role });
                if (error) {
                    throw new errors_1.default(error.details[0].message, 400);
                }
                let admin = yield adminModel_1.default.findOne({ email });
                if (admin) {
                    throw new errors_1.default('Admin already exists', 400);
                }
                admin = new adminModel_1.default({ username, email, password, role });
                yield admin.save();
                return admin;
            }
            catch (error) {
                if (error instanceof errors_1.default) {
                    // APIError örneğini fırlatır, middleware bunu yakalar ve kullanıcıya iletir.
                    throw error;
                }
                else {
                    // Diğer hatalar, konsola loglanır.
                    console.error('Register Error:', error);
                    throw new errors_1.default('Internal server error', 500);
                }
            }
        });
    }
    loginAdmin(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { error } = adminValidation_1.loginSchema.validate({ email, password });
                if (error) {
                    throw new errors_1.default(error.details[0].message, 400);
                }
                const admin = yield adminModel_1.default.findOne({ email });
                if (!admin) {
                    throw new errors_1.default('Invalid credentials', 401);
                }
                const isMatch = yield admin.comparePassword(password);
                if (!isMatch) {
                    throw new errors_1.default('Invalid credentials', 401);
                }
                const token = jsonwebtoken_1.default.sign({ id: admin._id, role: admin.role }, process.env.SECRET_KEY, { expiresIn: '1h' });
                return token;
            }
            catch (error) {
                if (error instanceof errors_1.default) {
                    throw error;
                }
                else {
                    console.error('Login Error:', error);
                    throw new errors_1.default('Internal server error', 500);
                }
            }
        });
    }
    resetPassword(email, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { error } = adminValidation_1.resetPasswordSchema.validate({ email, newPassword });
                if (error) {
                    throw new errors_1.default(error.details[0].message, 400);
                }
                const admin = yield adminModel_1.default.findOne({ email });
                if (!admin) {
                    throw new errors_1.default('Admin not found', 404);
                }
                admin.password = newPassword;
                yield admin.save();
            }
            catch (error) {
                if (error instanceof errors_1.default) {
                    throw error;
                }
                else {
                    console.error('Reset Password Error:', error);
                    throw new errors_1.default('Internal server error', 500);
                }
            }
        });
    }
}
exports.default = new AdminService();
