import { ArrowLeft } from "lucide-react";

const categories = [
  { id: 1, title: "بهارات وتوابل", image: "/categories/spices.jpg" },
];

export default function CategoriesSection() {
  return (
    <section className="w-full font-cairo  px-4 md:px-12 ">
      <div className="max-w-7xl mx-auto">
        {/* العنوان */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2">
            <span className="w-2 h-6 bg-brand-gold rounded-full inline-block"></span>
            تسوق حسب التصنيف
          </h2>

          <span className="text-xs font-bold text-gray-500 cursor-pointer hover:text-brand-dark flex items-center gap-1">
            عرض الكل
            <ArrowLeft size={14} />
          </span>
        </div>

        {/* شبكة الأقسام */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group cursor-pointer rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm transition hover:border-brand-gold"
            >
              <div className="mb-3 flex justify-center">
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  className="h-20 w-20 rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <h3 className="font-bold text-xs text-brand-dark truncate">
                {cat.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
