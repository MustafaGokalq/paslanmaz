import { Types } from "mongoose";
import Category from "../models/categoryModel";
import ICategory from "../types/categoryType";

class categoryService {
  async getAllCategories() {
    try {
      const categories = await Category.find();
      if (categories.length === 0) {
        return null; // veya empty array [] döndürebilirsiniz
      }
      return categories;
    } catch (error) {
      console.error("Error fetching categories:", error); // Hata loglama
      throw new Error("Error fetching categories"); // Hata fırlatma
    }
  }

  async getCategoryById(categoryId: string) {
    try {
      // Geçerli bir ObjectId olup olmadığını kontrol edin
      if (!Types.ObjectId.isValid(categoryId)) {
        throw new Error("Invalid category ID");
      }
  
      const category = await Category.findById(categoryId).exec();
      if (!category) {
        return null;
      }
      return category;
    } catch (error) {
      console.error("Error fetching category by ID:", error);
      throw new Error("Error fetching category by ID");
    }
  }
  
  async createCategory(categoryBody: ICategory) {
    try {
      const category = await Category.create(categoryBody);
      return category;
    } catch (error) {
      console.error("Error creating category:", error);
      throw new Error("Error creating category"); 
    }
  }

  async updateCategory(categoryId:string, videoBody:Partial<ICategory>){
    try {
      if(!Types.ObjectId.isValid(categoryId)){
        throw new Error("Invalid video ID");
      }
      const updatedCategory = await Category.findByIdAndUpdate(categoryId,videoBody,{new:true}).exec();
      if(!updatedCategory){
        return null;
      }
      return updatedCategory;
    } catch (error) {
      console.error("Error updating video:", error);
      throw new Error("Error updating video");
    }
  }

  async deleteCategory(categoryId:string){
    try {
      if(!Types.ObjectId.isValid(categoryId)){
        throw new Error("Invalid category ID")
      }
      const deletedCategory = await Category.findByIdAndDelete(categoryId).exec();
      if(!deletedCategory){
        return null;
      }
      return deletedCategory;
    } catch (error) {
      console.error("Error category video:", error);
      throw new Error("Error category video");
    }
  }
}


export default new categoryService();