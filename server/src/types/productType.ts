import mongoose from "mongoose";
import Document from "mongoose";

interface IProduct extends Document{
    name:string,
    description:string,
    price?:string,
    imageUrl:string[],
    videoUrl?:string,
    categoryId: mongoose.Schema.Types.ObjectId;
    createdBy: mongoose.Schema.Types.ObjectId;
   
}


export default IProduct;