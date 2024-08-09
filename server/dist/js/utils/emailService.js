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
const nodemailer_1 = __importDefault(require("nodemailer"));
class EmailService {
    constructor() {
        this.transporter = nodemailer_1.default.createTransport({
            service: 'gmail',
            auth: {
                user: 'gokalpmustafa49@gmail.com',
                pass: 'Şifre'
            }
        });
    }
    sendProductPurchaseEmail(productName) {
        return __awaiter(this, void 0, void 0, function* () {
            const mailOptions = {
                from: 'nzzrgyqdxtooiwkkql@nbmbb.com',
                to: 'gokalpmustafa49@gmail.com',
                subject: 'Yeni Ürün Satın Alma Talebi',
                text: `Bir kullanıcı ${productName} adlı ürünü satın almak istiyor.`
            };
            try {
                yield this.transporter.sendMail(mailOptions);
                console.log('Email sent successfully');
            }
            catch (error) {
                console.error('Error sending email:', error);
            }
        });
    }
}
exports.default = new EmailService();
