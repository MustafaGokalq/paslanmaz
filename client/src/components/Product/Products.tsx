import React from 'react'
import ProductItem from './ProductItem'
import { useGetAllProductsQuery } from '../../redux/services/productApi'
import Loading from '../Helpers/Loading';
import { IProduct } from '../../types/types';


const Products: React.FC = () => {
  const {data: productData, isLoading} = useGetAllProductsQuery();

  let content; 

  if(isLoading) {
    content = (
      <div className=' w-full h-full flex justify-center'>
        <Loading />
      </div>
    )
  }else {
    content = (
      <div>
        {
          productData?.products.map((product: IProduct) => (
            <div key={product._id}>
                <ProductItem product={product}/>
            </div>
          ))
        }
      </div>
    )
  }

  return (
    <div className=' grid grid-cols-2 md:grid-cols-5 gap-x-5 gap-y-5 md:gap-y-0 relative'>
      {
        content
      }
    </div>
  )
}

export default Products