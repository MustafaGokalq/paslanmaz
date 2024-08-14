import mongoose, { Schema } from "mongoose";
import IProduct from "../types/productType";

const productSchema: Schema<IProduct> = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: false },
  imageUrl: { type: [String], required: true },
  videoUrl: { type: String, required: false },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    required: true,
  }
}, {
  timestamps: true,
});

export default mongoose.model<IProduct>("Product", productSchema);
