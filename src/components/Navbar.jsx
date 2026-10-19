import {
  Search,
  ShoppingCart,
  User,
  Menu,
  Phone,
  Headphones,
  Wallet,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full font-cairo bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      {/* 1. الشريط العلوي (Top Header) */}
      <div className="bg-brand-dark text-white text-xs py-2 px-4 md:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* الجانب الأيمن: الدولة وشعار الخدمة */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span className="text-sm">🇪🇬</span>
              <span>مصر</span>
              <ChevronDown size={14} className="mt-0.5" />
            </div>
            <span className="text-white/40">|</span>
            <span className="text-white/90">كل ما تحتاجه لمشروعك</span>
          </div>

          {/* الجانب الأيسر: الاتصال والدفع والخدمات */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <Phone size={14} className="text-brand-gold" />
              <span dir="ltr" className="font-semibold">
                0100 123 4567
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <Headphones size={14} className="text-brand-gold" />
              <span>خدمة العملاء</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Wallet size={14} className="text-brand-gold" />
              <span>الدفع عند الاستلام</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. الشريط الرئيسي (Main Header) */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-3 flex items-center justify-between gap-4">
        {/* اللوجو */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-dark rounded-lg flex items-center justify-center text-brand-gold">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-black text-brand-dark tracking-wider">
              MARKETO
            </span>
            <span className="text-[9px] font-bold text-brand-gold uppercase tracking-widest">
              WHOLESALE GROCERY
            </span>
          </div>
        </div>

        {/* شريط البحث */}
        <div className="flex-1 max-w-2xl mx-4 relative hidden md:flex items-center">
          <div className="relative w-full flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="ابحث عن منتجات،علامات تجارية أو موردين..."
              className="w-full py-2.5 px-4 text-sm text-gray-800 outline-none bg-transparent placeholder-gray-400"
            />
            <div className="bg-brand-dark text-white p-3 flex items-center justify-center px-5">
              <Search size={18} />
            </div>
          </div>
        </div>

        {/* الأيقونات الشخصية (السلة والحساب) */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="relative bg-gray-100 p-2.5 rounded-full">
              <ShoppingCart size={22} className="text-brand-dark" />
              <span className="absolute -top-1 -right-1 bg-brand-gold text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </div>
            <div className="hidden lg:flex flex-col text-xs">
              <span className="text-gray-500">السلة</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-gray-100 p-2.5 rounded-full">
              <User size2={22} className="text-brand-dark" />
            </div>
            <div className="hidden lg:flex flex-col text-xs leading-tight">
              <span className="text-gray-500">تسجيل الدخول</span>
              <span className="font-bold text-brand-dark">حسابي</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. شريط الأقسام والروابط السفلي */}
      <div className="border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between">
          <div className="relative">
            <div className="bg-brand-dark text-white px-6 py-3 font-semibold text-sm flex items-center gap-3 rounded-t-lg shadow-md">
              <Menu size={18} />
              <span>جميع الأقسام</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700">
            <span className="text-brand-dark font-bold border-b-2 border-brand-dark py-3">
              الرئيسية
            </span>
            <span className="hover:text-brand-dark transition py-3 cursor-pointer">
              المنتجات
            </span>
            <span className="hover:text-brand-dark transition py-3 cursor-pointer">
              الموردين
            </span>
            <span className="hover:text-brand-dark transition py-3 cursor-pointer">
              العروض
            </span>
            <span className="hover:text-brand-dark transition py-3 cursor-pointer">
              الماركات
            </span>
            <span className="hover:text-brand-dark transition py-3 cursor-pointer">
              الجهات والمصانع
            </span>
            <span className="hover:text-brand-dark transition py-3 cursor-pointer">
              تواصل معنا
            </span>
          </nav>
        </div>
      </div>
    </header>
  );
}
