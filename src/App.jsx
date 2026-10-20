import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import ForgotPassword from "./components/Auth/ForgotPassword";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
} // مكون فرعي للتحكم في إظهار أو إخفاء النافبار والفوتر حسب المسار الحالي
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
      <ScrollToTop />
      {/* يظهر النافبار فقط في غير صفحات المصادقة */}
      {!isAuthPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>

      {/* يظهر الفوتر فقط في غير صفحات المصادقة */}
      {!isAuthPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
