import React from "react";
import ProductHead from "../components/Product/ProductHead";
import Products from "../components/Product/Products";

const ProductPage: React.FC = () => {
  return (
    <div>
      <div>
        <ProductHead />
      </div>

      <Products />
    </div>
  );
};

export default ProductPage;
