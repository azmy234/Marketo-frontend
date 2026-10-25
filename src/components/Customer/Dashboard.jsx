import { Link } from "react-router-dom";
import {
  Package,
  Heart,
  MapPin,
  KeyRound,
  Mail,
  ArrowRight,
  ChevronLeft,
} from "lucide-react";

const Dashboard = () => {
  // بيانات وهمية متوافقة مع التصميم وسياق المستخدم
  const userData = {
    name: "Ahmad Azmy",
    email: "ahmadazmy2025@gmail.com",
    totalOrders: 1,
    FavoriteCount: 0,
  };

  const recentOrders = [
    {
      id: "ORD-20261014-0001",
      date: "Oct 14, 2026",
      total: 0.0,
      status: "قيد المراجعة",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Breadcrumb / Title */}
      <div className="space-y-1">
        <span className="text-xs text-gray-400 font-medium">Dashboard</span>
        <h1 className="text-2xl font-black text-brand-dark">
          Account Overview
        </h1>
      </div>

      {/* Top 3 Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* User Profile Card */}
        <div className="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-[#F8F1E7] rounded-2xl flex items-center justify-center text-brand-dark font-black text-lg border border-[#D9BD96]/30 shrink-0">
            {userData.name.charAt(0)}
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-sm text-brand-dark truncate">
              {userData.name}
            </h3>
            <p className="text-[11px] text-gray-400 truncate">
              {userData.email}
            </p>
          </div>
        </div>

        {/* Total Orders Card */}
        <div className="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-[#F8F1E7] rounded-2xl flex items-center justify-center text-brand-gold shrink-0 border border-[#D9BD96]/30">
            <Package size={22} />
          </div>
          <div>
            <span className="text-xl font-black text-brand-dark block leading-none">
              {userData.totalOrders}
            </span>
            <span className="text-[11px] text-gray-400 mt-1 block">
              Total Orders[cite: 1]
            </span>
          </div>
        </div>

        {/* Favorite Items Card */}
        <div className="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-[#F8F1E7] rounded-2xl flex items-center justify-center text-brand-gold shrink-0 border border-[#D9BD96]/30">
            <Heart size={22} />
          </div>
          <div>
            <span className="text-xl font-black text-brand-dark block leading-none">
              {userData.FavoriteCount}
            </span>
            <span className="text-[11px] text-gray-400 mt-1 block">
              Favorite Items[cite: 1]
            </span>
          </div>
        </div>
      </div>

      {/* Shipping Address Notice Card */}
      <div className="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#F8F1E7] rounded-xl flex items-center justify-center text-brand-gold shrink-0">
            <MapPin size={18} />
          </div>
          <p className="text-xs text-gray-600 font-semibold">
            Add a shipping address to get started.[cite: 1]
          </p>
        </div>
        <button
          type="button"
          onClick={() => alert("فتح نافذة إضافة العنوان")}
          className="bg-[#2C4A3E] text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-brand-gold hover:text-brand-dark transition-colors shadow-sm shrink-0 cursor-pointer"
        >
          Add Address
        </button>
      </div>

      {/* My Favorite Section */}
      <div className="space-y-3">
        <h3 className="text-base font-black text-brand-dark">My Favorite</h3>
        <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#F8F1E7] rounded-2xl flex items-center justify-center text-brand-gold shrink-0">
              <Package size={22} />
            </div>
            <div>
              <h4 className="font-bold text-xs text-brand-dark">
                Your Favorite is empty[cite: 1]
              </h4>
              <p className="text-[11px] text-gray-400 mt-0.5">
                Save your favorite products for later.[cite: 1]
              </p>
            </div>
          </div>
          <ChevronLeft size={18} className="text-gray-400" />
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-black text-brand-dark">
            Recent Activity
          </h3>
          <Link
            to="/CustomerPage/orders"
            className="inline-flex items-center gap-1.5 bg-[#2C4A3E] text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-brand-gold hover:text-brand-dark transition-colors shadow-sm"
          >
            <span>View All Orders</span>
            <ArrowRight size={14} className="rotate-180" />
          </Link>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm space-y-4">
          {recentOrders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between text-xs"
            >
              <div className="space-y-1">
                <span className="font-bold text-brand-dark block">
                  {order.id}[cite: 1]
                </span>
                <span className="text-[11px] text-gray-400 block">
                  {order.date}[cite: 1]
                </span>
              </div>
              <div className="text-right space-y-1">
                <span className="font-black text-brand-dark block">
                  £E {order.total.toFixed(2)}[cite: 1]
                </span>
                <span className="text-brand-gold font-bold hover:underline inline-flex items-center gap-1 text-[11px] cursor-pointer">
                  <span>View Order</span>
                  <ArrowRight size={12} className="rotate-180" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions Section */}
      <div className="space-y-3">
        <h3 className="text-base font-black text-brand-dark">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-3xl border border-gray-100 p-4 shadow-sm flex items-center gap-3 cursor-pointer hover:border-brand-gold transition-colors">
            <div className="w-10 h-10 bg-[#F8F1E7] rounded-xl flex items-center justify-center text-brand-gold shrink-0">
              <KeyRound size={18} />
            </div>
            <span className="text-xs font-bold text-brand-dark">
              Change Password
            </span>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 p-4 shadow-sm flex items-center gap-3 cursor-pointer hover:border-brand-gold transition-colors">
            <div className="w-10 h-10 bg-[#F8F1E7] rounded-xl flex items-center justify-center text-brand-gold shrink-0">
              <Mail size={18} />
            </div>
            <span className="text-xs font-bold text-brand-dark">
              Change Email
            </span>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 p-4 shadow-sm flex items-center gap-3 cursor-pointer hover:border-brand-gold transition-colors">
            <div className="w-10 h-10 bg-[#F8F1E7] rounded-xl flex items-center justify-center text-brand-gold shrink-0">
              <MapPin size={18} />
            </div>
            <span className="text-xs font-bold text-brand-dark">
              My Addresses
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
