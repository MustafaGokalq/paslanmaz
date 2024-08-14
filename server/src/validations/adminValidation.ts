import Joi from 'joi';

export const registerSchema = Joi.object({
  username: Joi.string().max(32).required().messages({
    'string.base': 'Kullanıcı adı normal karakterlerden oluşmalıdır.',
    'string.empty': 'Kullanıcı adı boş geçilemez.',
    'string.max': 'Kullanıcı adı en fazla 32 karakter olabilir.',
    'string.required': 'Kullanıcı adı alanı zorunludur.'
  }),
  email: Joi.string().email().max(32).required().messages({
    'string.base': 'E-posta normal karakterlerden oluşmalıdır.',
    'string.empty': 'E-posta boş geçilemez.',
    'string.max': 'E-posta en fazla 32 karakterden oluşmalıdır.',
    'string.required': 'E-posta alanı zorunludur.',
    'string.email': 'E-posta alanı geçerli bir e-posta formatında olmalıdır.'
  }),
  password: Joi.string().min(6).max(16).required().messages({
    'string.base': 'Parola normal karakterlerden oluşmalıdır.',
    'string.empty': 'Parola boş geçilemez.',
    'string.min': 'Parola en az 6 karakterden oluşmalıdır.',
    'string.max': 'Parola en fazla 16 karakterden oluşmalıdır.',
    'string.required': 'Parola alanı zorunludur.'
  }),
  role: Joi.string().valid('admin', 'superAdmin').default('admin')
});

export const loginSchema = Joi.object({
  email: Joi.string().email().max(32).required().messages({
    'string.base': 'E-posta normal karakterlerden oluşmalıdır.',
    'string.empty': 'E-posta boş geçilemez.',
    'string.max': 'E-posta en fazla 32 karakterden oluşmalıdır.',
    'string.required': 'E-posta alanı zorunludur.',
    'string.email': 'E-posta alanı geçerli bir e-posta formatında olmalıdır.'
  }),
  password: Joi.string().min(6).max(16).required().messages({
    'string.base': 'Parola normal karakterlerden oluşmalıdır.',
    'string.empty': 'Parola boş geçilemez.',
    'string.min': 'Parola en az 6 karakterden oluşmalıdır.',
    'string.max': 'Parola en fazla 16 karakterden oluşmalıdır.',
    'string.required': 'Parola alanı zorunludur.'
  })
});

export const resetPasswordSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.base': 'E-posta normal karakterlerden oluşmalıdır.',
    'string.empty': 'E-posta boş geçilemez.',
    'string.required': 'E-posta alanı zorunludur.',
    'string.email': 'E-posta alanı geçerli bir e-posta formatında olmalıdır.'
  }),
  newPassword: Joi.string().min(6).max(16).required().messages({
    'string.base': 'Parola normal karakterlerden oluşmalıdır.',
    'string.empty': 'Parola boş geçilemez.',
    'string.min': 'Parola en az 6 karakterden oluşmalıdır.',
    'string.max': 'Parola en fazla 16 karakterden oluşmalıdır.',
    'string.required': 'Parola alanı zorunludur.'
  })
});
