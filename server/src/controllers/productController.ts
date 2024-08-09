import { Request, Response } from "express";
import productService from "../services/productService";

class ProductController {
  //get all product
  async getAllProducts(req: Request, res: Response) {
    try {
      const products = await productService.getAllProducts();
      if (!products || products.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No products found",
        });
      }
      return res.status(200).json({
        success: true,
        products,
      });
    } catch (error) {
      console.error("Error fetching products:", error); // Hata loglama
      return res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  }

  async getProductById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          success: false,
          message: "Product Id is required",
        });
      }
      const product = await productService.getProductById(id);
      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Product Not Found",
        });
      }
      return res.status(200).json({
        success: true,
        product,
      });
    } catch (error) {
      console.error("Error fetching video:", error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }

  async createProduct(req: Request, res: Response) {
    try {
      const product = await productService.createProduct(req.body);
      if (!product) {
        return res.status(400).json({
          success: false,
          message: "Error creating product",
        });
      }
      return res.status(201).json({
        success: true,
        product,
      });
    } catch (error) {
      console.error("Error creating product:", error); // Hata loglama
      return res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          success: false,
          message: "Product ID is Required",
        });
      }
      const updatedProduct = await productService.updateProduct(id, req.body);
      if (!updatedProduct) {
        return res.status(404).json({
          success: false,
          message: "Product Not Found",
        });
      }
      return res.status(200).json({
        success: true,
        updatedProduct,
      });
    } catch (error) {
      console.error("Error updating video:", error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }

  async deleteProduct(req: Request, res: Response) {
    try {
        const { id } = req.params;
        if (!id) {
          return res.status(400).json({
            success: false,
            message: "Producct ID is required",
          });
        }
  
        const deletedProduct = await productService.deleteProduct(id);
  
        if (!deletedProduct) {
          return res.status(404).json({
            success: false,
            message: "Product not found",
          });
        }
  
        return res.status(200).json({
          success: true,
          message: "Product deleted successfully",
        });
      } catch (error) {
        console.error("Error deleting product:", error);
        return res.status(500).json({
          success: false,
          message: "Internal Server Error",
        });
      }
  }

  async getIsFlashProducts(req: Request, res: Response) {
    try {
      const flashProducts = await productService.getIsFlashProducts();

      if (!flashProducts || flashProducts.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Flash products not found",
        });
      }
      return res.status(200).json({
        success: true,
        products: flashProducts,
      });
    } catch (error) {
      console.error("Error fetching flash products:", error); // Hata loglama
      return res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  }

  async getMostClickedProduct(req: Request, res: Response) {
    try {
      const mostClickedProduct = await productService.getMostClickedProduct();

      if (!mostClickedProduct) {
        return res.status(404).json({
          success: false,
          message: "Most clicked product not found",
        });
      }
      return res.status(200).json({
        success: true,
        product: mostClickedProduct,
      });
    } catch (error) {
      console.error("Error fetching most clicked product:", error); // Hata loglama
      return res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  }

  async purchase(req:Request, res:Response):Promise<void>{
    try {
      const {productId} = req.body;
      await productService.purchaseProduct(productId);
      res.status(200).json({message:"Purchase request sent to admin"})
    } catch (error) {
      res.status(400).json({ message: "Purchase Error"});
    }
  }
}

export default new ProductController();
