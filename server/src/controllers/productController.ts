import { Request, Response } from "express";
import productService from "../services/productService";
import { ObjectId } from "mongoose";

class ProductController {
  async getProductsWithVideo(req: Request, res: Response) {
    try {
      const { categoryId } = req.params;
      const products = await productService.getProductsWithVideo(categoryId);
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Videolu ürünler getirilemedi" });
    }
  }

  async getProductsWithoutVideo(req: Request, res: Response) {
    try {
      const { categoryId } = req.params;
      const products = await productService.getProductsWithoutVideo(categoryId);
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Videosuz ürünler getirilemedi" });
    }
  }

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
      const { role, _id } = req.user!;
  
      if (role !== "superAdmin" && role !== "admin") {
        return res.status(403).json({
          success: false,
          message: "Bu işlemi gerçekleştirme yetkiniz yok",
        });
      }

      const product = await productService.createProduct(req.body, _id as ObjectId); // _id'yi ekleyin
  
      if (!product) {
        return res.status(400).json({
          success: false,
          message: "Ürün oluşturulurken hata oluştu",
        });
      }
      return res.status(201).json({
        success: true,
        product,
      });
    } catch (error) {
      console.error("Ürün oluşturulurken hata oluştu:", error);
      return res.status(500).json({
        success: false,
        message: "Sunucu hatası",
        error:" error.message"|| error,
      });
    }
  }
  

  async updateProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { role, _id } = req.user!;

      if (!id) {
        return res.status(400).json({
          success: false,
          message: "Product ID is required",
        });
      }

      const product = await productService.getProductById(id);

      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Product Not Found",
        });
      }

      if (role === "superAdmin") {
        const updatedProduct = await productService.updateProduct(id, req.body);
        return res.status(200).json({
          success: true,
          updatedProduct,
        });
      }

      if (product.createdBy.toString() !== _id.toString()) {
        return res.status(403).json({
          success: false,
          message: "Bu ürünü düzenleme yetkiniz yok",
        });
      }

      const updatedProduct = await productService.updateProduct(id, req.body);

      return res.status(200).json({
        success: true,
        updatedProduct,
      });
    } catch (error) {
      console.error("Error updating product:", error);
      return res.status(500).json({
        success: false,
        message: "Server Error",
      });
    }
  }


  async deleteProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { role, _id } = req.user!;
  
      if (!id) {
        return res.status(400).json({
          success: false,
          message: "Ürün ID'si gerekli",
        });
      }
  
      const product = await productService.getProductById(id);
  
      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Ürün bulunamadı",
        });
      }
  
      if (role === "superAdmin") {
        // SuperAdmin her ürünü silebilir
        const deletedProduct = await productService.deleteProduct(id);
        return res.status(200).json({
          success: true,
          message: "Ürün başarıyla silindi",
          deletedProduct,
        });
      }
  
      if (product.createdBy.toString() !== _id.toString()) {
        // Admin sadece kendi ürünlerini silebilir
        return res.status(403).json({
          success: false,
          message: "Bu ürünü silme yetkiniz yok",
        });
      }
  
      const deletedProduct = await productService.deleteProduct(id);
  
      return res.status(200).json({
        success: true,
        message: "Ürün başarıyla silindi",
        deletedProduct,
      });
    } catch (error) {
      console.error("Ürün silme hatası:", error);
      return res.status(500).json({
        success: false,
        message: "İç Sunucu Hatası",
      });
    }
  }
  
  //product category
  async getProductsByCategory(req: Request, res: Response) {
    try {
      const { categoryId } = req.params;
      const products = await productService.getProductsByCategory(categoryId);
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Ürünler getirilemedi" });
    }
  }

  async purchase(req: Request, res: Response): Promise<void> {
    try {
      const { productId } = req.body;
      await productService.purchaseProduct(productId);
      res.status(200).json({ message: "Purchase request sent to admin" });
    } catch (error) {
      res.status(400).json({ message: "Purchase Error" });
    }
  }
}

export default new ProductController();
