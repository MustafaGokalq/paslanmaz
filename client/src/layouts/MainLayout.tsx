import React, { ReactNode } from "react";
import { useLocation } from "react-router-dom"; // useLocation'u ekliyoruz
import Navbar from "./Navbar";
import Footer from "./Footer";

interface IProps {
  children: ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  const location = useLocation(); // Şu anki route'u almak için kullanıyoruz

  // Eğer "/admin" rotasındaysak, navbar ve footer'ı gizle
  const hideNavbarFooter = location.pathname === "/admin";

  return (
    <div className="min-h-screen">
      <div className="w-11/12 bg-white mx-auto min-h-screen flex flex-col gap-y-2">
        {!hideNavbarFooter && <Navbar />} {/* Eğer hideNavbarFooter false ise Navbar'ı göster */}
        {children}
        {!hideNavbarFooter && <Footer />} {/* Eğer hideNavbarFooter false ise Footer'ı göster */}
      </div>
    </div>
  );
};

export default MainLayout;
