import { Document } from "mongoose";
import IProduct from "./productType";

interface ICategory extends Document {
    name: string;
    image:string;
    products: IProduct[];
}

export default ICategory;
