import { Request, Response } from "express";
import AdminService from "../services/adminService";

class AdminController {
  async register(req: Request, res: Response): Promise<void> {
    try {
      const { username, email, password, role } = req.body;

      // Basit veri doğrulama
      if (!username || !email || !password) {
        res.status(400).json({ message: "Username, email, and password are required" });
        return;
      }

      const admin = await AdminService.registerAdmin(username, email, password, role);
      res.status(201).json({ message: "Admin registered successfully", admin });
    } catch (error) {
      console.error("Register Error:", error);  // Hata loglama
      res.status(500).json({ message: "Error registering admin" });  // Genel hata mesajı
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;

      // Basit veri doğrulama
      if (!email || !password) {
        res.status(400).json({ message: "Email and password are required" });
        return;
      }

      const token = await AdminService.loginAdmin(email, password);
      res.status(200).json({ token });
    } catch (error) {
      console.error("Login Error:", error);  // Hata loglama
      res.status(401).json({ message: "Invalid email or password" });  // Genel hata mesajı
    }
  }

  async resetPassword(req: Request, res: Response): Promise<void> {
    try {
      const { email, newPassword } = req.body;

      // Basit veri doğrulama
      if (!email || !newPassword) {
        res.status(400).json({ message: "Email and new password are required" });
        return;
      }

      await AdminService.resetPassword(email, newPassword);
      res.status(200).json({ message: "Password reset successfully" });
    } catch (error) {
      console.error("Reset Error:", error);  // Hata loglama
      res.status(500).json({ message: "Error resetting password" });  // Genel hata mesajı
    }
  }
}

export default new AdminController();
