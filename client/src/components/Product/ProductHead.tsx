import React from "react";
import './scroll.css';

const ProductHead: React.FC = () => {
  return (
    <>
      <div className=" flex items-center justify-center w-full mb-4 gap-x-5 custom-scrollbar">
        {/* CATEGORİES */}
        <div className=" flex-1 border h-[472px] rounded-xl shadow-lg overflow-y-scroll bg-secondary " >
            <div className=" h-[600px]">categories</div>
        </div>

        {/* PRODUCTS */}
        <div className=" flex-1 border h-[472px] rounded-xl shadow-lg bg-secondary">Products</div>

        {/* IMAGE */}
        <div className=" flex-1 border h-[472px] rounded-xl shadow-lg bg-secondary">image</div>
      </div>
      <div className=" border-b-2 w-full border-darkDanger mb-4 "></div>
    </>
  );
};

export default ProductHead;
