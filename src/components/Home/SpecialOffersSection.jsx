import { ArrowLeft } from "lucide-react";
import ProductCard from "../Products/ProductCard"; // استبدل المسار حسب مكان الكارت لديك

const offers = [
  {
    id: 4,
    title: "أرز فاخر 5 كجم",
    supplier: "شركة عافية",
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
    supplier: "شركة عافية",
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
    <section dir="rtl" className="w-full font-cairo py-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-extrabold text-brand-dark flex items-center gap-2">
            <span className="w-1.5 h-6 bg-brand-gold rounded-full inline-block" />
            عروض خاصة
          </h2>

          <button
            type="button"
            className="text-xs font-bold text-brand-dark hover:text-brand-gold transition-colors flex items-center gap-1"
          >
            عرض الكل
            <ArrowLeft size5={15} />
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {offers.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
