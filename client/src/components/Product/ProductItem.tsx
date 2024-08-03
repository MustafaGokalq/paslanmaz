import React from 'react'

const ProductItem: React.FC = () => {
  return (
    <div className='border shadow-lg flex flex-col justify-between rounded-lg relative'>
        <div>
            <img src="https://s3-alpha-sig.figma.com/img/07f2/c3de/a11a5361956df6778ae2a270fa512eda?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CKDuJ8MdmLy3ybnUC8vzK4vpd-3PbM6M~dRi27cuYT1H664R04KOg~dcfISJZlX48c02RfaS5IUwvQZ3tPsTdM70-5Wm7NqQijT5e5iTyhSASoQOEfoLYiHCwOfuJBsAjNpfVTIRcgxDCK3KLq~V6bwOaltLj3ZvLRr6BTRfYM4h4ETIJAkqAS4wkQVPuFZ8myfKHHctwO-BM6DiIuNjIE3C~jfRZiiRYfc6Wiai5L7KnDuBOUDqLMuA1ehe3MUNJsZWfELoX-o~u5pv~bjueZIsfEu~vdd1hdykWWpTPA1AKUlUkC3dJSPiLS8Ga-giCRodtuJBT6AQnKADXkDEkw__" alt="" />
        </div>

        <div>
            <p className=' font-light text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates similique accusamus aspernatur, nulla incidunt? Pariatur molestiae illum tempore veritatis laboriosam veniam id sequi quaerat aut non, labore amet reprehenderit!
            </p>
        </div>

        <div className=' flex justify-end pr-4'>
            <button className='  text-darkDanger font-semibold'>Devamı</button>
        </div>

        <div className=' absolute -top-3 font-bold -right-4 bg-darkDanger text-white font-gemunu p-2 rounded-lg'>
            <span>₺17999</span>
        </div>
    </div>
  )
}

export default ProductItem