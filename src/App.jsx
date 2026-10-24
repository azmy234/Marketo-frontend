import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer";

import ProductsPage from "./components/Pages/ProductsPage";
import VendorsPage from "./components/Pages/VendorsPage";
import OffersPage from "./components/Pages/OffersPage";
import BrandsPage from "./components/Pages/BrandsPage";
import EntitiesFactoriesPage from "./components/Pages/EntitiesFactoriesPage";
import ContactUsPage from "./components/Pages/ContactUsPage";
import CheckOutPage from "./components/Pages/CheckOutPage";

import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import ForgotPassword from "./components/Auth/ForgotPassword";

import ProductDetails from "./components/Products/ProductDetails";

import ScrollToTop from "./components/Common/ScrollToTop";
import CartPage from "./components/Pages/CartPage";

// مكون فرعي للتحكم في إظهار أو إخفاء النافبار والفوتر حسب المسار الحالي
function AppContent() {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();

  // فحص ما إذا كنا في صفحات الـ Auth لإخفاء الهيدر والفوتر
  const isAuthPage =
    currentPath === "/login" ||
    currentPath === "/signup" ||
    currentPath === "/forgotpassword";

  return (
    <div className="min-h-screen bg-brand-bg font-cairo text-right" dir="rtl">
      {/* يظهر النافبار فقط في غير صفحات المصادقة */}
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/ProductsPage" element={<ProductsPage />} />
        <Route path="/VendorsPage" element={<VendorsPage />} />
        <Route path="/OffersPage" element={<OffersPage />} />
        <Route path="/BrandsPage" element={<BrandsPage />} />
        <Route
          path="/EntitiesFactoriesPage"
          element={<EntitiesFactoriesPage />}
        />
        <Route path="/ContactUsPage" element={<ContactUsPage />} />
        <Route path="/CheckOutPage" element={<CheckOutPage />} />
        <Route path="/CartPage" element={<CartPage />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
      </Routes>
      {/* يظهر الفوتر فقط في غير صفحات المصادقة */}
      {!isAuthPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
