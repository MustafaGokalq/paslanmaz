import React from 'react';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

function MainContent() {
  return (
    <main className="flex-1 p-4">
      <ProductList />
      <ProductDetails />
    </main>
  );
}

export default MainContent;
