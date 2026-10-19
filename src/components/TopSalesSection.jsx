import { ArrowLeft, ShoppingCart } from "lucide-react";

const items = [
  {
    id: 1,
    title: "سكر الضحى 1 كجم",
    price: 35.0,
    image:
      "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    title: "أرز السواني الممتاز 1 كجم",
    price: 32.0,
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    title: "سمن كريستال طهي 1 كجم",
    price: 98.0,
    image:
      "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 4,
    title: "زيت كريستال عباد الشمس 2.2 لتر",
    price: 175.0,
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 5,
    title: "شاي ليبتون العائله 500جم",
    price: 130.0,
    image:
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=300&q=80",
  },
];

export default function TopSalesSection() {
  return (
    <section className="w-full font-cairo py-8 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2">
            <span className="w-2 h-6 bg-brand-gold rounded-full inline-block"></span>
            Top Sales (الأكثر مبيعاً)
          </h2>
          <span className="text-xs font-bold text-gray-500 cursor-pointer hover:text-brand-dark flex items-center gap-1">
            عرض الكل <ArrowLeft size={14} />
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-3 border border-gray-100 shadow-sm flex flex-col justify-between"
            >
              <div className="w-full h-32 my-2 overflow-hidden rounded-lg flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-xs text-brand-dark mb-1 line-clamp-1">
                  {item.title}
                </h3>
                <span className="text-sm font-black text-brand-dark block mb-3">
                  {item.price.toFixed(2)} ج.م
                </span>
              </div>
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
