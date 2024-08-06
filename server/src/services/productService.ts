import { Types } from "mongoose";
import Product from "../models/productModel";
import IProduct from "../types/productType";

class ProductService {
  //fetch all product
  async getAllProducts() {
    try {
      const products = await Product.find();
      return products;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Error fetching products");
    }
  }

  async getProductById(productId:string){
    try {
      if(!Types.ObjectId.isValid(productId)){
        throw new Error("Invalid product ID");
      }
      const product = await Product.findById(productId).exec();
      if(!product){
        return null;
      }
      return product;
    } catch (error) {
      console.error("Error fetching product by ID", error);
      throw new Error("Error fetching product by ID")
    }
  }

  //create product
  async createProduct(productBody: IProduct) {
    try {

      const product = {
        name: productBody.name,
        description: productBody.description,
        price: productBody.price,
        imageUrl: productBody.imageUrl,
        video: productBody.video,
        isClick: productBody.isClick,
        isFlash: productBody.isFlash,
      };

      const newProduct = await Product.create(product);

   
      return newProduct;
    } catch (error) {
      console.error("Error creating product:", error);
      throw new Error("Error creating product");
    }
  }

  async updateProduct(productId:string, productBody:Partial<IProduct>){
    try {
      if(!Types.ObjectId.isValid(productId)){
        throw new Error("Invalid Product ID");
      }
      const updatedProduct = await Product.findByIdAndUpdate(productId, productBody,{
        new: true,
      }).exec();
      if(!updatedProduct){
        return null;
      }
      return updatedProduct;
      
    } catch (error) {
      console.error("Error updating product:", error);
      throw new Error("Error updating product");
    }
  }

  async deleteProduct(productId:string){
    try {
      if(!Types.ObjectId.isValid(productId)){
        throw new Error("Invalid Product ID")
      }
      const deletedProduct = await Product.findByIdAndDelete(productId).exec();
      if(!deletedProduct){
        return null;
      }
      return deletedProduct;
    } catch (error) {
      console.error("Error deleting product:",error);
      throw new Error("Error deleting product");
    }
  }


  //flash product
  async getIsFlashProducts() {
    try {

      const isFlashProducts = await Product.find({ isFlash: true });

      if (isFlashProducts.length === 0) return null;
      return isFlashProducts;
    } catch (error) {
      console.error("Error fetching flash products:", error);
      throw new Error("Error fetching flash products");
    }
  }

  //most click
  async getMostClickedProduct() {
    try {
      const mostClickedProduct = await Product.findOne()
        .sort({ clicks: -1 })
        .exec();

      if (!mostClickedProduct) return null;

      return mostClickedProduct;
    } catch (error) {
      console.error("Error fetching most clicked product:", error);
      throw new Error("Error fetching most clicked product");
    }
  }
}

export default new ProductService();
