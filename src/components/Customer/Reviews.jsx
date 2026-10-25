import { Star, Plus } from "lucide-react";

const Reviews = () => {
  // بيانات تجريبية للتقييمات
  const reviewsList = [];

  return (
    <div className="space-y-6" dir="rtl">
      {/* رأس الصفحة */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs text-gray-400 font-medium">Dashboard</span>
          <h1 className="text-2xl font-black text-brand-dark">My Reviews</h1>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 bg-[#2C4A3E] text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-brand-gold hover:text-brand-dark transition-colors shadow-sm"
        >
          <Plus size={16} />
          <span>Write a Review</span>
        </button>
      </div>

      {/* محتوى الصفحة (الحالة الفارغة أو القائمة) */}
      {reviewsList.length > 0 ? (
        <div className="space-y-4">{/* سيتم عرض قائمة التقييمات هنا */}</div>
      ) : (
        <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm text-center space-y-4">
          <div className="w-14 h-14 bg-[#F8F1E7] text-brand-gold rounded-2xl flex items-center justify-center mx-auto border border-[#D9BD96]/30">
            <Star size={26} />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-sm text-brand-dark">
              No Reviews Yet
            </h3>
            <p className="text-xs text-gray-400 max-w-sm mx-auto">
              You haven't reviewed any products yet. Share your feedback on
              purchased items to help other wholesale buyers.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-[#2C4A3E] hover:text-white transition-colors shadow-sm"
          >
            <Plus size={16} />
            <span>Add Review</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Reviews;
