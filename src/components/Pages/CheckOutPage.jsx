import { useState } from "react";
import { Link } from "react-router-dom";

import {
  CheckCircle2,
  ShieldCheck,
  Truck,
  ArrowRight,
  MapPin,
  Phone,
  User,
  FileText,
  CreditCard,
  ShoppingBag,
} from "lucide-react";

const CheckoutPage = () => {
  // بيانات تجريبية مؤقتة لملخص الطلب
  const [cartItems] = useState([
    {
      id: 4,
      title: "أرز فاخر 5 كجم - جملة",
      price: 285.0,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 5,
      title: "مرقة دجاج ماجي",
      price: 450.0,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=300&q=80",
    },
  ]);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shippingFee = subtotal > 2000 || subtotal === 0 ? 0 : 50;
  const grandTotal = subtotal + shippingFee;

  // حالة تأكيد الطلب ورقمه
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  // بيانات العميل
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "الدقهلية - طلخا",
    address: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // توليد الرقم عند تأكيد الطلب بدلًا من أثناء الـ render
    const newOrderNumber = Math.floor(100000 + Math.random() * 900000);

    setOrderNumber(String(newOrderNumber));
    setIsSubmitted(true);
  };

  // شاشة نجاح الطلب
  if (isSubmitted) {
    return (
      <div
        dir="rtl"
        className="w-full font-cairo bg-[#FBF9F5] min-h-[85vh] py-12 px-4 flex items-center justify-center"
      >
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#D9BD96]/30 shadow-xl max-w-lg w-full text-center space-y-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-600 shadow-inner">
            <CheckCircle2 className="w-8 h-8 sm:w-11 sm:h-11" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-brand-gold bg-[#F8F1E7] px-3 py-1 rounded-full inline-block">
              رقم الطلب: #MKT-{orderNumber}
            </span>

            <h1 className="text-xl sm:text-2xl font-black text-brand-dark">
              تم تقديم طلب الجملة بنجاح!
            </h1>

            <p className="text-xs text-gray-500 leading-relaxed max-w-sm mx-auto">
              شكراً لثقتك بـ Marketo. تم استلام طلبك وتجهيزه للمراجعة، وسيتم
              التواصل معك قريباً عبر الهاتف لتأكيد موعد التوصيل.
            </p>
          </div>

          <div className="pt-2">
            <Link
              to="/"
              className="inline-block w-full bg-brand-dark text-white py-3.5 rounded-xl text-xs sm:text-sm font-bold hover:bg-brand-gold transition-colors shadow-md"
            >
              العودة للصفحة الرئيسية
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      dir="rtl"
      className="w-full font-cairo bg-[#FBF9F5] min-h-[85vh] py-6 sm:py-8 px-3 sm:px-6 lg:px-12 pb-24 lg:pb-8"
    >
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Header Breadcrumb & Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-gray-200/60 pb-4">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-500 mb-1">
              <Link to="/" className="hover:text-brand-dark transition-colors">
                الرئيسية
              </Link>

              <span>/</span>

              <Link
                to="/CartPage"
                className="hover:text-brand-dark transition-colors"
              >
                السلة
              </Link>

              <span>/</span>

              <span className="text-brand-dark font-bold">إتمام الطلب</span>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-brand-dark">
              إتمام طلب الجملة (Checkout)
            </h1>
          </div>

          <Link
            to="/cart"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark bg-white border border-[#D9BD96]/60 px-3.5 py-2 rounded-xl hover:bg-[#F8F1E7] transition-all duration-300 w-fit shadow-xs"
          >
            <ArrowRight size={14} className="text-brand-gold" />
            <span>العودة لتعديل السلة</span>
          </Link>
        </div>

        <form
          id="checkout-form"
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
        >
          {/* Main Form Section */}
          <div className="lg:col-span-7 space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 md:p-8 shadow-sm space-y-5">
              <h2 className="text-xs sm:text-sm font-black text-brand-dark pb-3 border-b border-gray-100 flex items-center gap-2">
                <MapPin size={18} className="text-brand-gold shrink-0" />
                <span>بيانات المستلم وعنوان التوصيل</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 text-xs">
                {/* Full Name */}
                <div className="space-y-1.5 md:col-span-2">
                  <label
                    htmlFor="fullName"
                    className="font-bold text-brand-dark flex items-center gap-1 text-[11px] sm:text-xs"
                  >
                    <User size={13} className="text-brand-gold shrink-0" />
                    <span>
                      الاسم الكامل أو اسم النشاط التجاري (سوبر ماركت / شركة):
                    </span>
                  </label>

                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    required
                    placeholder="مثال: أسواق النور الجملة"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 sm:py-3 text-brand-dark outline-none focus:border-brand-gold transition-colors text-xs"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5 md:col-span-2">
                  <label
                    htmlFor="phone"
                    className="font-bold text-brand-dark flex items-center gap-1 text-[11px] sm:text-xs"
                  >
                    <Phone size={13} className="text-brand-gold shrink-0" />
                    <span>رقم الهاتف الأساسي للتواصل (واتساب / اتصال):</span>
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    placeholder="01000000000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 sm:py-3 text-brand-dark outline-none focus:border-brand-gold transition-colors text-xs"
                  />
                </div>

                {/* City */}
                <div className="space-y-1.5 md:col-span-2">
                  <label
                    htmlFor="city"
                    className="font-bold text-brand-dark flex items-center gap-1 text-[11px] sm:text-xs"
                  >
                    <MapPin size={13} className="text-brand-gold shrink-0" />
                    <span>المحافظة والمنطقة / المركز:</span>
                  </label>

                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 sm:py-3 text-brand-dark outline-none focus:border-brand-gold transition-colors text-xs"
                  >
                    <option value="الدقهلية - طلخا">
                      الدقهلية - طلخا (المخزن الرئيسي)
                    </option>

                    <option value="الدقهلية - المنصورة">
                      الدقهلية - المنصورة
                    </option>

                    <option value="الدقهلية - نبروه">الدقهلية - نبروه</option>

                    <option value="محافظات مجاورة">
                      محافظات الدلتا المجاورة
                    </option>
                  </select>
                </div>

                {/* Detailed Address */}
                <div className="space-y-1.5 md:col-span-2">
                  <label
                    htmlFor="address"
                    className="font-bold text-brand-dark flex items-center gap-1 text-[11px] sm:text-xs"
                  >
                    <FileText size={13} className="text-brand-gold shrink-0" />
                    <span>العنوان التفصيلي (الشارع، رقم العمارة، الطابق):</span>
                  </label>

                  <textarea
                    id="address"
                    name="address"
                    required
                    rows={2}
                    placeholder="اكتب العنوان بوضوح لضمان سرعة وصول المندوب..."
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 sm:py-3 text-brand-dark outline-none focus:border-brand-gold transition-colors resize-none text-xs"
                  />
                </div>
              </div>
            </div>

            {/* Payment Option Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 md:p-8 shadow-sm space-y-3.5">
              <h2 className="text-xs sm:text-sm font-black text-brand-dark pb-3 border-b border-gray-100 flex items-center gap-2">
                <CreditCard size={18} className="text-brand-gold shrink-0" />
                <span>طريقة الدفع المتاحة</span>
              </h2>

              <div className="p-3.5 sm:p-4 rounded-xl border-2 border-brand-gold bg-[#F8F1E7] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start sm:items-center gap-3">
                  <div className="w-5 h-5 rounded-full border-4 border-brand-dark bg-white flex items-center justify-center shrink-0 mt-0.5 sm:mt-0" />

                  <div>
                    <h4 className="font-bold text-xs text-brand-dark">
                      الدفع النقدي عند الاستلام (COD)
                    </h4>

                    <p className="text-[11px] text-gray-500 mt-0.5">
                      ادفع نقداً للمندوب فور استلام وفحص بضاعة الجملة.
                    </p>
                  </div>
                </div>

                <span className="text-[10px] sm:text-xs font-extrabold text-brand-gold bg-white px-2.5 py-1 rounded-md shadow-xs w-fit self-end sm:self-center">
                  موصى به
                </span>
              </div>
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="lg:col-span-5 space-y-6 sticky top-28">
            <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 shadow-sm space-y-5">
              <h2 className="text-xs sm:text-sm font-black text-brand-dark pb-3 border-b border-gray-100 flex items-center justify-between">
                <span>مراجعة منتجات الطلب</span>

                <span className="text-xs font-bold text-brand-gold bg-[#F8F1E7] px-2.5 py-0.5 rounded-full">
                  {cartItems.length} أصناف
                </span>
              </h2>

              {/* Items Summary List */}
              <div className="space-y-3 max-h-48 sm:max-h-56 overflow-y-auto pr-1">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between text-xs gap-3 pb-2 border-b border-gray-50 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-10 h-10 bg-[#F8F1E7] rounded-lg p-1 shrink-0 flex items-center justify-center border border-[#D9BD96]/30">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>

                      <div className="min-w-0">
                        <h4 className="font-bold text-brand-dark truncate text-[11px] sm:text-xs">
                          {item.title}
                        </h4>

                        <span className="text-[10px] text-gray-400 block">
                          الكمية: {item.quantity}
                        </span>
                      </div>
                    </div>

                    <span className="font-black text-brand-dark shrink-0 text-xs">
                      {(item.price * item.quantity).toFixed(2)} ج.م
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals Box */}
              <div className="space-y-2 pt-3 border-t border-gray-100 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>المجموع الفرعي:</span>

                  <span className="font-bold text-brand-dark">
                    {subtotal.toFixed(2)} ج.م
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>مصاريف الشحن:</span>

                  <span className="font-bold text-brand-dark">
                    {shippingFee === 0 ? (
                      <span className="text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded text-[11px]">
                        مجاني
                      </span>
                    ) : (
                      `${shippingFee.toFixed(2)} ج.م`
                    )}
                  </span>
                </div>

                <div className="flex justify-between pt-3 border-t border-gray-100 text-xs sm:text-sm font-black text-brand-dark">
                  <span>الإجمالي النهائي:</span>

                  <span className="text-brand-gold text-base sm:text-lg font-black">
                    {grandTotal.toFixed(2)} ج.م
                  </span>
                </div>
              </div>

              {/* Desktop Submit Button */}
              <button
                type="submit"
                disabled={cartItems.length === 0}
                className="hidden lg:flex w-full bg-brand-dark text-white py-3.5 rounded-xl font-black text-xs md:text-sm items-center justify-center gap-2 hover:bg-brand-gold shadow-lg shadow-brand-dark/10 transition-all duration-300 disabled:opacity-50"
              >
                <span>تأكيد وإرسال الطلب نهائياً</span>
              </button>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-2 pt-2 text-[10px] sm:text-[11px] text-gray-500 border-t border-gray-100">
                <div className="flex items-center gap-1.5">
                  <Truck size={14} className="text-brand-gold shrink-0" />
                  <span>توصيل سريع ومضمون</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-brand-gold shrink-0" />
                  <span>ضمان فحص المنتجات</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Sticky Bottom Action Bar for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-40 shadow-2xl flex items-center justify-between gap-3 font-cairo">
        <div>
          <span className="text-[10px] text-gray-500 block">
            الإجمالي النهائي
          </span>

          <span className="text-sm font-black text-brand-gold">
            {grandTotal.toFixed(2)} ج.م
          </span>
        </div>

        <button
          type="submit"
          form="checkout-form"
          disabled={cartItems.length === 0}
          className="bg-brand-dark text-white text-xs font-bold px-5 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-gold transition-colors disabled:opacity-50 shadow-md"
        >
          <ShoppingBag size={15} />
          <span>تأكيد الطلب الآن</span>
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
