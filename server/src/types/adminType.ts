import { Document, ObjectId } from "mongoose";

export interface IAdmin extends Document {
  username: string;
  email: string;
  password: string;
  _id:ObjectId;
  role: "superAdmin" | "admin";
  comparePassword(password: string): Promise<boolean>;
}
