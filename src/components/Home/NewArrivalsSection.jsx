import { ArrowLeft } from "lucide-react";
import ProductCard from "../Products/ProductCard";

const items = [
  {
    id: 3,
    title: "توابل مشكلة فاخرة 500جم",
    supplier: "شركة عافية",
    price: 120.0,
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 4,
    title: "عدس بولاقي أصفر 1كجم",
    supplier: "شركة عافية",
    price: 60.0,
    image:
      "https://images.unsplash.com/photo-1585998066829-56e3264cae28?auto=format&fit=crop&w=300&q=80",
  },
];

export default function NewArrivalsSection() {
  return (
    <section dir="rtl" className="w-full font-cairo py-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-extrabold text-brand-dark flex items-center gap-2">
            <span className="w-1.5 h-6 bg-brand-gold rounded-full inline-block" />
            وصل حديثاً
          </h2>

          <button
            type="button"
            className="text-xs font-bold text-brand-dark hover:text-brand-gold transition-colors flex items-center gap-1"
          >
            عرض الكل
            <ArrowLeft size={15} />
          </button>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {items.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
