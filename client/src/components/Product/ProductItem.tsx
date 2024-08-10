import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IProduct } from '../../types/types';
import { formatPrice } from '../Helpers/functions';


interface IProps {
    product: IProduct
}

const ProductItem: React.FC<IProps> = ({product}) => {
    console.log(product, "PRODUCT");

    const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-between rounded-xl relative w-full h-[466px] p-2'>
        <div className=' !h-[368px] border  border-black rounded-2xl bg-secondary p-1 '>
            <img src={product.imageUrl} alt={product.name} className=' h-full w-full rounded-xl'/>
        </div>

        <div>
            <p className=' font-light text-sm text-start'>
                {product.name}
            </p>
        </div>

        <div className=' flex justify-end pr-4'>
            <button onClick={() => navigate(`/ürünDetay/${product._id}`)} className='  text-darkDanger font-semibold'>Devamı</button>
        </div>

        <div className=' z-10 absolute -top-3 font-bold -right-4 bg-darkDanger text-white font-gemunu p-2 rounded-lg'>
            <span>{formatPrice(product.price)}</span>
        </div>
    </div>
  )
}

export default ProductItem