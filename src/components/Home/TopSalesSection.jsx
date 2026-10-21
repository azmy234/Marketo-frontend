import { ArrowLeft } from "lucide-react";
import ProductCard from "../Products/ProductCard";

const items = [
  {
    id: 1,
    title: "سكر الضحى 1 كجم",
    supplier: "شركة الضحى",
    price: 35.0,
    image:
      "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    title: "أرز السواني الممتاز 1 كجم",
    supplier: "شركة السواني",
    price: 32.0,
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80",
  },
];

export default function TopSalesSection() {
  return (
    <section dir="rtl" className="w-full font-cairo  px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2">
            <span className="w-2 h-6 bg-brand-gold rounded-full inline-block"></span>
            Top Sales (الأكثر مبيعاً)
          </h2>
          <button
            type="button"
            className="text-xs font-bold text-gray-500 hover:text-brand-dark transition-colors flex items-center gap-1"
          >
            عرض الكل <ArrowLeft size={14} />
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
