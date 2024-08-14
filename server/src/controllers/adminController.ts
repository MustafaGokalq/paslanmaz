import { Request, Response } from "express";
import AdminService from "../services/adminService";
import APIError from "../utils/errors";

class AdminController {
  async register(req: Request, res: Response): Promise<void> {
    try {
      const { username, email, password, role } = req.body;
      if (!username || !email || !password) {
        res.status(400).json({ message: "Username, email, and password are required" });
        return;
      }

      const admin = await AdminService.registerAdmin(username, email, password, role);
      res.status(201).json({ message: "Admin registered successfully", admin });
    } catch (error) {
      if (error instanceof APIError) {
        res.status(error.statusCode).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Error registering admin" });
      }
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(400).json({ message: "Email and password are required" });
        return;
      }

      const token = await AdminService.loginAdmin(email, password);
      res.status(200).json({ token });
    } catch (error) {
      if (error instanceof APIError) {
        res.status(error.statusCode).json({ message: error.message });
      } else {
        res.status(401).json({ message: "Invalid email or password" });
      }
    }
  }

  async resetPassword(req: Request, res: Response): Promise<void> {
    try {
      const { email, newPassword } = req.body;

      if (!email || !newPassword) {
        res.status(400).json({ message: "Email and new password are required" });
        return;
      }

      await AdminService.resetPassword(email, newPassword);
      res.status(200).json({ message: "Password reset successfully" });
    } catch (error) {
      if (error instanceof APIError) {
        res.status(error.statusCode).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Error resetting password" });
      }
    }
  }
}

export default new AdminController();
