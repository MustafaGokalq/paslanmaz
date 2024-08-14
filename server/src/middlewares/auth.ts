import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const auth = (req: Request | any, res: Response, next: NextFunction) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ message: 'Token yok, yetkilendirme reddedildi' });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY as string) as { _id: string, role: string };
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token geçerli degil' });
  }
};


export default auth;