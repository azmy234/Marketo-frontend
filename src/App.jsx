import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer";

import Products from "./components/Pages/Products";
import Vendors from "./components/Pages/Vendors";
import Offers from "./components/Pages/Offers";
import Brands from "./components/Pages/Brands";
import EntitiesFactories from "./components/Pages/EntitiesFactories";
import ContactUs from "./components/Pages/ContactUs";

import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import ForgotPassword from "./components/Auth/ForgotPassword";

import ProductDetails from "./components/Products/ProductDetails";

import ScrollToTop from "./components/Common/ScrollToTop";

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

        <Route path="/Products" element={<Products />} />
        <Route path="/Vendors" element={<Vendors />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/Brands" element={<Brands />} />
        <Route path="/EntitiesFactories" element={<EntitiesFactories />} />
        <Route path="/ContactUs" element={<ContactUs />} />

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
