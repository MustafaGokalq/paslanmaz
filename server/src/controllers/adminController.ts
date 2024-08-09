import { Request, Response } from "express";
import AdminService from "../services/adminService";

class AdminController {
  async register(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password } = req.body;
      const admin = await AdminService.registerAdmin(name, email, password);
      res.status(201).json({ message: 'Admin registered successfully', admin });
    } catch (err) {
      res.status(400).json({ message: "Register Error" });
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const token = await AdminService.loginAdmin(email, password);
      res.json({ token });
    } catch (err) {
      res.status(400).json({ message:"User or password is incorrect"});
    }
  }

  async resetPassword(req: Request, res: Response): Promise<void> {
    try {
      const { email, newPassword } = req.body;
      await AdminService.resetPassword(email, newPassword);
      res.json({ message: 'Password reset successfully' });
    } catch (err) {
      res.status(400).json({ message: "Password Reset Error"});
    }
  }
}

export default new AdminController();
