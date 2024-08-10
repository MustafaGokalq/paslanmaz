import mongoose, {Schema } from "mongoose";
import IProduct from "../types/productType";

const productSchema: Schema = new Schema<IProduct>({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: false,
  },
  imageUrl: {
    type: String,
    require: true,
  },
  video:{
    type:String,
    require:false
  },
  isClick: { type: Number, default:0 },
  isFlash: { type: Boolean },
},{
    timestamps:true
});

export default mongoose.model<IProduct>("Product", productSchema);
