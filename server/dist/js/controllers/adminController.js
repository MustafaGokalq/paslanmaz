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
const adminService_1 = __importDefault(require("../services/adminService"));
class AdminController {
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password } = req.body;
                const admin = yield adminService_1.default.registerAdmin(name, email, password);
                res.status(201).json({ message: 'Admin registered successfully', admin });
            }
            catch (err) {
                res.status(400).json({ message: "Register Error" });
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const token = yield adminService_1.default.loginAdmin(email, password);
                res.json({ token });
            }
            catch (err) {
                res.status(400).json({ message: "User or password is incorrect" });
            }
        });
    }
    resetPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, newPassword } = req.body;
                yield adminService_1.default.resetPassword(email, newPassword);
                res.json({ message: 'Password reset successfully' });
            }
            catch (err) {
                res.status(400).json({ message: "Password Reset Error" });
            }
        });
    }
}
exports.default = new AdminController();
