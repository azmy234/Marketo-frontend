import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingCart,
  ArrowRight,
  ShieldCheck,
  Truck,
  Store,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

const CartPage = () => {
  // بيانات تجريبية مؤقتة محلية داخل الصفحة
  const [cartItems, setCartItems] = useState([
    {
      id: 4,
      title: "أرز فاخر 5 كجم - جملة",
      supplier: "شركة عافية",
      pack: "كرتونة (4 قطع)",
      price: 285.0,
      quantity: 2,
      moq: 1,
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 5,
      title: "مرقة دجاج ماجي",
      supplier: "شركة عافية",
      pack: "24 × جم",
      price: 450.0,
      quantity: 1,
      moq: 1,
      image:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=300&q=80",
    },
  ]);

  const updateQuantity = (id, amount) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(item.moq || 1, item.quantity + amount);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingFee = subtotal > 2000 || subtotal === 0 ? 0.0 : 50.0;
  const grandTotal = subtotal + shippingFee;

  const freeShippingThreshold = 2000;
  const progressToFreeShipping = Math.min(
    100,
    (subtotal / freeShippingThreshold) * 100
  );

  return (
    <div
      dir="rtl"
      className="w-full font-cairo bg-[#FBF9F5] min-h-[85vh] py-8 px-4 md:px-12"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200/60 pb-5">
          <div>
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
              <Link to="/" className="hover:text-brand-dark transition-colors">
                الرئيسية
              </Link>
              <span>/</span>
              <span className="text-brand-dark font-bold">سلة المشتريات</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-brand-dark flex items-center gap-2.5">
              <span>سلة مشتريات الجملة</span>
              <span className="bg-[#F3E5D0] text-brand-dark text-xs font-bold px-2.5 py-1 rounded-full">
                {cartItems.length} أصناف
              </span>
            </h1>
          </div>

          <Link
            to="/ProductsPage"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark bg-white border border-[#D9BD96]/60 px-4 py-2.5 rounded-xl hover:bg-[#F8F1E7] transition-all duration-300 w-fit shadow-sm"
          >
            <ArrowRight size={15} className="text-brand-gold" />
            <span>متابعة تصفح المنتجات</span>
          </Link>
        </div>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-white rounded-2xl border border-[#D9BD96]/40 p-4 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-brand-dark flex items-center gap-1.5">
                    <Truck size={16} className="text-brand-gold" />
                    {subtotal >= freeShippingThreshold ? (
                      <span className="text-green-600 font-extrabold">
                        تهانينا! لقد حصلت على شحن مجاني لطلبك 🎉
                      </span>
                    ) : (
                      <span>
                        أضف منتجات بقيمة{" "}
                        <strong className="text-brand-gold">
                          {(freeShippingThreshold - subtotal).toFixed(2)} ج.م
                        </strong>{" "}
                        إضافية للحصول على شحن مجاني
                      </span>
                    )}
                  </span>
                  <span className="text-gray-400">
                    {progressToFreeShipping.toFixed(0)}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-brand-gold h-full transition-all duration-500 rounded-full"
                    style={{ width: `${progressToFreeShipping}%` }}
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-4 md:p-6 shadow-sm space-y-4">
                <div className="divide-y divide-gray-100 space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="pt-4 first:pt-0 flex flex-col sm:flex-row items-center justify-between gap-4 group"
                    >
                      <div className="flex items-center gap-4 w-full sm:w-auto">
                        <div className="w-24 h-24 bg-[#F8F1E7] rounded-xl p-2 shrink-0 flex items-center justify-center border border-[#D9BD96]/30 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold text-brand-gold bg-[#F8F1E7] px-2.5 py-0.5 rounded-md">
                            {item.pack || "كرتونة جملة"}
                          </span>
                          <h3 className="font-bold text-sm text-brand-dark leading-snug">
                            {item.title}
                          </h3>
                          <p className="text-xs text-gray-500 flex items-center gap-1">
                            <Store size={13} className="text-brand-gold" />
                            المورد:{" "}
                            <strong className="text-gray-700">
                              {item.supplier}
                            </strong>
                          </p>
                          <span className="text-xs font-black text-brand-dark block pt-0.5">
                            {item.price.toFixed(2)} ج.م{" "}
                            <span className="text-[10px] text-gray-400 font-normal">
                              / للوحدة
                            </span>
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0">
                        <div className="flex items-center gap-1 border border-[#D9BD96] bg-[#FBF9F5] rounded-xl p-1 shadow-inner">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            disabled={item.quantity <= (item.moq || 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg text-brand-dark hover:bg-[#F3E5D0] disabled:opacity-30 transition-colors"
                          >
                            <Minus size={13} />
                          </button>
                          <span className="w-8 text-center text-xs font-black text-brand-dark">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#F3E5D0] text-brand-dark hover:bg-[#D9BD96] transition-colors"
                          >
                            <Plus size={13} />
                          </button>
                        </div>

                        <div className="text-left min-w-22.5">
                          <span className="text-xs text-gray-400 block">
                            الإجمالي
                          </span>
                          <span className="text-sm font-black text-brand-dark">
                            {(item.price * item.quantity).toFixed(2)} ج.م
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-300 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 transition-colors"
                          title="حذف المنتج"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6 sticky top-28">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm space-y-5">
                <h2 className="text-sm font-black text-brand-dark pb-3 border-b border-gray-100 flex items-center justify-between">
                  <span>ملخص الفاتورة</span>
                  <Sparkles size={16} className="text-brand-gold" />
                </h2>

                <div className="space-y-3 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span>المجموع الفرعي للمنتجات:</span>
                    <span className="font-bold text-brand-dark">
                      {subtotal.toFixed(2)} ج.م
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>مصاريف الشحن والتوصيل:</span>
                    <span className="font-bold text-brand-dark">
                      {shippingFee === 0 ? (
                        <span className="text-green-600 font-extrabold bg-green-50 px-2 py-0.5 rounded">
                          مجاني
                        </span>
                      ) : (
                        `${shippingFee.toFixed(2)} ج.م`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between pt-4 border-t border-gray-100 text-sm font-black text-brand-dark">
                    <span>الإجمالي النهائي:</span>
                    <span className="text-brand-gold text-lg font-black">
                      {grandTotal.toFixed(2)} ج.م
                    </span>
                  </div>
                </div>

                <Link
                  to="/CheckOutPage"
                  className="w-full bg-brand-dark text-white py-4 rounded-xl font-black text-xs md:text-sm flex items-center justify-center gap-2 hover:bg-brand-gold shadow-lg shadow-brand-dark/10 transition-all duration-300"
                >
                  <span>متابعة إتمام الطلب وتأكيد الشحن</span>
                  <ArrowLeft size={16} />
                </Link>

                <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] text-gray-500 border-t border-gray-100">
                  <div className="flex items-center gap-1.5">
                    <Truck size={14} className="text-brand-gold shrink-0" />
                    <span>توصيل سريع لمحافظات الدلتا</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck
                      size={14}
                      className="text-brand-gold shrink-0"
                    />
                    <span>ضمان الجودة والدفع عند الاستلام</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-5 max-w-xl mx-auto my-6">
            <div className="w-20 h-20 bg-[#F8F1E7] rounded-full flex items-center justify-center mx-auto text-brand-gold shadow-inner">
              <ShoppingCart size={40} />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-black text-brand-dark">
                سلة المشتريات فارغة تماماً!
              </h2>
              <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed">
                لم تقم بإضافة أي منتجات جملة للسلة بعد. استعرض أقسام السلع
                الغذائية والزيوت والحبوب وابدأ بإضافة طلبك الأول.
              </p>
            </div>
            <Link
              to="/ProductsPage"
              className="inline-flex items-center gap-2 bg-brand-dark text-white text-xs font-bold py-3.5 px-8 rounded-xl hover:bg-brand-gold transition-colors shadow-md"
            >
              <span>استعراض قائمة المنتجات</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
