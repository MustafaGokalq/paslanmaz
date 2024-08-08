import React from 'react'
import ProductItem from './ProductItem'


const Products: React.FC = () => {
  return (
    <div className=' grid grid-cols-2 md:grid-cols-5 gap-x-5 gap-y-5 md:gap-y-0 relative'>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  )
}

export default Products