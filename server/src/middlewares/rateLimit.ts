import rateLimit from "express-rate-limit";
import { Request, Response } from "express";

const allowList = ["::1"];

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: (req: Request, res: Response) => {
        if (req.url === "/login" || req.url === "/register") return 5;
        else return 100;
    },
    message: {
        success: false,
        message: "Çok fazla istekte bulundunuz !"
    },
    skip: (req: Request, res: Response) => {
        const ip = req.ip || "";
        return allowList.includes(ip);
    },
    standardHeaders: true,
    legacyHeaders: false,
});

export default apiLimiter;
