import mongoose, { Schema } from "mongoose";
import ICategory from "../types/categoryType";
import Product from "./productModel";

const categorySchema = new Schema<ICategory>({
    name: { type: String, required: true },
    image: { type: String, required: true },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
}, {
    timestamps: true
});

export default mongoose.model<ICategory>("Category", categorySchema);
