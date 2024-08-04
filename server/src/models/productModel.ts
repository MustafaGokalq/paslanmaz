import mongoose, { mongo, Schema } from "mongoose";
import IProduct from "../types/type";

const productSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
    require: true,
  },
  stock: { type: Number },
  isClick: { type: Number, default:0 },
  isFlash: { type: Boolean },
},{
    timestamps:true
});

export default mongoose.model<IProduct>("Product", productSchema);
