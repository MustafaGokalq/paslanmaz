import { Request, Response } from "express";
import categoryService from "../services/categoryService";

class CategoryController {
  async getAllCategories(req: Request, res: Response) {
    try {
      const categories = await categoryService.getAllCategories();

      if (!categories || categories.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Categories not found",
        });
      }

      return res.status(200).json({
        success: true,
        categories,
      });
    } catch (error) {
      console.error("Error fetching categories:", error);
      return res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  }

  async getSingleCategory(req: Request, res: Response) {
    try {
      const { id } = req.params;
  
      // ID'nin mevcut olup olmadığını kontrol edin
      if (!id) {
        return res.status(400).json({
          success: false,
          message: "Category ID is required",
        });
      }
  
      const category = await categoryService.getCategoryById(id);
  
      if (!category) {
        return res.status(404).json({
          success: false,
          message: "Category not found",
        });
      }
  
      return res.status(200).json({
        success: true,
        category,
      });
    } catch (error) {
      console.error("Error fetching category:", error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }

  async createCategory(req: Request, res: Response) {
    try {
      const category = await categoryService.createCategory(req.body);

      return res.status(201).json({
        success: true,
        category,
      });
    } catch (error) {
      console.error("Error creating category:", error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }

  async updateCategory(req:Request, res:Response){
    try {
      const {id} = req.params;
    if(!id){
      return res.status(400).json({
        success:false,
        message:"Category ID is required"
      })
    }
    const updatedCategory = await categoryService.updateCategory(id,req.body);
    if(!updatedCategory){
      return res.status(404).json({
        success:false,
        message:"Category Not Found"
      })
    }
    return res.status(200).json({
      success:true,
      updatedCategory
    })
    } catch (error) {
      return res.status(500).json({
        success:false,
        message:"Video not found"
      })
    }
    

  }

  async deleteCategory(req:Request, res:Response){
    try {
      const {id} = req.params;
      if(!id){
        return res.status(400).json({
          success:false,
          message:"Category ID is required"
        })
      }
      const deletedCategory = await categoryService.deleteCategory(id);
      if(!deletedCategory){
        return res.status(404).json({
          success:false,
          message:"Category not Found"
        })
      }
      return res.status(200).json({
        success:true,
        message:"Video deleted successfully"
      })
    } catch (error) {
      console.error("Error deleting video:", error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }
}



export default new CategoryController();