import React from "react";

interface IProps {
  item: {
    img: string;
    name: string;
  };
}

const CategoryItem: React.FC<IProps> = ({ item }) => {
  return (
    <>
      <div className=" relative h-[120px] rounded-xl border border-black bg-secondary shadow stroke-black">
        <div className=" flex justify-center items-center h-full ">
          <img src={item.img} alt={item.name} />
        </div>
      </div>
      <div className=" bg-darkSecondary text-white font-bold mt-4 rounded-xl border border-black flex justify-center items-center w-full">
        <p>{item.name}</p>
      </div>
    </>
  );
};

export default CategoryItem;
