import { ArrowLeft } from "lucide-react";

const categories = [
  { id: 1, title: "بهارات وتوابل", icon: "🧂" },
  { id: 2, title: "حلويات", icon: "🍫" },
  { id: 3, title: "مشروبات", icon: "🥤" },
  { id: 4, title: "منتجات ألبان", icon: "🧀" },
  { id: 5, title: "معلبات", icon: "🥫" },
  { id: 6, title: "زيوت وسمن", icon: "🧴" },
  { id: 7, title: "أرز ومكرونة", icon: "🌾" },
  { id: 8, title: "ألبان ومنتجاتها", icon: "🥛" },
];

export default function CategoriesSection() {
  return (
    <section className="w-full font-cairo py-8 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* العنوان */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2">
            <span className="w-2 h-6 bg-brand-gold rounded-full inline-block"></span>
            تسوق حسب التصنيف
          </h2>
          <span className="text-xs font-bold text-gray-500 cursor-pointer hover:text-brand-dark flex items-center gap-1">
            عرض الكل <ArrowLeft size={14} />
          </span>
        </div>

        {/* شبكة الأقسام */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl p-4 text-center border border-gray-100 shadow-sm cursor-pointer hover:border-brand-gold transition"
            >
              <div className="text-3xl mb-2">{cat.icon}</div>
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
