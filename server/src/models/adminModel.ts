import mongoose, { Schema } from "mongoose";
import { IAdmin } from "../types/adminType";
import bcrypt from "bcrypt";

const AdminSchema: Schema<IAdmin> = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role:{type:String, enum:["superAdmin","admin"], default:"admin"},
}, {
  timestamps: true
});

AdminSchema.pre<IAdmin>('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err: any) {
    next(err);
  }
});

AdminSchema.methods.comparePassword = function (password: string): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

export default mongoose.model<IAdmin>('Admin', AdminSchema);
