import { AlertCircle, Plus } from "lucide-react";

const Claims = () => {
  return (
    <div className="space-y-6 " dir="rtl">
      {/* رأس الصفحة */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs text-gray-400 font-medium">Dashboard</span>
          <h1 className="text-2xl font-black text-brand-dark">Claims</h1>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 bg-[#2C4A3E] text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-brand-gold hover:text-brand-dark transition-colors shadow-sm"
        >
          <Plus size={16} />
          <span>Submit New Claim</span>
        </button>
      </div>

      {/* محتوى الشكاوى (الحالة الفارغة) */}
      <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm text-center space-y-4">
        <div className="w-14 h-14 bg-[#F8F1E7] text-brand-gold rounded-2xl flex items-center justify-center mx-auto border border-[#D9BD96]/30">
          <AlertCircle size={26} />
        </div>
        <div className="space-y-1">
          <h3 className="font-bold text-sm text-brand-dark">No Claims Found</h3>
          <p className="text-xs text-gray-400 max-w-sm mx-auto">
            You don't have any active claims or disputes right now. If you
            encounter any issues with your orders, you can submit a claim here.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-[#2C4A3E] hover:text-white transition-colors shadow-sm"
        >
          <Plus size={16} />
          <span>Create Claim</span>
        </button>
      </div>
    </div>
  );
};

export default Claims;
