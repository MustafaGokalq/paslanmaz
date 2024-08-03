import React from "react";
import Categories from "../components/Category/Categories";
import MainSlider from "../components/Slider/MainSlider";
import Products from "../components/Product/Products";
import HeroSections1 from "../components/HeroSections/HeroSections1";

const HomePage: React.FC = () => {
  return (
    <div className=" flex flex-col gap-y-5">
      <div className=" flex">
        <div className=" hidden md:block flex-1">
          <Categories />
        </div>

        <div className=" flex-[4]">
          <MainSlider />
        </div>
      </div>

      <div>
        <Products />
      </div>

      <div>
        <HeroSections1 />
      </div>
    </div>
  );
};

export default HomePage;
