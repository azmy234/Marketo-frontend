import { useEffect, useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  Phone,
  Headphones,
  Wallet,
  ChevronDown,
  X,
} from "lucide-react";

export default function Navbar() {
  const [showHeader, setShowHeader] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        setShowHeader(true);
      } else if (currentScrollY < lastScrollY) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* 1. الشريط الأخضر العلوي (ثابت دائماً بأعلى الشاشة) */}
      <div className="fixed top-0 left-0 z-50 w-full bg-brand-dark text-white text-[11px] md:text-xs py-1.5 md:py-2 px-3 md:px-12 border-b border-white/10 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* الدولة ورسالة الخدمة */}
          <div className="flex items-center gap-2 md:gap-4">
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="text-xs md:text-sm">🇪🇬</span>
              <span className="font-medium">مصر</span>
              <ChevronDown size={12} className="mt-0.5" />
            </div>

            <span className="text-white/30">|</span>

            <span className="text-white/90 text-[10px] md:text-xs truncate">
              كل ما تحتاجه لمشروعك
            </span>
          </div>

          {/* التواصل والتطبيقات (مختصرة للموبايل) */}
          <div className="flex items-center gap-3 md:gap-6">
            <div className="flex items-center gap-1">
              <Phone size={13} className="text-brand-gold" />
              <span dir="ltr" className="font-semibold text-[10px] md:text-xs">
                0100 123 4567
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5">
              <Headphones size={13} className="text-brand-gold" />
              <span>خدمة العملاء</span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5">
              <Wallet size={13} className="text-brand-gold" />
              <span>الدفع عند الاستلام</span>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer لمنع اختفاء محتوى الصفحة خلف النافبار الثابت */}
      <div className="h-37 md:h-33.75" />

      {/* 2. باقي الهيدر المتحرك */}
      <header
        className={`fixed top-7.25 md:top-8.25 left-0 z-40 w-full font-cairo bg-white shadow-sm border-b border-gray-100 transition-transform duration-300 ease-in-out ${
          showHeader ? "translate-y-0" : "translate-y-[-200%]"
        }`}
      >
        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-3 md:px-12 py-2.5 md:py-3 flex items-center justify-between gap-2 md:gap-4">
          {/* Menu Icon for Mobile + Logo */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-1.5 rounded-lg text-brand-dark hover:bg-gray-100"
              aria-label="القائمة"
            >
              <Menu size={22} />
            </button>

            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-dark rounded-lg flex items-center justify-center text-brand-gold shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>

              <div className="flex flex-col leading-none">
                <span className="text-lg md:text-2xl font-black text-brand-dark tracking-wider">
                  MARKETO
                </span>
                <span className="text-[8px] md:text-[9px] font-bold text-brand-gold uppercase tracking-widest">
                  WHOLESALE GROCERY
                </span>
              </div>
            </a>
          </div>

          {/* Search Bar - Desktop */}
          <div className="flex-1 max-w-2xl mx-4 relative hidden md:flex items-center">
            <div className="relative w-full flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="ابحث عن منتجات، علامات تجارية أو موردين..."
                className="w-full py-2.5 px-4 text-sm text-gray-800 outline-none bg-transparent placeholder-gray-400"
              />
              <button
                type="button"
                aria-label="بحث"
                className="bg-brand-dark text-white p-3 flex items-center justify-center px-5 hover:bg-brand-gold transition-colors"
              >
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Cart and Account */}
          <div className="flex items-center gap-2 md:gap-6">
            <button
              type="button"
              aria-label="سلة المشتريات"
              className="flex items-center gap-2 p-1"
            >
              <div className="relative bg-gray-100 p-2 md:p-2.5 rounded-full">
                <ShoppingCart
                  size={20}
                  className="text-brand-dark md:w-5.5 md:h-5.5"
                />
                <span className="absolute -top-1 -right-1 bg-brand-gold text-white text-[10px] md:text-[11px] font-bold w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </div>
              <div className="hidden lg:flex flex-col text-xs">
                <span className="text-gray-500">السلة</span>
              </div>
            </button>

            <button
              type="button"
              aria-label="حسابي"
              className="flex items-center gap-2 p-1"
            >
              <div className="bg-gray-100 p-2 md:p-2.5 rounded-full">
                <User size={20} className="text-brand-dark md:w-5.5 md:h-5.5" />
              </div>
              <div className="hidden lg:flex flex-col text-xs leading-tight">
                <span className="text-gray-500">تسجيل الدخول</span>
                <span className="font-bold text-brand-dark">حسابي</span>
              </div>
            </button>
          </div>
        </div>

        {/* Search Bar - Mobile Version */}
        <div className="px-3 pb-2 md:hidden">
          <div className="relative w-full flex items-center border border-gray-200 bg-gray-50 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="ابحث عن منتجات، علامات تجارية..."
              className="w-full py-2 px-3 text-xs text-gray-800 outline-none bg-transparent placeholder-gray-400"
            />
            <button
              type="button"
              aria-label="بحث"
              className="bg-brand-dark text-white p-2.5 flex items-center justify-center hover:bg-brand-gold transition-colors"
            >
              <Search size={15} />
            </button>
          </div>
        </div>

        {/* Categories and Navigation - Desktop */}
        <div className="border-t border-gray-100 bg-white hidden md:block">
          <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between">
            <button
              type="button"
              className="bg-brand-dark text-white px-6 py-3 font-semibold text-sm flex items-center gap-3 rounded-t-lg shadow-md hover:bg-brand-gold transition-colors"
            >
              <Menu size={18} />
              <span>جميع الأقسام</span>
            </button>

            <nav className="flex items-center gap-8 text-sm font-semibold text-gray-700">
              <a
                href="/"
                className="text-brand-dark font-bold border-b-2 border-brand-dark py-3"
              >
                الرئيسية
              </a>
              <a
                href="/products"
                className="hover:text-brand-dark transition py-3"
              >
                المنتجات
              </a>
              <a
                href="/suppliers"
                className="hover:text-brand-dark transition py-3"
              >
                الموردين
              </a>
              <a
                href="/offers"
                className="hover:text-brand-dark transition py-3"
              >
                العروض
              </a>
              <a
                href="/brands"
                className="hover:text-brand-dark transition py-3"
              >
                الماركات
              </a>
              <a
                href="/factories"
                className="hover:text-brand-dark transition py-3"
              >
                الجهات والمصانع
              </a>
              <a
                href="/contact"
                className="hover:text-brand-dark transition py-3"
              >
                تواصل معنا
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* 3. Mobile Navigation Drawer / Slide Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Side Content */}
          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between z-10 font-cairo">
            <div>
              {/* Drawer Header */}
              <div className="p-4 bg-brand-dark text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-brand-gold/20 rounded flex items-center justify-center text-brand-gold">
                    <Menu size={18} />
                  </div>
                  <span className="font-bold text-sm">القائمة الرئيسية</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-full text-white/80 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col p-4 space-y-1 text-sm font-bold text-gray-700">
                <a
                  href="/"
                  className="p-2.5 rounded-lg bg-gray-100 text-brand-dark"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  الرئيسية
                </a>
                <a
                  href="/products"
                  className="p-2.5 rounded-lg hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  المنتجات
                </a>
                <a
                  href="/suppliers"
                  className="p-2.5 rounded-lg hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  الموردين
                </a>
                <a
                  href="/offers"
                  className="p-2.5 rounded-lg hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  العروض
                </a>
                <a
                  href="/brands"
                  className="p-2.5 rounded-lg hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  الماركات
                </a>
                <a
                  href="/factories"
                  className="p-2.5 rounded-lg hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  الجهات والمصانع
                </a>
                <a
                  href="/contact"
                  className="p-2.5 rounded-lg hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  تواصل معنا
                </a>
              </nav>
            </div>

            {/* Drawer Footer Services */}
            <div className="p-4 border-t border-gray-100 bg-gray-50 text-xs space-y-2 text-gray-600">
              <div className="flex items-center gap-2">
                <Headphones size={15} className="text-brand-gold" />
                <span>خدمة العملاء: 01001234567</span>
              </div>
              <div className="flex items-center gap-2">
                <Wallet size={15} className="text-brand-gold" />
                <span>الدفع عند الاستلام متاح</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
