import React from 'react'
import CategoryItem from './CategoryItem'

const Categories: React.FC = () => {
  return (
    <div className=' flex flex-col h-[200px] rounded-lg'>
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
    </div>
  )
}

export default Categories