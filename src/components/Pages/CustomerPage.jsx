import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  Package,
  Wallet,
  Heart,
  MapPin,
  Star,
  RotateCcw,
  AlertCircle,
} from "lucide-react";

const navItems = [
  { path: "Dashboard", label: "Dashboard", icon: LayoutDashboard },
  { path: "Profile", label: "Profile", icon: User },
  { path: "Orders", label: "Orders", icon: Package },
  { path: "ReturnsWallet", label: "Returns Wallet", icon: Wallet },
  { path: "Favorite", label: "Favorite", icon: Heart }, // تأكدنا من مطابقة الاسم هنا
  { path: "Addresses", label: "Addresses", icon: MapPin },
  { path: "Reviews", label: "Reviews", icon: Star },
  { path: "Refunds", label: "Refunds", icon: RotateCcw },
  { path: "Claims", label: "Claims", icon: AlertCircle },
];

const CustomerPage = () => {
  return (
    <div
      dir="ltr"
      className="w-full font-cairo bg-[#FBF9F5] min-h-[85vh] px-4 md:px-8 pb-5 py-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8 items-start">
        {/* الحاوية للقائمة الجانبية مع تأثير التدرج في الموبايل */}
        <div className="w-full md:w-72 bg-white rounded-3xl border border-gray-100 p-3 md:p-4 shadow-sm shrink-0 relative">
          {/* عنوان القائمة يظهر في الشاشات الكبيرة فقط */}
          <div className="hidden md:block px-3 py-2 text-[11px] font-extrabold text-gray-400 uppercase tracking-wider mb-2">
            MY ACCOUNT
          </div>

          {/* حاوية الـ Scroll مع تلميح بصري للأطراف في الموبايل */}
          <div className="relative">
            {/* تأثير ظل خفيف على اليمين يوضح وجود محتوى إضافي (يظهر في الموبايل فقط) */}
            <div className="absolute right-0 top-0 bottom-1 w-6 bg-linear-to-l from-white pointer-events-none md:hidden z-10"></div>

            <div className="flex md:flex-col overflow-x-auto gap-2 md:gap-1 no-scrollbar pb-2 md:pb-0 items-center md:items-stretch scroll-smooth">
              {navItems.map(({ path, label, icon: Icon, end }) => (
                <NavLink
                  key={path}
                  to={path}
                  end={end}
                  className={({ isActive }) =>
                    `flex items-center gap-2.5 md:gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap shrink-0 md:w-full ${
                      isActive
                        ? "bg-[#F8F1E7] text-brand-dark md:border-r-4 border-b-2 md:border-b-0 border-brand-gold shadow-xs"
                        : "text-gray-600 hover:bg-gray-50 hover:text-brand-dark"
                    }`
                  }
                >
                  <Icon size={17} className="text-brand-gold shrink-0" />
                  <span>{label}</span>
                </NavLink>
              ))}
            </div>
          </div>

          {/* نص إرشادي صغير جداً تحت القائمة للموبايل */}
          <div className="text-[10px] text-gray-400 text-center mt-1 md:hidden">
            ← Scroll to see more →
          </div>
        </div>

        {/* منطقة المحتوى المتغير (Outlet) */}
        <div className="flex-1 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CustomerPage;
