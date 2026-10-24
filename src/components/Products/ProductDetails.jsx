import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Star,
  Plus,
  Minus,
  Truck,
  ShieldCheck,
  Store,
  Share2,
  PackageCheck,
} from "lucide-react";
import ProductCard from "../Products/ProductCard"; // استبدل المسار بحسب هيكل مجلداتك

// بيانات توضيحية لمنتج مكتمل مع صور متعددة وخصومات جملة
const productData = {
  id: 4,
  title: "أرز فاخر عالي الجودة - 5 كجم",
  supplier: "شركة عافية للسلع الغذائية",
  brand: "عافية",
  sku: "AF-RC-5KG-01",
  price: 285.0,
  oldPrice: 320.0,
  discount: "-10%",
  moq: 2, // الحد الأدنى للطلب (بالكرتونة)
  stockStatus: "متوفر بمخازن طلخا (توصيل سريع)",
  category: "السلع والحبوب",
  packSize: "كرتونة تحتوي على 4 أكياس × 5 كجم",

  // معرض الصور المتعددة
  images: [
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
  ],

  // جدول شرائح الأسعار للطلب بالجملة
  tierPricing: [
    { min: "2 - 5 كرتونة", price: 285.0 },
    { min: "6 - 15 كرتونة", price: 275.0 },
    { min: "16+ كرتونة", price: 265.0 },
  ],

  // المواصفات الفنية
  specifications: [
    { name: "الوزن الإجمالي للكرتونة", value: "20 كجم (4 × 5 كجم)" },
    { name: "نوع الحبة", value: "عريض الحبة - درجة أولى" },
    { name: "نسبة الكسر", value: "لا تتجاوز 3%" },
    { name: "بلد المنشأ", value: "مصر" },
    { name: "تاريخ الإنتاج", value: "أكتوبر 2026" },
    { name: "مدة الصلاحية", value: "24 شهراً" },
  ],

  description:
    "أرز مصري فاخر عالي الجودة معبأ آلياً وفق أعلى معايير السلامة الغذائية. يتميز بنسبة كسر منخفضة للغاية وحبات عريضة ناصعة البياض، خيار مثالي للهايبر ماركت والسوبر ماركت والمطاعم.",

  // منتجات مقترحة
  relatedProducts: [
    {
      id: 1,
      title: "زيت ذرة عافية 2.2 لتر",
      supplier: "شركة عافية",
      price: 180.0,
      category: "الزيوت والدهون",
      image:
        "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 2,
      title: "جبنة فريكو جودة 1 كجم",
      supplier: "شركة فريكو",
      price: 240.0,
      category: "الأجبان والألبان",
      image:
        "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=300&q=80",
    },
  ],
};

