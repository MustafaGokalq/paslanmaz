import "./App.css";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/AdminPage";
import AdminLoginPage from "./pages/LoginPage";
import AdminRegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/anasayfa" element={<HomePage />} />
            <Route path="/ürünler" element={<ProductPage />} />
            <Route path="/ürünDetay/:id" element={<ProductDetail />} />
            <Route path="/iletişim" element={<ContactPage />} />
            <Route path="/admin" element={<AdminPage/>}/>
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin/register" element={<AdminRegisterPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
