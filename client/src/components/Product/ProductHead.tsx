import React, { useState } from "react";
import './scroll.css';
import { useGetAllCategoriesQuery } from "../../redux/services/categoryApi";
import { ICategory, IProduct } from "../../types/types";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { useGetAllProductsQuery } from "../../redux/services/productApi";
import { Link } from "react-router-dom";



const ProductHead: React.FC = () => {
  const {data: categoryData} = useGetAllCategoriesQuery();
  const {data: productData} = useGetAllProductsQuery();

  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  console.log(productData);


  // CLICK CATEGORY 
  const handleClickCategory = (category: ICategory) : void => {
    setSelectedCategory(category);
  }

  // CLIC KPRODUCT
  const handleClickProduct = (product: IProduct) => {
    setSelectedProduct(product);
  }

  return (
    <>
      <div className=" flex items-center justify-center w-full mb-4 gap-x-5 custom-scrollbar">
        {/* CATEGORİES */}
        <div className=" flex-1 border h-[472px] rounded-xl shadow-lg overflow-y-scroll bg-secondary flex flex-col gap-y-2 items-start " >
            <div className=" p-2">
              <h3 className=" font-bold text-darkDanger text-lg">KATEGORİLER</h3>
            </div>
            <div className=" h-[600px] w-full flex flex-col gap-y-1">
              {
                categoryData?.categories.map((category: ICategory) => (
                  <div key={category._id} className={`${selectedCategory?._id === category._id ? ('bg-darkDanger text-white') : (' bg-transparent')} 'w-full px-2 hover:bg-darkDanger cursor-pointer hover:text-white transition-all'`}>
                      <div onClick={() => handleClickCategory(category)} className=" flex justify-between items-center">
                        <p className=" font-semibold">{category.name}</p>
                        {
                          selectedCategory?._id === category._id ? (<FaChevronLeft />) : (<FaChevronRight />)
                        }
                        
                      </div>
                  </div>
                ))
              }
            </div>
        </div>

        {/* PRODUCTS */}
        <div className=" flex-1 border h-[472px] rounded-xl shadow-lg bg-secondary">
          <div>
            <h3 className=" p-2 font-bold text-lg text-darkDanger">ÜRÜNLER</h3>
          </div>

          <div>
            {
              productData?.products.map((product: IProduct) => (
                <div key={product._id} className={`${selectedProduct?._id === product._id ? ('bg-darkDanger text-white') : (' bg-transparent')} 'w-full px-2 hover:bg-darkDanger cursor-pointer hover:text-white transition-all'`}>
                      <div onClick={() => handleClickProduct(product)} className=" flex justify-between items-center">
                        <p className=" font-semibold">{product.name}</p>
                        {
                          selectedProduct?._id === product._id ? (<FaChevronLeft />) : (<FaChevronRight />)
                        }
                        
                      </div>
                  </div>
              ))
            }
          </div>
        </div>

        {/* IMAGE */}
        <div className=" flex-1 border h-[472px] rounded-xl shadow-lg bg-secondary">
          <div>
            <h3 className=" p-2 font-bold text-darkDanger text-lg">ÜRÜN RESMİ</h3>
          </div>

          <div>
            {
              productData?.products.map((product: IProduct) => (
                <div key={product._id} className=" h-full  ">
                  <div className=" w-full h-full flex-col flex "  >
                        <div className=" flex justify-between items-center px-2">
                          {
                            selectedProduct?.imageUrl === product.imageUrl &&  (
                              <div>
                                 <img className=" rounded-xl shadow-lg" src={selectedProduct?.imageUrl === product.imageUrl ? product.imageUrl : ''} alt={product.name} />
                                 <div className=" flex justify-center p-4">
                                    <Link to={`/ürünDetay/${product._id}`} className=" bg-darkSecondary text-white p-1 hover:bg-darkDanger transition-all w-1/3 text-center rounded">ürüne git</Link>
                                  </div>
                              </div>
                            )
                          }
                        </div>
                    </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className=" border-b-2 w-full border-darkDanger mb-4 "></div>
    </>
  );
};

export default ProductHead;
