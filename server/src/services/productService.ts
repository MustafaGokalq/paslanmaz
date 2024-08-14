import mongoose, { Types } from "mongoose";
import Product from "../models/productModel";
import emailService from "../utils/emailService";
import IProduct from "../types/productType";

class ProductService {
  //videolu produclar
  async getProductsWithVideo(categoryId: string) {
    return await Product.find({
      categoryId,
      videoUrl: { $exists: true, $ne: "" },
    });
  }
  //videosuz produclar
  async getProductsWithoutVideo(categoryId: string) {
    return await Product.find({ categoryId, videoUrl: { $exists: false } });
  }
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

  async getProductById(productId: string) {
    try {
      if (!Types.ObjectId.isValid(productId)) {
        throw new Error("Invalid product ID");
      }
      const product = await Product.findById(productId).exec();
      if (!product) {
        return null;
      }
      return product;
    } catch (error) {
      console.error("Error fetching product by ID", error);
      throw new Error("Error fetching product by ID");
    }
  }

  //create product
async createProduct(productBody: IProduct, createdBy: mongoose.Schema.Types.ObjectId) {
    try {
      console.log("Product Body in Service:", productBody);
        const product = await Product.create(productBody);
        
        return product;
    } catch (error) {
        console.error("Ürün oluşturulurken hata oluştu:", error);
        throw new Error("Ürün oluşturulurken hata oluştu");
    }
}



  async updateProduct(productId: string, productBody: Partial<IProduct>) {
    try {
      if (!Types.ObjectId.isValid(productId)) {
        throw new Error("Invalid Product ID");
      }
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        productBody,
        {
          new: true,
        }
      ).exec();
      if (!updatedProduct) {
        return null;
      }
      return updatedProduct;
    } catch (error) {
      console.error("Error updating product:", error);
      throw new Error("Error updating product");
    }
  }

  async deleteProduct(productId: string) {
    try {
      if (!Types.ObjectId.isValid(productId)) {
        throw new Error("Invalid Product ID");
      }
      const deletedProduct = await Product.findByIdAndDelete(productId).exec();
      if (!deletedProduct) {
        return null;
      }
      return deletedProduct;
    } catch (error) {
      console.error("Error deleting product:", error);
      throw new Error("Error deleting product");
    }
  }

  //category product
  async getProductsByCategory(categoryId: string) {
    return await Product.find({ categoryId });
  }

  //purchaseProduct
  async purchaseProduct(productId: string): Promise<void> {
    const product = await Product.findById(productId);
    if (!product) {
      throw new Error("Product Not Found");
    }
    await emailService.sendProductPurchaseEmail(product.name);
  }
}

export default new ProductService();
