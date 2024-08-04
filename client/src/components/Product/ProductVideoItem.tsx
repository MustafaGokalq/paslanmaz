import React from 'react'
import { IoMdVideocam } from "react-icons/io";

interface IProps {
    item: {
        img: string,
        title: string,
        desc: string
    }
}


const ProductVideoItem: React.FC<IProps> = ({item}) => {
  return (
    <div className='relative h-[150px] flex flex-col'>
        <div className=' flex h-full  flex-col  w-full border-2 border-black rounded-xl justify-center items-center bg-secondary'>
            <div className=' flex w-full justify-between items-center px-4'>
                <h2 className=' text-lg font-semibold'>{item.title}</h2>
                <div>
                    <IoMdVideocam size={30} className=' text-darkDanger cursor-pointer hover:scale-110 transition-all'/>
                </div>   
            </div>

            <div className='w-[150px] h-[91px]'>
                <img src={item.img} alt="" className=' w-full h-full'/>
            </div>   
        </div>

        <div className=' w-full flex justify-center items-center'>
            <div className=' border-2 w-3/4 right-10 max-h-[90px] border-black bg-opacity-90 rounded-xl bg-darkSecondary text-white text-sm absolute -bottom-12 flex items-end flex-col'>
                <p>{item.desc}</p>
                <button className=' text-darkDanger font-semibold px-2 text-md'>Devamı</button>
            </div>
        </div>
       
    </div>
  )
}

export default ProductVideoItem