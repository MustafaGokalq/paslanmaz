"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordSchema = exports.loginSchema = exports.registerSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.registerSchema = joi_1.default.object({
    username: joi_1.default.string().max(32).required().messages({
        'string.base': 'Kullanıcı adı normal karakterlerden oluşmalıdır.',
        'string.empty': 'Kullanıcı adı boş geçilemez.',
        'string.max': 'Kullanıcı adı en fazla 32 karakter olabilir.',
        'string.required': 'Kullanıcı adı alanı zorunludur.'
    }),
    email: joi_1.default.string().email().max(32).required().messages({
        'string.base': 'E-posta normal karakterlerden oluşmalıdır.',
        'string.empty': 'E-posta boş geçilemez.',
        'string.max': 'E-posta en fazla 32 karakterden oluşmalıdır.',
        'string.required': 'E-posta alanı zorunludur.',
        'string.email': 'E-posta alanı geçerli bir e-posta formatında olmalıdır.'
    }),
    password: joi_1.default.string().min(6).max(16).required().messages({
        'string.base': 'Parola normal karakterlerden oluşmalıdır.',
        'string.empty': 'Parola boş geçilemez.',
        'string.min': 'Parola en az 6 karakterden oluşmalıdır.',
        'string.max': 'Parola en fazla 16 karakterden oluşmalıdır.',
        'string.required': 'Parola alanı zorunludur.'
    }),
    role: joi_1.default.string().valid('admin', 'superAdmin').default('admin')
});
exports.loginSchema = joi_1.default.object({
    email: joi_1.default.string().email().max(32).required().messages({
        'string.base': 'E-posta normal karakterlerden oluşmalıdır.',
        'string.empty': 'E-posta boş geçilemez.',
        'string.max': 'E-posta en fazla 32 karakterden oluşmalıdır.',
        'string.required': 'E-posta alanı zorunludur.',
        'string.email': 'E-posta alanı geçerli bir e-posta formatında olmalıdır.'
    }),
    password: joi_1.default.string().min(6).max(16).required().messages({
        'string.base': 'Parola normal karakterlerden oluşmalıdır.',
        'string.empty': 'Parola boş geçilemez.',
        'string.min': 'Parola en az 6 karakterden oluşmalıdır.',
        'string.max': 'Parola en fazla 16 karakterden oluşmalıdır.',
        'string.required': 'Parola alanı zorunludur.'
    })
});
exports.resetPasswordSchema = joi_1.default.object({
    email: joi_1.default.string().email().required().messages({
        'string.base': 'E-posta normal karakterlerden oluşmalıdır.',
        'string.empty': 'E-posta boş geçilemez.',
        'string.required': 'E-posta alanı zorunludur.',
        'string.email': 'E-posta alanı geçerli bir e-posta formatında olmalıdır.'
    }),
    newPassword: joi_1.default.string().min(6).max(16).required().messages({
        'string.base': 'Parola normal karakterlerden oluşmalıdır.',
        'string.empty': 'Parola boş geçilemez.',
        'string.min': 'Parola en az 6 karakterden oluşmalıdır.',
        'string.max': 'Parola en fazla 16 karakterden oluşmalıdır.',
        'string.required': 'Parola alanı zorunludur.'
    })
});
