import { Request, Response } from "express";
import AdminService from "../services/adminService";

class AdminController {
  async register(req: Request, res: Response): Promise<void> {
    try {
      const { username, email, password, role } = req.body;
      const admin = await AdminService.registerAdmin(username, email, password, role);
      res.status(201).json({ message: "Admin registered successfully", admin });
    } catch (error) {
      res.status(400).json({ message: "Register Error", error: error });
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const token = await AdminService.loginAdmin(email, password);
      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ message: "Login Error" });
    }
  }

  async resetPassword(req: Request, res: Response): Promise<void> {
    try {
      const { email, newPassword } = req.body;
      await AdminService.resetPassword(email, newPassword);
      res.status(200).json({ message: "Password reset successfully" });
    } catch (error) {
      res.status(400).json({ message: "Reset Error" });
    }
  }
}

export default new AdminController();
