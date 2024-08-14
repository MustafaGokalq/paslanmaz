import React from "react";

interface IProps {
  category: {
    image: string;
    name: string;
  };
}

const CategoryItem: React.FC<IProps> = ({ category }) => {
  return (
    <>
      <div className=" relative h-[120px] rounded-xl border border-black bg-secondary shadow stroke-black">
        <div className=" flex justify-center items-center h-full ">
          <img src={category.image} alt={category.name} />
        </div>
      </div>
      <div className=" bg-darkSecondary text-white font-bold mt-4 rounded-xl border border-black flex justify-center items-center w-full">
        <p>{category.name}</p>
      </div>
    </>
  );
};

export default CategoryItem;
