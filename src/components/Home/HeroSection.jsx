import { Users, Package, ShieldCheck, ArrowLeft } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full font-cairo  dir-rtl">
      {/* البانر الرئيسي بعرض الشاشة بالكامل مع تدرج نصف ونصف */}
      <div className="w-full relative transition-opacity overflow-hidden shadow-lg min-h-105 md:min-h-120 flex items-center ">
        {/* صورة الخلفية الكاملة */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80')`,
          }}
        />

        {/* طبقة التدرج اللوني - متوافقة مع Tailwind الحديثة */}
        <div className="absolute inset-0 bg-linear-to-b md:bg-linear-to-l from-[#1e3a2b]/90 via-[#1e3a2b]/85 to-transparent md:from-[#1e3a2b] md:via-[#1e3a2b] md:via-40% md:to-transparent" />
        {/* محتوى الهيدر والإنترو (مع مسافة أمان جانبية) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-12 flex">
          <div className="w-full md:w-1/2 py-8 text-right text-white">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
              سوق الجملة الغذائي <br />
              <span className="text-[#d4a359]">الأول في مصر</span>
            </h1>
            <p className="text-gray-200 text-sm md:text-base mb-6 leading-relaxed">
              نوفر لك كل ما تحتاجه من المنتجات الغذائية بجودة عالية وأسعار
              تنافسية.
            </p>

            {/* نقاط المميزات السريعة */}
            <div className="flex flex-wrap gap-4 mb-8 text-xs md:text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#d4a359]" />
                <span>أسعار جملة مباشرة من الموردين</span>
              </div>
              <div className="flex items-center gap-2">
                <Package size={18} className="text-[#d4a359]" />
                <span>منتجات متنوعة من كل القطاعات</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={18} className="text-[#d4a359]" />
                <span>أكثر من 50,000 عميل نشط</span>
              </div>
            </div>

            {/* أزرار الدعوة للإجراء (CTA) */}
            <div className="flex items-center gap-4">
              <button className="bg-[#d4a359] text-[#1e3a2b] font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-[#c29248] transition shadow-md">
                <span>ابدأ التسوق</span>
                <ArrowLeft size={18} />
              </button>

              <button className="bg-white text-[#1e3a2b] font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition shadow-md">
                تصفح الموردين
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* كروت الإحصائيات والأرقام (محدودة بـ max-w-7xl لتكون متناسقة في المنتصف) */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
            <h3 className="text-2xl font-black text-[#1e3a2b] mb-1">27</h3>
            <p className="text-xs text-gray-500 font-medium">
              محافظة يتم التوصيل إليها
            </p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
            <h3 className="text-2xl font-black text-[#1e3a2b] mb-1">+25,000</h3>
            <p className="text-xs text-gray-500 font-medium">عميل تجاري</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
            <h3 className="text-2xl font-black text-[#1e3a2b] mb-1">+50,000</h3>
            <p className="text-xs text-gray-500 font-medium">منتج متاح</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 text-center">
            <h3 className="text-2xl font-black text-[#1e3a2b] mb-1">+500</h3>
            <p className="text-xs text-gray-500 font-medium">مورد معتمد</p>
          </div>
        </div>
      </div>
    </section>
  );
}
