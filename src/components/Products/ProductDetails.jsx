import { useState } from "react";
import { ShoppingCart, Store, Minus, Plus } from "lucide-react";

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // صور تجريبية للمنتج
  const productImages = [
    "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1597481497550-d790d9894178?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=600&auto=format&fit=crop&q=80",
  ];

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div
      className="w-full min-h-[calc(100vh-160px)] bg-brand-bg py-8 px-4 font-sans text-left"
      dir="ltr"
    >
      <div className="max-w-6xl mx-auto">
        {/* البطاقة الرئيسية الموحدة التي تجمع الصورة والتفاصيل */}
        <div className="bg-[#f3eee3] border border-[#e5decb] rounded-3xl p-6 md:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* قسم عرض الصور (جهة اليسار) */}
            <div className="lg:col-span-5 space-y-4">
              {/* حاوية الصورة الكبيرة داخل إطار مميز */}
              <div className="w-full h-[380px] md:h-[420px] rounded-2xl bg-[#e6dfcc] border border-[#d8cfb7] p-4 flex items-center justify-center overflow-hidden">
                <img
                  src={productImages[selectedImage]}
                  alt="El arosa tea"
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>

              {/* الصور المصغرة (Thumbnails) */}
              <div className="flex gap-3 justify-start">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition ${
                      selectedImage === index
                        ? "border-brand-green ring-2 ring-brand-green/20"
                        : "border-[#d8cfb7] hover:border-brand-green/50"
                    }`}
                  >
                    <img
                      src={img}
                      alt="thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* قسم التفاصيل والمعلومات (جهة اليمين) */}
            <div className="lg:col-span-7 space-y-5">
              {/* الفئة والتصنيف */}
              <span className="text-[11px] font-bold tracking-widest text-gray-500 uppercase">
                DRINKS
              </span>

              {/* العنوان والوصف */}
              <div>
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                  EL AROSA TEA
                </h1>
                <p className="text-xs font-semibold tracking-wider text-gray-600 uppercase mt-1">
                  EGYPTIAN BLACK TEA
                </p>
              </div>

              {/* الشارات (Badges) */}
              <div className="flex items-center gap-2 pt-1">
                <span className="px-3 py-1 text-xs font-bold text-gray-700 bg-[#e4dcc2] border border-[#d3c8ad] rounded-lg">
                  DRINKS
                </span>
                <span className="px-3 py-1 text-xs font-bold text-gray-700 bg-[#e4dcc2] border border-[#d3c8ad] rounded-lg">
                  ART-001
                </span>
              </div>

              {/* وصف مختصر */}
              <p className="text-sm text-gray-600 font-medium">
                Premium quality, classic Egyptian blend.
              </p>

              {/* السعر */}
              <div className="text-2xl font-black text-gray-900 pt-1">
                E£ 65.00
              </div>

              {/* بائع المنتج */}
              <div className="flex items-center gap-2.5 bg-[#e6dfcc] px-4 py-2.5 rounded-xl border border-[#d8cfb7] text-xs font-semibold text-gray-800">
                <Store size={16} className="text-brand-green" />
                <span>
                  Sold by{" "}
                  <strong className="text-brand-green">
                    Allegro Vendor Store
                  </strong>
                </span>
              </div>

              {/* التحكم بالكمية وزر الإضافة للسلة */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-3">
                  {/* أزرار زيادة ونقصان الكمية */}
                  <div className="flex items-center border border-[#d8cfb7] rounded-xl overflow-hidden bg-[#e8e2d2]">
                    <button
                      onClick={handleDecrement}
                      className="px-3 py-2.5 text-gray-700 hover:bg-[#ded7c4] transition"
                    >
                      <Minus size={15} />
                    </button>
                    <span className="px-4 text-sm font-bold text-gray-900">
                      {quantity}
                    </span>
                    <button
                      onClick={handleIncrement}
                      className="px-3 py-2.5 text-gray-700 hover:bg-[#ded7c4] transition"
                    >
                      <Plus size={15} />
                    </button>
                  </div>

                  {/* زر إضافة للسلة */}
                  <button className="flex-1 flex items-center justify-center gap-2 py-2.5 px-6 bg-brand-green text-white text-sm font-bold rounded-xl hover:bg-brand-green/90 transition shadow-sm">
                    <ShoppingCart size={16} />
                    <span>Add to Cart</span>
                  </button>
                </div>

                {/* المخزون المتاح */}
                <p className="text-[11px] font-semibold text-gray-600">
                  9541 in stock
                </p>
              </div>

              {/* قسم المواصفات (Specifications) */}
              <div className="pt-4 border-t border-[#e2dac7]">
                <h3 className="text-xs font-extrabold text-gray-900 tracking-wider uppercase mb-3">
                  SPECIFICATIONS
                </h3>

                <div className="bg-[#e9e3d3] rounded-xl border border-[#d8cfb7] overflow-hidden text-xs">
                  <div className="px-4 py-2 bg-[#dfd8c6] font-bold text-gray-500 uppercase tracking-wider border-b border-[#d8cfb7]">
                    GENERAL
                  </div>
                  <div className="divide-y divide-[#d8cfb7]">
                    <div className="flex justify-between px-4 py-2.5">
                      <span className="text-gray-600 font-medium">Origin</span>
                      <span className="font-bold text-gray-900">Egypt</span>
                    </div>
                    <div className="flex justify-between px-4 py-2.5">
                      <span className="text-gray-600 font-medium">
                        Shelf Life
                      </span>
                      <span className="font-bold text-gray-900">24 Months</span>
                    </div>
                    <div className="flex justify-between px-4 py-2.5">
                      <span className="text-gray-600 font-medium">
                        Packaging
                      </span>
                      <span className="font-bold text-gray-900">Paper Box</span>
                    </div>
                    <div className="flex justify-between px-4 py-2.5">
                      <span className="text-gray-600 font-medium">Type</span>
                      <span className="font-bold text-gray-900">Black Tea</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
