import { ArrowLeft, ShoppingCart, Star, Plus, Minus } from "lucide-react";
import { useState } from "react";

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
  const [favorites, setFavorites] = useState([]);
  const [quantities, setQuantities] = useState(
    Object.fromEntries(offers.map((item) => [item.id, 1]))
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
    const quantity = Math.max(1, Number(quantities[item.id]) || 1);

    console.log("Added to cart:", {
      product: item,
      quantity,
      total: item.price * quantity,
    });
  };

  return (
    <section dir="rtl" className="w-full font-cairo py-6 px-4 md:px-12 ">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-extrabold text-brand-dark flex items-center gap-2">
            <span className="w-1.5 h-6 bg-brand-gold rounded-full inline-block" />
            عروض خاصة
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
          {offers.map((item) => {
            const quantity = Math.max(1, Number(quantities[item.id]) || 1);
            const isFavorite = favorites.includes(item.id);

            return (
              <div
                key={item.id}
                className="group bg-white rounded-xl p-3 border border-[#D9BD96]/60 shadow-sm flex flex-col justify-between relative transition-all duration-300 hover:border-brand-gold hover:shadow-md"
              >
                {/* Discount Badge */}
                <span className="absolute top-3 right-3 z-10 bg-brand-gold text-white text-[11px] font-bold px-2 py-1 rounded-md">
                  {item.discount}
                </span>

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
                <div className="w-full h-28 my-1 overflow-hidden rounded-lg flex items-center justify-center bg-[#F8F1E7]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Product Details */}
                <div>
                  <h3 className="font-bold text-xs text-brand-dark line-clamp-2 min-h-8">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#6B756B] mb-2">
                    المورد:{" "}
                    <span className="font-semibold text-brand-gold">
                      {item.supplier}
                    </span>
                  </p>

                  <p className="text-[11px] text-[#6B756B] mb-1">{item.pack}</p>

                  <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                    <span className="text-sm font-extrabold text-brand-dark">
                      {item.price.toFixed(2)} ج.م
                    </span>

                    <span className="text-[11px] text-[#8A8A80] line-through">
                      {item.oldPrice.toFixed(2)} ج.م
                    </span>
                  </div>

                  <p className="text-[10px] text-[#6B756B] mb-2">{item.moq}</p>
                </div>

                {/* Quantity + Total */}
                <div className="flex items-center justify-between gap-1 mb-3">
                  {/* Quantity Controls */}
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

                {/* Add to Cart */}
                <button
                  type="button"
                  onClick={() => handleAddToCart(item)}
                  className="bg-brand-dark text-white text-xs font-bold py-2.5 rounded-lg flex items-center justify-center gap-1.5 w-full hover:bg-brand-gold transition-colors duration-300"
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
