import React from "react";
import Categories from "../components/Category/Categories";
import MainSlider from "../components/Slider/MainSlider";
import Products from "../components/Product/Products";

const HomePage: React.FC = () => {
  return (
    <div>
      <div className=" flex">
        <div className=" flex-1">
          <Categories />
        </div>

        <div className=" flex-[3]">
          <MainSlider />
        </div>
      </div>

      <div>
        <Products />
      </div>
    </div>
  );
};

export default HomePage;
