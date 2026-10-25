import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Plus, Minus, Heart } from "lucide-react";

export default function ProductCard({ item }) {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  const updateQuantity = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setQuantity("");
    } else if (/^\d+$/.test(value)) {
      setQuantity(Math.max(1, Number(value)));
    }
  };

  const handleBlur = () => {
    if (quantity === "" || isNaN(quantity)) {
      setQuantity(1);
    }
  };

  const handleAddToCart = () => {
    const finalQty = Math.max(1, Number(quantity) || 1);
    console.log("Added to cart:", {
      product: item,
      quantity: finalQty,
      total: item.price * finalQty,
    });
  };

  const currentQty = Math.max(1, Number(quantity) || 1);

  return (
    <div className="group bg-white rounded-xl p-3 border border-[#D9BD96]/60 shadow-sm flex flex-col justify-between relative transition-all duration-300 hover:border-brand-gold hover:shadow-md">
      {/* Discount Badge */}
      {item.discount && (
        <span className="absolute top-3 right-3 z-10 bg-brand-gold text-white text-[11px] font-bold px-2 py-1 rounded-md">
          {item.discount}
        </span>
      )}

      {/* Favorite Button */}
      <button
        type="button"
        onClick={toggleFavorite}
        aria-label={isFavorite ? "إزالة من المفضلة" : "إضافة إلى المفضلة"}
        className={`absolute top-3 left-3 z-10 rounded-full p-1.5 transition-colors ${
          isFavorite
            ? "bg-[#F3E5D0]/70 text-red-600"
            : "bg-[#F8F1E7] text-brand-dark hover:bg-[#F3E5D0]"
        }`}
      >
        <Heart size={23} fill={isFavorite ? "currentColor" : "none"} />
      </button>

      {/* Product Image */}
      <Link to="/ProductDetails">
        <div className="w-full h-28 my-1 overflow-hidden rounded-lg flex items-center justify-center bg-[#F8F1E7]">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Product Details */}
      <div>
        <h3 className="font-bold text-xs text-brand-dark line-clamp-2 min-h-8">
          {item.title}
        </h3>

        {/* Supplier */}
        <p className="text-[11px] text-[#6B756B] mb-2">
          المورد:{" "}
          <span className="font-semibold text-brand-gold">{item.supplier}</span>
        </p>

        {/* Pack Size */}
        {item.pack && (
          <p className="text-[11px] text-[#6B756B] mb-1">{item.pack}</p>
        )}

        {/* Price & Old Price */}
        <div className="flex items-baseline gap-2 mb-1 flex-wrap">
          <span className="text-sm font-extrabold text-brand-dark">
            {item.price.toFixed(2)} ج.م
          </span>

          {item.oldPrice && (
            <span className="text-[11px] text-[#8A8A80] line-through">
              {item.oldPrice.toFixed(2)} ج.م
            </span>
          )}
        </div>

        {/* MOQ */}
        {item.moq && (
          <p className="text-[10px] text-[#6B756B] mb-2">{item.moq}</p>
        )}
      </div>

      {/* Quantity + Total (تحت بعض على الموبايل flex-col، وبجانب بعض على الشاشات الكبيرة sm:flex-row) */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 bg-[#FBF9F5] sm:bg-transparent p-2 sm:p-0 rounded-xl">
        {/* Quantity Controls */}
        <div className="flex items-center justify-between sm:justify-start gap-0.5 border border-[#D9BD96] bg-white rounded-lg p-0.5 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => updateQuantity(-1)}
            disabled={currentQty <= 1}
            aria-label="تقليل الكمية"
            className="w-7 h-7 sm:w-6 sm:h-7 flex items-center justify-center rounded text-brand-dark hover:bg-[#F3E5D0] disabled:opacity-40 transition-colors"
          >
            <Minus size={12} />
          </button>

          <input
            type="number"
            inputMode="numeric"
            min="1"
            step="1"
            value={quantity}
            onChange={handleQuantityChange}
            onBlur={handleBlur}
            aria-label={`كمية ${item.title}`}
            className="w-full sm:w-12 min-w-0 text-center text-xs font-bold text-brand-dark outline-none bg-transparent"
          />

          <button
            type="button"
            onClick={() => updateQuantity(1)}
            aria-label="زيادة الكمية"
            className="w-7 h-7 sm:w-6 sm:h-7 flex items-center justify-center rounded bg-[#F3E5D0] text-brand-dark hover:bg-[#D9BD96] transition-colors"
          >
            <Plus size={12} />
          </button>
        </div>

        {/* Total */}
        <div className="flex sm:block items-center justify-between text-left min-w-0 px-1 sm:px-0">
          <p className="text-[10px] text-[#6B756B]">الإجمالي</p>
          <p className="text-xs font-extrabold text-brand-gold whitespace-nowrap">
            {(item.price * currentQty).toFixed(2)} ج.م
          </p>
        </div>
      </div>

      {/* Add to Cart */}
      <button
        type="button"
        onClick={handleAddToCart}
        className="bg-brand-dark text-white text-xs font-bold py-2.5 rounded-lg flex items-center justify-center gap-1.5 w-full hover:bg-brand-gold transition-colors duration-300 shadow-sm"
      >
        <ShoppingCart size={14} />
        <span>أضف للسلة</span>
      </button>
    </div>
  );
}
