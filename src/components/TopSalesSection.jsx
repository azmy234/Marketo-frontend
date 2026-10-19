import { ArrowLeft, ShoppingCart, Star, Plus, Minus } from "lucide-react";
import { useState } from "react";

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
  const [favorites, setFavorites] = useState([]);
  const [quantities, setQuantities] = useState(
    Object.fromEntries(items.map((item) => [item.id, 1]))
  );

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((favoriteId) => favoriteId !== id)
        : [...prev, id]
    );
  };

  const updateQuantity = (id, amount) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (Number(prev[id]) || 1) + amount),
    }));
  };

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]:
        value === ""
          ? ""
          : /^\d+$/.test(value)
          ? Math.max(1, Number(value))
          : prev[id],
    }));
  };

  const handleAddToCart = (item) => {
    const quantity = Math.max(1, Math.floor(Number(quantities[item.id]) || 1));

    console.log("Added to cart:", {
      product: item,
      quantity,
      total: item.price * quantity,
    });
  };

  return (
    <section dir="rtl" className="w-full font-cairo py-8 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-6">
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map((item) => {
            const quantity = Math.max(1, Number(quantities[item.id]) || 1);
            const isFavorite = favorites.includes(item.id);

            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl p-3 border border-gray-100 shadow-sm flex flex-col justify-between relative transition-all duration-300 hover:border-brand-gold hover:shadow-md"
              >
                {/* Favorite Button */}
                <button
                  type="button"
                  onClick={() => toggleFavorite(item.id)}
                  aria-label={
                    isFavorite ? "إزالة من المفضلة" : "إضافة إلى المفضلة"
                  }
                  className={`absolute top-3 left-3 z-10 rounded-full p-1.5 transition-colors ${
                    isFavorite
                      ? "bg-[#F3E5D0] text-brand-gold"
                      : "bg-[#F8F1E7] text-brand-dark hover:bg-[#F3E5D0]"
                  }`}
                >
                  <Star size={16} fill={isFavorite ? "currentColor" : "none"} />
                </button>

                {/* Product Image */}
                <div className="w-full h-32 my-2 overflow-hidden rounded-lg flex items-center justify-center bg-[#F8F1E7]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Product Details */}
                <div>
                  <h3 className="font-bold text-xs text-brand-dark mb-1 line-clamp-1">
                    {item.title}
                  </h3>

                  {/* Supplier */}
                  <p className="text-[11px] text-[#6B756B] mb-2">
                    المورد:{" "}
                    <span className="font-semibold text-brand-gold">
                      {item.supplier}
                    </span>
                  </p>
                </div>

                {/* Quantity + Total */}
                <div className="flex items-center justify-between gap-1 mb-3">
                  <div className="flex items-center gap-0.5 border border-[#D9BD96] bg-white rounded-lg p-0.5">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, -1)}
                      disabled={quantity <= 1}
                      aria-label="تقليل الكمية"
                      className="w-6 h-7 flex items-center justify-center rounded text-brand-dark hover:bg-[#F3E5D0] disabled:opacity-40 transition-colors"
                    >
                      <Minus size={12} />
                    </button>

                    <input
                      type="number"
                      inputMode="numeric"
                      min="1"
                      step="1"
                      value={quantities[item.id]}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                      onBlur={() => {
                        setQuantities((prev) => ({
                          ...prev,
                          [item.id]: Math.max(
                            1,
                            Math.floor(Number(prev[item.id]) || 1)
                          ),
                        }));
                      }}
                      aria-label={`كمية ${item.title}`}
                      className="w-8 min-w-0 text-center text-xs font-bold text-brand-dark outline-none bg-transparent"
                    />

                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, 1)}
                      aria-label="زيادة الكمية"
                      className="w-6 h-7 flex items-center justify-center rounded bg-[#F3E5D0] text-brand-dark hover:bg-[#D9BD96] transition-colors"
                    >
                      <Plus size={12} />
                    </button>
                  </div>

                  {/* Total */}
                  <div className="text-left min-w-0">
                    <p className="text-[10px] text-[#6B756B]">الإجمالي</p>
                    <p className="text-xs font-extrabold text-brand-gold whitespace-nowrap">
                      {(item.price * quantity).toFixed(2)} ج.م
                    </p>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  type="button"
                  onClick={() => handleAddToCart(item)}
                  className="bg-brand-dark text-white text-xs font-bold py-2 rounded-xl flex items-center justify-center gap-1.5 w-full hover:bg-brand-gold transition-colors duration-300"
                >
                  <ShoppingCart size={14} />
                  <span>أضف للسلة</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
