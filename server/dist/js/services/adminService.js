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
const adminModel_1 = __importDefault(require("../models/adminModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AdminService {
    registerAdmin(name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let admin = yield adminModel_1.default.findOne({ email });
            if (admin) {
                throw new Error('Admin already exists');
            }
            admin = new adminModel_1.default({ name, email, password });
            yield admin.save();
            return admin;
        });
    }
    loginAdmin(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const admin = yield adminModel_1.default.findOne({ email });
            if (!admin) {
                throw new Error('Invalid credentials');
            }
            const isMatch = yield admin.comparePassword(password);
            if (!isMatch) {
                throw new Error('Invalid credentials');
            }
            const token = jsonwebtoken_1.default.sign({ id: admin._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
            return token;
        });
    }
    resetPassword(email, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            const admin = yield adminModel_1.default.findOne({ email });
            if (!admin) {
                throw new Error('Admin not found');
            }
            admin.password = newPassword;
            yield admin.save();
        });
    }
}
exports.default = new AdminService();
