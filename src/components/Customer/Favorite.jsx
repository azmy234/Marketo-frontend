import { Heart, ShoppingBag } from "lucide-react";

const Favorite = () => {
  // بيانات تجريبية للمفضلة (يمكن ربطها بالـ State أو الـ API لاحقاً)
  const FavoriteItems = [];

  return (
    <div className="space-y-6">
      {/* رأس الصفحة */}
      <div className="space-y-1">
        <span className="text-xs text-gray-400 font-medium">Dashboard</span>
        <h1 className="text-2xl font-black text-brand-dark">My Favorite</h1>
      </div>

      {/* محتوى الصفحة (الحالة الفارغة أو القائمة) */}
      {FavoriteItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* سيتم عرض بطاقات المنتجات المفضلة هنا */}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm text-center space-y-4">
          <div className="w-14 h-14 bg-[#F8F1E7] text-brand-gold rounded-2xl flex items-center justify-center mx-auto border border-[#D9BD96]/30">
            <Heart size={26} />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-sm text-brand-dark">
              Your Favorite is empty
            </h3>
            <p className="text-xs text-gray-400 max-w-sm mx-auto">
              Save your favorite wholesale products for later by clicking the
              heart icon while browsing the market.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 bg-[#2C4A3E] text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-brand-gold hover:text-brand-dark transition-colors shadow-sm"
          >
            <ShoppingBag size={16} />
            <span>Explore Marketplace</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Favorite;
