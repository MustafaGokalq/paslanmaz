import Product from "../models/productModel";
import IProduct from "../types/type";

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

  //create product
  async createProduct(productBody: IProduct) {
    try {
      // Ürün nesnesini oluştur
      const product = {
        name: productBody.name,
        description: productBody.description,
        price: productBody.price,
        imageUrl: productBody.imageUrl,
        stock: productBody.stock,
        isClick: productBody.isClick,
        isFlash: productBody.isFlash,
      };

      // Yeni ürünü oluştur
      const newProduct = await Product.create(product);

      // Başarıyla oluşturulan ürünü döndür
      return newProduct;
    } catch (error) {
      console.error("Error creating product:", error);
      throw new Error("Error creating product");
    }
  }

  //flash product
  async getIsFlashProducts() {
    try {
      // isFlash özelliği true olan ürünleri bul
      const isFlashProducts = await Product.find({ isFlash: true });

      // Ürün bulunamazsa null döndür
      if (isFlashProducts.length === 0) return null;

      // Bulunan ürünleri döndür
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
        console.error('Error fetching most clicked product:', error);
        throw new Error('Error fetching most clicked product');
    }
}

}
