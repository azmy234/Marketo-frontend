import { RotateCcw, Plus } from "lucide-react";

const Refunds = () => {
  // بيانات تجريبية لطلبات الاسترداد (يمكن ربطها بالـ API لاحقاً)
  const refundsList = [];

  return (
    <div className="space-y-6" dir="rtl">
      {/* رأس الصفحة */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs text-gray-400 font-medium">Dashboard</span>
          <h1 className="text-2xl font-black text-brand-dark">Refunds</h1>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 bg-[#2C4A3E] text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-brand-gold hover:text-brand-dark transition-colors shadow-sm"
        >
          <Plus size={16} />
          <span>Request Refund</span>
        </button>
      </div>

      {/* محتوى الصفحة (الحالة الفارغة أو القائمة) */}
      {refundsList.length > 0 ? (
        <div className="space-y-4">{/* سيتم عرض قائمة الاستردادات هنا */}</div>
      ) : (
        <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm text-center space-y-4">
          <div className="w-14 h-14 bg-[#F8F1E7] text-brand-gold rounded-2xl flex items-center justify-center mx-auto border border-[#D9BD96]/30">
            <RotateCcw size={26} />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-sm text-brand-dark">
              No Refund Requests
            </h3>
            <p className="text-xs text-gray-400 max-w-sm mx-auto">
              You don't have any refund requests at the moment. If you need to
              return any items or request a refund, you can submit a request
              here.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-[#2C4A3E] hover:text-white transition-colors shadow-sm"
          >
            <Plus size={16} />
            <span>New Refund Request</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Refunds;
