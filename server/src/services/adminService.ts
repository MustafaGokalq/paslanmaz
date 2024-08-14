import mongoose, { Types } from "mongoose";
import Admin from "../models/adminModel";
import { IAdmin } from "../types/adminType";
import jwt from "jsonwebtoken";

class AdminService {
  async registerAdmin(username: string, email: string, password: string, role: string = "admin"): Promise<IAdmin> {
    let admin = await Admin.findOne({ username });
    if (admin) {
      throw new Error('Admin already exists');
    }
    admin = new Admin({ username, email, password, role });
    await admin.save();
    return admin;
  }

  async loginAdmin(email: string, password: string): Promise<string> {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      throw new Error('Invalid credentials');
    }
    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.SECRET_KEY as string, { expiresIn: '1h' });
    return token;
  }

  async resetPassword(email: string, newPassword: string): Promise<void> {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      throw new Error('Admin not found');
    }
    admin.password = newPassword;
    await admin.save();
  }

 
}

export default new AdminService();
