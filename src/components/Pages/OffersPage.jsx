import { useState } from "react";
import { Link } from "react-router-dom";
import { Percent, Flame, Clock, Sparkles, ArrowRight, Tag } from "lucide-react";
import ProductCard from "../Products/ProductCard"; // تأكد من مطابقة مسار المكون لديك

// قائمة المنتجات المخفضة والعروض الخاصة
const offerProducts = [
  {
    id: 2,
    title: "زيت عباد الشمس سلايت 1.5 لتر",
    supplier: "سلايت",
    price: 115.0,
    oldPrice: 130.0,
    discount: "-11%",
    category: "الزيوت والدهون",
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 5,
    title: "سمن روابي 1.5 كجم علبة",
    supplier: "روابي",
    price: 160.0,
    oldPrice: 185.0,
    discount: "-13%",
    category: "الزيوت والدهون",
    image:
      "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 14,
    title: "جبنة رومي قديم بطارخ 1 كجم",
    supplier: "الأجبان المصرية",
    price: 260.0,
    oldPrice: 290.0,
    discount: "-10%",
    category: "الأجبان والألبان",
    image:
      "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 21,
    title: "أرز فاخر 5 كجم",
    supplier: "شركة عافية",
    pack: "5 كجم",
    price: 285.0,
    oldPrice: 320.0,
    discount: "-10%",
    moq: "1 كرتونة : MOQ",
    category: "البقوليات والحبوب",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 31,
    title: "مرقة دجاج ماجي",
    supplier: "شركة عافية",
    pack: "24 × جم",
    price: 450.0,
    oldPrice: 500.0,
    discount: "-10%",
    moq: "1 كرتونة : MOQ",
    category: "البهارات والتوابل",
    image:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 45,
    title: "تونة قطع ريماس 140 جم",
    supplier: "ريماس",
    price: 45.0,
    oldPrice: 52.0,
    discount: "-13%",
    category: "المعلبات والصلصات",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 55,
    title: "نسكافيه جولد برطمان 100 جم",
    supplier: "نستلة",
    price: 155.0,
    oldPrice: 175.0,
    discount: "-11%",
    category: "المشروبات والعصائر",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 62,
    title: "مسحوق غسيل تايد أوتوماتيك 3 كجم",
    supplier: "تايد",
    price: 240.0,
    oldPrice: 270.0,
    discount: "-11%",
    category: "المنظفات والعناية المنزلية",
    image:
      "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=300&q=80",
  },
];

const OffersPage = () => {
  const [activeTab, setActiveTab] = useState("الكل");

  const categories = ["الكل", ...new Set(offerProducts.map((p) => p.category))];

  const filteredOffers = offerProducts.filter(
    (product) => activeTab === "الكل" || product.category === activeTab
  );

  return (
    <div
      dir="rtl"
      className="w-full font-cairo  min-h-[85vh]  px-3 sm:px-6 lg:px-12 pb-5"
    >
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        {/* 1. Hero Banner: عروض التوفير الكبرى */}
        <div className="bg-linear-to-l from-brand-dark to-[#242424] text-white rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-xl border border-brand-gold/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative z-10 max-w-xl space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold bg-brand-gold/10 border border-brand-gold/30 px-3 py-1 rounded-full">
              <Flame size={15} className="text-brand-gold animate-pulse" />
              تخفيضات وعروض الجملة الحصرية
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
              وفر أكثر في مشترياتك مع عروض كرتونات الجملة
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              استفد من أقوى التخفيضات على السلع الغذائية والزيوت والمنظفات لدعم
              هامش ربح نشاطك التجاري بأفضل الأسعار في الدلتا.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl text-center shrink-0 space-y-2 w-full md:w-auto">
            <div className="flex items-center justify-center gap-1.5 text-brand-gold text-xs font-bold">
              <Clock size={16} />
              <span>ينتهي العرض خلال:</span>
            </div>
            <div className="text-xl sm:text-2xl font-black tracking-widest text-white">
              08 : 14 : 32
            </div>
            <span className="text-[10px] text-gray-300 block">
              ساعة : دقيقة : ثانية
            </span>
          </div>
        </div>

        {/* 2. Category Filter Tabs */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-black text-brand-dark flex items-center gap-2">
              <Percent size={20} className="text-brand-gold" />
              <span>أحدث عروض وتخفيضات الجملة ({filteredOffers.length})</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                  activeTab === cat
                    ? "bg-brand-dark text-white shadow-sm"
                    : "bg-white text-gray-600 border border-gray-100 hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Products Grid using ProductCard */}
        {filteredOffers.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredOffers.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-3">
            <div className="w-16 h-16 bg-[#F8F1E7] rounded-full flex items-center justify-center mx-auto text-brand-gold">
              <Tag size={30} />
            </div>
            <h3 className="text-base font-black text-brand-dark">
              لا توجد عروض متاحة في هذا القسم حالياً
            </h3>
            <p className="text-xs text-gray-400">
              تابعنا قريباً لإضافة المزيد من الخصومات على بضائع الجملة.
            </p>
          </div>
        )}

        {/* 4. B2B Bulk Discount Notice Banner */}
        <div className="bg-white rounded-2xl border border-[#D9BD96]/50 p-5 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-right">
            <div className="w-12 h-12 bg-[#F8F1E7] rounded-2xl flex items-center justify-center text-brand-gold shrink-0">
              <Sparkles size={24} />
            </div>
            <div>
              <h4 className="font-black text-sm sm:text-base text-brand-dark">
                تشتري بكميات ضخمة لمصنع أو هايبر ماركت؟
              </h4>
              <p className="text-xs text-gray-500 mt-0.5">
                احصل على خصومات إضافية وهامش ربح خاص للطلبات فوق 10,000 جنيه
                بالتواصل مع قسم المبيعات.
              </p>
            </div>
          </div>
          <Link
            to="/ProductsPage"
            className="bg-brand-dark text-white text-xs font-bold px-6 py-3 rounded-xl hover:bg-brand-gold transition-colors shrink-0 shadow-md inline-flex items-center gap-1.5"
          >
            <span>استعراض كافة المنتجات</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
