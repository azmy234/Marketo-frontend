import { ArrowLeft, ShoppingCart } from "lucide-react";

const items = [
  {
    id: 1,
    title: "مكرونة الملكة 1 كيلو",
    price: 28.0,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3d5d6281313?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    title: "تونة قطعة واحدة 200جم",
    price: 55.0,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    title: "توابل مشكلة فاخرة 500جم",
    price: 120.0,
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 4,
    title: "عدس بولاقي أصفر 1كجم",
    price: 60.0,
    image:
      "https://images.unsplash.com/photo-1585998066829-56e3264cae28?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 5,
    title: "مسطردة طبيعية 300جم",
    price: 40.0,
    image:
      "https://images.unsplash.com/photo-1528756510307-25e2e9202758?auto=format&fit=crop&w=300&q=80",
  },
];

export default function NewArrivalsSection() {
  return (
    <section className="w-full font-cairo py-8 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2">
            <span className="w-2 h-6 bg-brand-gold rounded-full inline-block"></span>
            New Arrivals (وصل حديثاً)
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
