import { ArrowLeft, ShoppingCart } from "lucide-react";

const offers = [
  {
    id: 1,
    title: "مايونيز هامدة 1 كجم",
    pack: "12 × كجم",
    price: 95.0,
    oldPrice: 115.0,
    discount: "-18%",
    moq: "1 كرتونة : MOQ",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    title: "مكرونة اسباجيتي 400 جم",
    pack: "20 × 20 جم",
    price: 150.0,
    oldPrice: 170.0,
    discount: "-12%",
    moq: "1 كرتونة : MOQ",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3d5d6281313?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    title: "سكر أبيض ناعم 1 كجم",
    pack: "1 كجم",
    price: 210.0,
    oldPrice: 262.5,
    discount: "-20%",
    moq: "1 كرتونة : MOQ",
    image:
      "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 4,
    title: "أرز فاخر 5 كجم",
    pack: "5 كجم",
    price: 285.0,
    oldPrice: 320.0,
    discount: "-10%",
    moq: "1 كرتونة : MOQ",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 5,
    title: "مرقة دجاج ماجي",
    pack: "24 × جم",
    price: 450.0,
    oldPrice: 500.0,
    discount: "-19%",
    moq: "1 كرتونة : MOQ",
    image:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=300&q=80",
  },
];

export default function SpecialOffersSection() {
  return (
    <section className="w-full font-cairo py-8 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* العنوان */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2">
            <span className="w-2 h-6 bg-brand-gold rounded-full inline-block"></span>
            عروض خاصة
          </h2>
          <span className="text-xs font-bold text-gray-500 cursor-pointer hover:text-brand-dark flex items-center gap-1">
            عرض الكل <ArrowLeft size={14} />
          </span>
        </div>

        {/* كروت المنتجات */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {offers.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-3 border border-gray-100 shadow-sm flex flex-col justify-between relative"
            >
              {/* شارة الخصم بألوان البراند */}
              <span className="absolute top-3 right-3 bg-brand-gold text-white text-[11px] font-bold px-2 py-0.5 rounded-md">
                {item.discount}
              </span>

              {/* صورة المنتج */}
              <div className="w-full h-32 my-2 overflow-hidden rounded-lg flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full object-contain"
                />
              </div>

              {/* التفاصيل */}
              <div>
                <h3 className="font-bold text-xs text-brand-dark mb-1 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-gray-400 mb-2">{item.pack}</p>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-sm font-black text-brand-dark">
                    {item.price.toFixed(2)} ج.م
                  </span>
                  <span className="text-xs text-gray-400 line-through">
                    {item.oldPrice.toFixed(2)}
                  </span>
                </div>

                <p className="text-[10px] text-gray-400 mb-3">{item.moq}</p>
              </div>

              {/* زر إضافة للسلة */}
              <button className="bg-brand-dark text-white text-xs font-bold py-2 rounded-xl flex items-center justify-center gap-1.5 w-full hover:bg-opacity-90 transition">
                <ShoppingCart size={14} />
                <span>أضف للسلة</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
