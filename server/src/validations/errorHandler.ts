import { Request, Response, NextFunction } from "express";
import APIError from "../utils/errors";

const errorHandlerMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof APIError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message
        });
    }

    // Diğer hatalar için (Örneğin MongoDB hataları) genel hata yönetimi
    console.error('Uncaught Error:', err); // Bu satırı konsola hata yazdırır.
    return res.status(500).json({
        success: false,
        message: "Bir hata ile karşılaşıldı, lütfen API'nizi kontrol ediniz."
    });
};

export default errorHandlerMiddleware;
