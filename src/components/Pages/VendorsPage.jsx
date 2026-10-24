import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Store,
  Search,
  CheckCircle2,
  Building2,
  TrendingUp,
  ShieldCheck,
  Truck,
  ArrowLeft,
  Sparkles,
  MapPin,
  Package,
} from "lucide-react";

// قائمة الموردين المعتمدين على منصة ماركيتو
const mockSuppliers = [
  {
    id: 1,
    name: "شركة عافية للزيوت والمنتجات الغذائية",
    brandName: "عافية (Afia)",
    category: "الزيوت والدهون",
    city: "القاهرة - المنطقة الصناعية",
    productsCount: 45,
    rating: 4.9,
    isVerified: true,
    logo: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=200&q=80",
    description:
      "مورد معتمد لمنتجات الزيوت والسمن النباتي والذرة بأسعار المصنع المباشرة.",
  },
  {
    id: 2,
    name: "شركة جهينة للصناعات الغذائية",
    brandName: "جهينة (Juhayna)",
    category: "الأجبان والألبان",
    city: "الجيزة - 6 أكتوبر",
    productsCount: 38,
    rating: 4.8,
    isVerified: true,
    logo: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=200&q=80",
    description:
      "الألبان والعصائر الطبيعية والزبادي بأعلى معايير الجودة والتبريد.",
  },
  {
    id: 3,
    name: "مجموعة شركات الضحى للبقوليات",
    brandName: "الضحى (ElDoha)",
    category: "البقوليات والحبوب",
    city: "الدقهلية - المنصورة",
    productsCount: 62,
    rating: 4.9,
    isVerified: true,
    logo: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=200&q=80",
    description:
      "أنقى أصناف الأرز والمكرونة والبقوليات المعبأة لمتاجر الجملة والسوبرماركت.",
  },
  {
    id: 4,
    name: "شركة هارفست للأغذية المحفوظة",
    brandName: "هارفست (Harvest)",
    category: "المعلبات والصلصات",
    city: "العاشر من رمضان",
    productsCount: 29,
    rating: 4.7,
    isVerified: true,
    logo: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 5,
    name: "مصانع الملكة للمكرونة والأغذية",
    brandName: "الملكة (ElMaleka)",
    category: "البقوليات والحبوب",
    city: "الأسكندرية",
    productsCount: 31,
    rating: 4.8,
    isVerified: true,
    logo: "https://images.unsplash.com/photo-1551462106-cc2fb6588f3a?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 6,
    name: "شركة برسيل للمنظفات ورعاية المنزل",
    brandName: "هنكل - برسيل",
    category: "المنظفات والعناية المنزلية",
    city: "القاهرة - التجمع",
    productsCount: 50,
    rating: 4.9,
    isVerified: true,
    logo: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=200&q=80",
  },
];

const VendorsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const categories = ["الكل", ...new Set(mockSuppliers.map((s) => s.category))];

  const filteredSuppliers = mockSuppliers.filter((supplier) => {
    const matchesSearch =
      supplier.name.toLowerCase().includes(searchTerm.toLowerCase().trim()) ||
      supplier.brandName
        .toLowerCase()
        .includes(searchTerm.toLowerCase().trim());
    const matchesCategory =
      selectedCategory === "الكل" || supplier.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div
      dir="rtl"
      className="w-full font-cairo bg-[#FBF9F5] min-h-[85vh]  px-3 sm:px-6 lg:px-12 pb-5"
    >
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        {/* Hero Section */}
        <div className="bg-brand-dark text-white rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-xl border border-brand-gold/30">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold bg-brand-gold/10 border border-brand-gold/30 px-3 py-1 rounded-full">
              <Sparkles size={14} />
              شبكة كبار الموردين والمصانع
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
              تسوق مباشرة من كبرى شركات ومصانع الأغذية في مصر
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              تضمن لك منصة <strong className="text-brand-gold">Marketo</strong>{" "}
              الحصول على بضائع الجملة من المصنع والمورد المباشر بأسعار تنافسية،
              مع ضمان جودة التخزين والتوصيل.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="#join-supplier"
                className="bg-brand-gold text-brand-dark font-black text-xs sm:text-sm px-5 py-3 rounded-xl hover:bg-white transition-colors shadow-md inline-flex items-center gap-2"
              >
                <Building2 size={16} />
                <span>سجّل كمورد جديد معنا</span>
              </a>
            </div>
          </div>

          <div className="absolute top-1/2 left-4 -translate-y-1/2 opacity-10 pointer-events-none hidden md:block">
            <Store size={280} />
          </div>
        </div>

        {/* Search & Categories Filter */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-brand-dark">
                الموردون المعتمدون ({filteredSuppliers.length})
              </h2>
              <p className="text-xs text-gray-500">
                اختر المورد لعرض كافة منتجاته المتاحة للطلب بالجملة.
              </p>
            </div>

            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="ابحث باسم المورد أو العلامة التجارية..."
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

        {/* Suppliers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredSuppliers.map((supplier) => (
            <div
              key={supplier.id}
              className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:border-brand-gold/60 transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-[#F8F1E7] rounded-xl p-2 shrink-0 border border-[#D9BD96]/30 overflow-hidden flex items-center justify-center">
                      <img
                        src={supplier.logo}
                        alt={supplier.name}
                        className="max-h-full max-w-full object-cover rounded-lg group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-brand-dark flex items-center gap-1.5 leading-snug">
                        <span>{supplier.brandName}</span>
                        {supplier.isVerified && (
                          <CheckCircle2
                            size={15}
                            className="text-green-600 shrink-0"
                          />
                        )}
                      </h3>
                      <p className="text-[11px] text-gray-400">
                        {supplier.name}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                  {supplier.description}
                </p>

                <div className="grid grid-cols-2 gap-2 text-[11px] bg-[#FBF9F5] p-2.5 rounded-xl text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin size={13} className="text-brand-gold shrink-0" />
                    <span className="truncate">{supplier.city}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Package size={13} className="text-brand-gold shrink-0" />
                    <span>{supplier.productsCount} صنف جملة</span>
                  </div>
                </div>
              </div>

              <Link
                to={`/products?supplier=${encodeURIComponent(
                  supplier.brandName
                )}`}
                className="w-full bg-gray-50 border border-gray-200 text-brand-dark py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-all duration-300"
              >
                <span>استعرض منتجات المورد</span>
                <ArrowLeft size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* Become a Supplier Section */}
        <div
          id="join-supplier"
          className="bg-white rounded-3xl border border-[#D9BD96]/40 p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-extrabold text-brand-gold bg-[#F8F1E7] px-3 py-1 rounded-full inline-block">
              فرصة للمصانع وكبار التجار
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-dark leading-snug">
              هل أنت مورد أو صاحب مصنع سلع غذائية؟ انضم لمنصة Marketo
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              وسّع شبكة مبيعاتك ووصل منتجاتك لألاف محلات السوبرماركت والتجار في
              الدقهلية والدلتا بدون وسائط معقدة وتحصيل آمن وسريع.
            </p>

            <div className="space-y-2.5 pt-2 text-xs font-bold text-brand-dark">
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-brand-gold shrink-0" />
                <span>زيادة حجم المبيعات وسرعة تصريف المخزون.</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck size={16} className="text-brand-gold shrink-0" />
                <span>لوجستيات وشحن أسهل مع تغطية شاملة.</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-brand-gold shrink-0" />
                <span>دفعات مالية منتظمة وضمان حقوق التوريد.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#FBF9F5] p-5 sm:p-8 rounded-2xl border border-gray-200/80 space-y-4">
            <h3 className="text-sm font-black text-brand-dark">
              طلب انضمام مورد جديد
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "تم إرسال طلبكم بنجاح! سيتم تواصل فريق المبيعات معكم خلال 24 ساعة."
                );
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="font-bold text-gray-700 block mb-1">
                  اسم الشركة / المصنع:
                </label>
                <input
                  type="text"
                  required
                  placeholder="مثال: شركة النيل للصناعات الأغذية"
                  className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-brand-dark outline-none focus:border-brand-gold"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-gray-700 block mb-1">
                    اسم المسؤول:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="الاسم الثلاثي"
                    className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-brand-dark outline-none focus:border-brand-gold"
                  />
                </div>
                <div>
                  <label className="font-bold text-gray-700 block mb-1">
                    رقم الهاتف:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="01000000000"
                    className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-brand-dark outline-none focus:border-brand-gold"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-gray-700 block mb-1">
                  نوع المنتجات / القسم:
                </label>
                <select className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-brand-dark outline-none focus:border-brand-gold">
                  <option>الزيوت والدهون</option>
                  <option>الأجبان والألبان</option>
                  <option>البقوليات والحبوب</option>
                  <option>المعلبات والصلصات</option>
                  <option>المنظفات والعناية المنزلية</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-dark text-white font-bold py-3 rounded-xl text-xs hover:bg-brand-gold transition-colors shadow-md mt-2"
              >
                إرسال طلب التوريد
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorsPage;
