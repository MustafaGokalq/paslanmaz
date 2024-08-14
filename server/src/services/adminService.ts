import { registerSchema, loginSchema, resetPasswordSchema } from "../validations/adminValidation";
import Admin from "../models/adminModel";
import { IAdmin } from "../types/adminType";
import jwt from "jsonwebtoken";
import APIError from "../utils/errors"; // APIError sınıfınızı import edin

class AdminService {
    async registerAdmin(username: string, email: string, password: string, role: string = "admin"): Promise<IAdmin> {
        try {
            const { error } = registerSchema.validate({ username, email, password, role });
            if (error) {
                throw new APIError(error.details[0].message, 400);
            }

            let admin = await Admin.findOne({ email });
            if (admin) {
                throw new APIError('Admin already exists', 400);
            }
            admin = new Admin({ username, email, password, role });
            await admin.save();
            return admin;
        } catch (error) {
            if (error instanceof APIError) {
                // APIError örneğini fırlatır, middleware bunu yakalar ve kullanıcıya iletir.
                throw error;
            } else {
                // Diğer hatalar, konsola loglanır.
                console.error('Register Error:', error);
                throw new APIError('Internal server error', 500);
            }
        }
    }

    async loginAdmin(email: string, password: string): Promise<string> {
        try {
            const { error } = loginSchema.validate({ email, password });
            if (error) {
                throw new APIError(error.details[0].message, 400);
            }

            const admin = await Admin.findOne({ email });
            if (!admin) {
                throw new APIError('Invalid credentials', 401);
            }
            const isMatch = await admin.comparePassword(password);
            if (!isMatch) {
                throw new APIError('Invalid credentials', 401);
            }
            const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.SECRET_KEY as string, { expiresIn: '1h' });
            return token;
        } catch (error) {
            if (error instanceof APIError) {
                throw error;
            } else {
                console.error('Login Error:', error);
                throw new APIError('Internal server error', 500);
            }
        }
    }

    async resetPassword(email: string, newPassword: string): Promise<void> {
        try {
            const { error } = resetPasswordSchema.validate({ email, newPassword });
            if (error) {
                throw new APIError(error.details[0].message, 400);
            }
            
            const admin = await Admin.findOne({ email });
            if (!admin) {
                throw new APIError('Admin not found', 404);
            }
            admin.password = newPassword;
            await admin.save();
        } catch (error) {
            if (error instanceof APIError) {
                throw error;
            } else {
                console.error('Reset Password Error:', error);
                throw new APIError('Internal server error', 500);
            }
        }
    }
}

export default new AdminService();
