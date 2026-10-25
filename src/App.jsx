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
import CustomerPage from "./components/Pages/CustomerPage";
import Dashboard from "./components/Customer/Dashboard";
import Profile from "./components/Customer/Profile";
import Orders from "./components/Customer/Orders";
import ReturnsWallet from "./components/Customer/ReturnsWallet";
import Favorite from "./components/Customer/Favorite";
import Addresses from "./components/Customer/Addresses";
import Reviews from "./components/Customer/Reviews";
import Refunds from "./components/Customer/Refunds";
import Claims from "./components/Customer/Claims";

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

        <Route path="/CustomerPage" element={<CustomerPage />}>
          <Route path="Profile" element={<Profile />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Orders" element={<Orders />} />
          <Route path="ReturnsWallet" element={<ReturnsWallet />} />
          <Route path="Favorite" element={<Favorite />} />
          <Route path="Addresses" element={<Addresses />} />
          <Route path="Reviews" element={<Reviews />} />
          <Route path="Refunds" element={<Refunds />} />
          <Route path="ReturnsWallet" element={<ReturnsWallet />} />
          <Route path="claims" element={<Claims />} />
        </Route>

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
