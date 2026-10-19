import { Star, ArrowLeft } from "lucide-react";

const suppliers = [
  {
    id: 1,
    name: "الشركة الوطنية",
    category: "السكروالسلاح",
    products: "+1300 منتج",
    rating: 4.7,
    reviews: 110,
    logo: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    name: "المصرية للكتاب والتوزيع",
    category: "المواد الغذائية",
    products: "+800 منتج",
    rating: 4.6,
    reviews: 75,
    logo: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    name: "دلتا فودز",
    category: "المواد الغذائية",
    products: "+1500 منتج",
    rating: 4.9,
    reviews: 270,
    logo: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 4,
    name: "شركة الزهراء",
    category: "الزيوت والمواد",
    products: "+950 منتج",
    rating: 4.7,
    reviews: 340,
    logo: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 5,
    name: "شركة البركان للمواد الغذائية",
    category: "المواد الغذائية",
    products: "+1200 منتج",
    rating: 4.8,
    reviews: 250,
    logo: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=150&q=80",
  },
];

export default function SuppliersSection() {
  return (
    <section className="w-full font-cairo py-8 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* العنوان وعرض الكل */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-brand-dark flex items-center gap-2">
            <span className="w-2 h-6 bg-brand-gold rounded-full inline-block"></span>
            الموردون المميزون
          </h2>
          <span className="text-xs font-bold text-gray-500 cursor-pointer hover:text-brand-dark flex items-center gap-1">
            عرض الكل <ArrowLeft size={14} />
          </span>
        </div>

        {/* الكروت */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {suppliers.map((sup) => (
            <div
              key={sup.id}
              className="bg-white rounded-2xl p-4 text-center border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              {/* اللوجو */}
              <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden border border-gray-100 p-1 bg-gray-50">
                <img
                  src={sup.logo}
                  alt={sup.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* الاسم والنوع */}
              <h3 className="font-bold text-sm text-brand-dark truncate mb-1">
                {sup.name}
              </h3>
              <p className="text-xs text-gray-400 mb-2">{sup.category}</p>

              {/* التقييم */}
              <div className="flex items-center justify-center gap-1 text-xs mb-2">
                <Star size={12} className="fill-brand-gold text-brand-gold" />
                <span className="font-bold text-gray-700">{sup.rating}</span>
                <span className="text-gray-400">({sup.reviews})</span>
              </div>

              {/* عدد المنتجات */}
              <span className="inline-block bg-brand-bg text-brand-dark text-xs font-semibold px-2.5 py-1 rounded-md">
                {sup.products}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
