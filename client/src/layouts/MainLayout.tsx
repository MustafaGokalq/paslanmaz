import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface IProps {
  children: ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className=" bg-gray-50 min-h-screen">
      <div className=" w-11/12 bg-white mx-auto min-h-screen flex flex-col gap-y-2">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
