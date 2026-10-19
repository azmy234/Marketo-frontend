import { ShieldCheck, Truck, Headphones, Tag, Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full font-cairo bg-brand-bg pt-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* 1. قسم مميزات الموقع (لماذا تختار MARKETO) */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-brand-dark mb-8">
            لماذا تختار MARKETO؟
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* ميزة 1 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-dark mb-3">
                <Award size={24} />
              </div>
              <h3 className="font-bold text-sm text-brand-dark mb-1">
                منتجات عالية الجودة
              </h3>
              <p className="text-xs text-gray-500">مختارة بعناية</p>
            </div>

            {/* ميزة 2 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-dark mb-3">
                <Truck size={24} />
              </div>
              <h3 className="font-bold text-sm text-brand-dark mb-1">
                توصيل سريع وآمن
              </h3>
              <p className="text-xs text-gray-500">لجميع المحافظات</p>
            </div>

            {/* ميزة 3 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-dark mb-3">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-bold text-sm text-brand-dark mb-1">
                جودة مضمونة
              </h3>
              <p className="text-xs text-gray-500">ومطابقة للمواصفات</p>
            </div>

            {/* ميزة 4 */}
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-dark mb-3">
                <Headphones size={24} />
              </div>
              <h3 className="font-bold text-sm text-brand-dark mb-1">
                دعم فني ومتابعة
              </h3>
              <p className="text-xs text-gray-500">على مدار الساعة</p>
            </div>

            {/* ميزة 5 */}
            <div className="flex flex-col items-center text-center p-4 col-span-2 sm:col-span-1">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-dark mb-3">
                <Tag size={24} />
              </div>
              <h3 className="font-bold text-sm text-brand-dark mb-1">
                أسعار جملة حقيقية
              </h3>
              <p className="text-xs text-gray-500">وتنافسية</p>
            </div>
          </div>
        </div>

        {/* 2. الشريط السفلي (حقوق الملكية وسياسات الموقع) */}
        <div className="border-t border-gray-300/60 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          {/* حقوق النشر واللوجو */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 bg-brand-dark rounded flex items-center justify-center text-brand-gold text-xs font-bold">
                M
              </div>
              <span className="font-bold text-brand-dark text-sm tracking-wider">
                MARKETO
              </span>
            </div>
            <span className="text-gray-400">|</span>
            <span>جميع الحقوق محفوظة. © 2025 MARKETO</span>
          </div>

          {/* روابط سياسة الموقع */}
          <div className="flex items-center gap-6">
            <span className="cursor-pointer hover:text-brand-dark transition">
              سياسة الخصوصية
            </span>
            <span className="cursor-pointer hover:text-brand-dark transition">
              الشروط والأحكام
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
