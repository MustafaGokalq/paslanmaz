import React from 'react'
import ProductItem from './ProductItem'
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";



const Products: React.FC = () => {
  return (
    <div className=' grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-5 md:gap-y-0 relative'>
      <ProductItem />
      <ProductItem />
      <ProductItem />

      <div className=' absolute top-1/2 hidden md:flex justify-between w-full text-3xl text-darkDanger' >
        <FaChevronCircleLeft className='cursor-pointer'/>
        <FaChevronCircleRight className='cursor-pointer '/>
      </div>
    </div>
  )
}

export default Products