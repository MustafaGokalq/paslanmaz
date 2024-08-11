import React from "react";
import MainSlider from "../components/Slider/MainSlider";
import Categories from "../components/Category/Categories";
import Products from "../components/Product/Products";
import ProductWithVideo from "../components/Product/ProductWithVideo";


const HomePage: React.FC = () => {
  return (
    <div className=" flex flex-col gap-y-5">
        <div className=" flex flex-col md:flex-row gap-y-10 md:gap-y-0 gap-x-5">
          <div className=" w-full md:flex-1">
            <MainSlider />
          </div>

          <div className=" w-full md:flex-[2]">
              <Categories />
              <div className=" w-full border border-darkDanger my-3"></div>
              <Categories />
          </div>
        </div>

        <div>
          <ProductWithVideo />
        </div>

        <div className=" w-full border border-darkDanger my-3"></div>


        <div>
          <Products />
          <div className=" w-full flex justify-center items-center mt-2">
            <button className=" bg-darkDanger text-white p-1 text-sm rounded-xl">Daha Fazla Gör</button>
          </div>
        </div>

        <div className=" w-full border border-darkDanger my-3"></div>


        <div>
          <Products />
          <div className=" w-full flex justify-center items-center mt-2">
            <button className=" bg-darkDanger text-white p-1 text-sm rounded-xl">Daha Fazla Gör</button>
          </div>
        </div>

        <div className=" w-full border border-darkDanger my-3"></div>

    </div>
  );
};

export default HomePage;
