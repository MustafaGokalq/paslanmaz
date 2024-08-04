import Document from "mongoose";

interface IProduct extends Document{
    name:string,
    description:string,
    price:string,
    imageUrl:string,
    stock:number,
    isClick:number,
    isFlash:boolean
}


export default IProduct;