import React from 'react'
import { FaChevronRight } from "react-icons/fa";


const CategoryItem: React.FC = () => {
  return (
    <div className=' flex w-full'>
        <div className='p-2 w-full hover:bg-darkDanger hover:text-white transition-all cursor-pointer flex justify-between items-center '>
            <p>Paslanmaz Çelik</p>
            <span>
                <FaChevronRight />
            </span>
        </div>
    </div>
  )
}

export default CategoryItem