export default function ProductDetailsPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(productData.moq);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState("specs"); // 'specs' | 'wholesale' | 'description'

  // حساب السعر الفعلي بناءً على شريحة الكمية المختارة
  const getUnitPrice = () => {
    if (quantity >= 16) return 265.0;
    if (quantity >= 6) return 275.0;
    return productData.price;
  };

  const currentUnitPrice = getUnitPrice();
  const totalPrice = currentUnitPrice * quantity;

  const updateQuantity = (amount) => {
    setQuantity((prev) => Math.max(productData.moq, prev + amount));
  };

  return (
    <div
      dir="rtl"
      className="w-full font-cairo bg-brand-bg min-h-screen py-6 px-4 md:px-12 pb-24 md:pb-12"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Breadcrumb Navigation */}
        <nav className="text-xs text-gray-500 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-brand-dark">
            الرئيسية
          </Link>
          <span>/</span>
          <Link to="/Products" className="hover:text-brand-dark">
            المنتجات
          </Link>
          <span>/</span>
          <span className="text-brand-dark font-bold truncate">
            {productData.title}
          </span>
        </nav>

        {/* Top Product Card: Gallery + Purchase Form */}
        <div className="bg-white rounded-2xl border border-gray-100 p-4 md:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 1. Gallery Section (5 Columns) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Main Image View */}
            <div className="relative w-full h-80 sm:h-96 bg-[#F8F1E7] rounded-2xl overflow-hidden flex items-center justify-center p-4 border border-[#D9BD96]/40">
              {productData.discount && (
                <span className="absolute top-4 right-4 z-10 bg-brand-gold text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                  خصم {productData.discount}
                </span>
              )}
              <img
                src={productData.images[selectedImage]}
                alt={productData.title}
                className="max-h-full max-w-full object-contain transition-all duration-300"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {productData.images.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 bg-[#F8F1E7] shrink-0 transition-all ${
                    selectedImage === index
                      ? "border-brand-gold ring-2 ring-brand-gold/20 scale-95"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* 2. Product Details & Action Form (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold text-brand-gold bg-[#F8F1E7] px-3 py-1 rounded-full">
                  {productData.category}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsFavorite(!isFavorite)}
                    aria-label="المفضلة"
                    className="p-2 rounded-full bg-gray-50 hover:bg-[#F8F1E7] text-brand-dark transition-colors"
                  >
                    <Star
                      size={18}
                      fill={isFavorite ? "currentColor" : "none"}
                      className={isFavorite ? "text-brand-gold" : ""}
                    />
                  </button>

                  <button
                    type="button"
                    aria-label="مشاركة"
                    className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 text-brand-dark transition-colors"
                  >
                    <Share2 size={18} />
                  </button>
                </div>
              </div>

              {/* Title & Supplier */}
              <h1 className="text-xl md:text-2xl font-black text-brand-dark mb-2">
                {productData.title}
              </h1>

              <div className="flex items-center gap-4 text-xs text-gray-600 mb-4 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <Store size={16} className="text-brand-gold" />
                  <span>
                    المورد:{" "}
                    <strong className="text-brand-dark">
                      {productData.supplier}
                    </strong>
                  </span>
                </div>
                <span className="text-gray-300">|</span>
                <span>
                  كود المنتج:{" "}
                  <strong className="text-gray-700">{productData.sku}</strong>
                </span>
              </div>

              {/* Price & MOQ Badge */}
              <div className="bg-[#F8F1E7]/50 p-4 rounded-xl border border-[#D9BD96]/40 mb-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl md:text-3xl font-black text-brand-dark">
                    {currentUnitPrice.toFixed(2)} ج.م
                  </span>
                  {productData.oldPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      {productData.oldPrice.toFixed(2)} ج.م
                    </span>
                  )}
                  <span className="text-xs font-bold text-gray-600">
                    / للكرتونة
                  </span>
                </div>

                <p className="text-xs text-brand-gold font-bold mt-1 flex items-center gap-1">
                  <PackageCheck size={14} />
                  الحد الأدنى للطلب (MOQ): {productData.moq} كرتونة
                </p>
              </div>

              {/* Bulk Pricing Tier Preview */}
              <div className="space-y-2 mb-6">
                <label className="text-xs font-bold text-brand-dark block">
                  أسعار الجملة حسب الكمية:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {productData.tierPricing.map((tier, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        (idx === 0 && quantity < 6) ||
                        (idx === 1 && quantity >= 6 && quantity < 16) ||
                        (idx === 2 && quantity >= 16)
                          ? "border-brand-gold bg-[#F8F1E7] ring-1 ring-brand-gold"
                          : "border-gray-200 bg-gray-50"
                      }`}
                    >
                      <p className="text-[10px] text-gray-500">{tier.min}</p>
                      <p className="text-xs font-black text-brand-dark">
                        {tier.price.toFixed(2)} ج.م
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity Selector & Total Price Box */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-4 mb-6">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-xs font-bold text-gray-700">
                    حدد الكمية المطلوبة:
                  </span>

                  <div className="flex items-center gap-1 border border-[#D9BD96] bg-white rounded-lg p-1">
                    <button
                      type="button"
                      onClick={() => updateQuantity(-1)}
                      disabled={quantity <= productData.moq}
                      className="w-8 h-8 flex items-center justify-center rounded text-brand-dark hover:bg-[#F3E5D0] disabled:opacity-40 transition-colors"
                    >
                      <Minus size={14} />
                    </button>

                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(
                          Math.max(
                            productData.moq,
                            Number(e.target.value) || productData.moq
                          )
                        )
                      }
                      className="w-14 text-center text-sm font-bold text-brand-dark outline-none bg-transparent"
                    />

                    <button
                      type="button"
                      onClick={() => updateQuantity(1)}
                      className="w-8 h-8 flex items-center justify-center rounded bg-[#F3E5D0] text-brand-dark hover:bg-[#D9BD96] transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <span className="text-xs font-bold text-gray-600">
                    الإجمالي التقديري:
                  </span>
                  <span className="text-xl font-black text-brand-gold">
                    {totalPrice.toFixed(2)} ج.م
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Add to Cart CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                type="button"
                className="flex-1 bg-brand-dark text-white text-sm font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-gold transition-colors duration-300 shadow-md"
              >
                <ShoppingCart size={18} />
                <span>إضافة إلى السلة</span>
              </button>
            </div>

            {/* Delivery & Assurance Meta */}
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-gray-600 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <Truck size={16} className="text-brand-gold" />
                <span>شحن وسريع لمحافظات الدلتا</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-brand-gold" />
                <span>ضمان جودة وصلاحية المنتجات</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Detailed Product Tabs (Specifications & Terms) */}
        <div className="bg-white rounded-2xl border border-gray-100 p-4 md:p-6 shadow-sm">
          {/* Tab Buttons */}
          <div className="flex items-center gap-4 border-b border-gray-100 pb-3 mb-6 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab("specs")}
              className={`text-xs md:text-sm font-bold pb-2 transition-colors whitespace-nowrap border-b-2 ${
                activeTab === "specs"
                  ? "border-brand-gold text-brand-dark"
                  : "border-transparent text-gray-500 hover:text-brand-dark"
              }`}
            >
              المواصفات الفنية
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("description")}
              className={`text-xs md:text-sm font-bold pb-2 transition-colors whitespace-nowrap border-b-2 ${
                activeTab === "description"
                  ? "border-brand-gold text-brand-dark"
                  : "border-transparent text-gray-500 hover:text-brand-dark"
              }`}
            >
              الوصف بالتفصيل
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "specs" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {productData.specifications.map((spec, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-xl text-xs"
                >
                  <span className="text-gray-500 font-semibold">
                    {spec.name}
                  </span>
                  <span className="text-brand-dark font-bold">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "description" && (
            <div className="text-xs md:text-sm text-gray-600 leading-relaxed space-y-3">
              <p>{productData.description}</p>
            </div>
          )}
        </div>

        {/* 4. Related Products Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-brand-dark flex items-center gap-2">
            <span className="w-1.5 h-5 bg-brand-gold rounded-full inline-block" />
            منتجات ذات صلة
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {productData.relatedProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* 5. Sticky Bottom Bar for Mobile Screen */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 p-3 flex items-center justify-between gap-3 md:hidden shadow-lg">
        <div>
          <p className="text-[10px] text-gray-500">
            الإجمالي ({quantity} كرتونة)
          </p>
          <p className="text-sm font-black text-brand-gold">
            {totalPrice.toFixed(2)} ج.م
          </p>
        </div>

        <button
          type="button"
          className="bg-brand-dark text-white text-xs font-bold py-2.5 px-6 rounded-xl flex items-center gap-2 hover:bg-brand-gold transition-colors"
        >
          <ShoppingCart size={16} />
          <span>أضف للسلة</span>
        </button>
      </div>
    </div>
  );
}
