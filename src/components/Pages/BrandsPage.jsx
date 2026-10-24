import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Award,
  Search,
  ArrowLeft,
  Package,
  Building,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

// قائمة البراندات والماركات المتاحة للجملة
const brandsList = [
  {
    id: 1,
    name: "عافية",
    englishName: "Afia",
    category: "الزيوت والدهون",
    productsCount: 45,
    country: "مصر / دولي",
    logo: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=200&q=80",
    description:
      "العلامة التجارية الرائدة في تصنيع زيوت الذرة وعباد الشمس والسمن النباتي.",
  },
  {
    id: 2,
    name: "جهينة",
    englishName: "Juhayna",
    category: "الأجبان والألبان",
    productsCount: 38,
    country: "مصر",
    logo: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=200&q=80",
    description:
      "الألبان الطبيعية، العصائر الطازجة، ومنتجات الزبادي المخصصة للتجار.",
  },
  {
    id: 3,
    name: "الضحى",
    englishName: "ElDoha",
    category: "البقوليات والحبوب",
    productsCount: 62,
    country: "مصر",
    logo: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=200&q=80",
    description:
      "المعيار الأول للجودة في الأرز المصري، المكرونة، والبقوليات المعبأة.",
  },
  {
    id: 4,
    name: "هارفست",
    englishName: "Harvest",
    category: "المعلبات والصلصات",
    productsCount: 29,
    country: "مصر",
    logo: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=200&q=80",
    description: "صلصة الطماطم، الفول المدمس، والخضروات المعلبة بأعلى جودة.",
  },
  {
    id: 5,
    name: "الملكة",
    englishName: "ElMaleka",
    category: "البقوليات والحبوب",
    productsCount: 31,
    country: "مصر",
    logo: "https://images.unsplash.com/photo-1551462106-cc2fb6588f3a?auto=format&fit=crop&w=200&q=80",
    description: "المكرونة المفضلة في كل منزل ومطعم بجميع أشكالها وأحجامها.",
  },
  {
    id: 6,
    name: "برسيل",
    englishName: "Persil",
    category: "المنظفات والعناية المنزلية",
    productsCount: 50,
    country: "عالمي",
    logo: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=200&q=80",
    description:
      "منتجات التنظيف العميق والعناية بالملابس والأقمشة للمغاسل والتجار.",
  },
  {
    id: 7,
    name: "ليبتون",
    englishName: "Lipton",
    category: "المشروبات والعصائر",
    productsCount: 24,
    country: "عالمي",
    logo: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=200&q=80",
    description: "الشاي الأحمر والفتلة الأشهر عالمياً ومحلياً لجميع المتطلبات.",
  },
  {
    id: 8,
    name: "نستلة",
    englishName: "Nestle",
    category: "المشروبات والعصائر",
    productsCount: 40,
    country: "عالمي",
    logo: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=200&q=80",
    description: "النسكافيه، المياه الطبيعية، والمنتجات الغذائية الخفيفة.",
  },
];

const BrandsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const categories = ["الكل", ...new Set(brandsList.map((b) => b.category))];

  const filteredBrands = brandsList.filter((brand) => {
    const matchesSearch =
      brand.name.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
      brand.englishName.toLowerCase().includes(searchTerm.toLowerCase().trim());
    const matchesCategory =
      selectedCategory === "الكل" || brand.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div
      dir="rtl"
      className="w-full font-cairo bg-[#FBF9F5] min-h-[85vh]  px-3 sm:px-6 lg:px-12 pb-5"
    >
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        {/* 1. Hero Banner */}
        <div className="bg-brand-dark text-white rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-xl border border-brand-gold/30">
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold bg-brand-gold/10 border border-brand-gold/30 px-3 py-1 rounded-full">
              <Sparkles size={14} />
              أشهر الماركات العالمية والمحلية
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
              تصفح المنتجات حسب البراند المفضل لنشاطك التجاري
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              نوفر لك في <strong className="text-brand-gold">Marketo</strong>{" "}
              عقوداً مباشرة مع كبرى العلامات التجارية لضمان أفضل أسعار الجملة
              والأصناف الأصلية 100%.
            </p>
          </div>

          <div className="absolute top-1/2 left-6 -translate-y-1/2 opacity-10 pointer-events-none hidden md:block">
            <Award size={260} />
          </div>
        </div>

        {/* 2. Search & Categories Bar */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-brand-dark">
                الماركات المعتمدة ({filteredBrands.length})
              </h2>
              <p className="text-xs text-gray-500">
                اضغط على أي براند لعرض كافة منتجاته المتاحة للطلب الفوري.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="ابحث باسم البراند (عربي / إنجليزي)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 pr-10 text-xs text-brand-dark outline-none focus:border-brand-gold shadow-xs transition-colors"
              />
              <Search
                size={16}
                className="absolute right-3 top-3 text-gray-400"
              />
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                  selectedCategory === cat
                    ? "bg-brand-dark text-white shadow-sm"
                    : "bg-white text-gray-600 border border-gray-100 hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Brands Grid */}
        {filteredBrands.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredBrands.map((brand) => (
              <div
                key={brand.id}
                className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:border-brand-gold/60 transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 bg-[#F8F1E7] rounded-2xl p-2 border border-[#D9BD96]/30 overflow-hidden flex items-center justify-center shrink-0">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="max-h-full max-w-full object-cover rounded-xl group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-brand-gold bg-[#F8F1E7] px-2.5 py-1 rounded-md">
                      {brand.country}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-black text-base text-brand-dark flex items-center gap-1.5">
                      <span>{brand.name}</span>
                      <CheckCircle2
                        size={15}
                        className="text-green-600 shrink-0"
                      />
                    </h3>
                    <p className="text-[11px] text-gray-400 font-medium">
                      {brand.englishName}
                    </p>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                    {brand.description}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-[#FBF9F5] p-2.5 rounded-xl font-semibold">
                    <Package size={14} className="text-brand-gold shrink-0" />
                    <span>{brand.productsCount} منتج متاح للجملة</span>
                  </div>
                </div>

                {/* Action Link */}
                <Link
                  to={`/products?brand=${encodeURIComponent(brand.name)}`}
                  className="w-full bg-gray-50 border border-gray-200 text-brand-dark py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-all duration-300 shadow-xs"
                >
                  <span>استعراض منتجات البراند</span>
                  <ArrowLeft size={14} />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-3">
            <div className="w-16 h-16 bg-[#F8F1E7] rounded-full flex items-center justify-center mx-auto text-brand-gold">
              <Building size={30} />
            </div>
            <h3 className="text-base font-black text-brand-dark">
              عذراً، لم نتمكن من العثور على ماركات مطابقة لبحثك
            </h3>
            <p className="text-xs text-gray-400">
              جرب البحث باسم آخر أو اختر "الكل" من الأقسام.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandsPage;
