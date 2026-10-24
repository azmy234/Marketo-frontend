import { useState } from "react";
import {
  Factory,
  Warehouse,
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Building,
  Sparkles,
  Navigation,
} from "lucide-react";

// بيانات مراكز التوزيع والمصانع والمخازن التابعة للمنصة
const facilitiesList = [
  {
    id: 1,
    name: "مخزن طلخا المركزي (المقر الرئيسي)",
    type: "مخزن رئيسي للجملة",
    city: "الدقهلية - طلخا",
    address: "منطقة المحطة، بجوار السكة الحديد، طلخا",
    manager: "أحمد إبراهيم (إدارة اللوجستيات)",
    phone: "050-2541230 / 01098765432",
    workingHours: "السبت - الخميس: 8 صباحاً - 10 مسائاً",
    capacity: "تخزين ضخم (أكثر من 5000 طن بضائع)",
    status: "يعمل بكامل الطاقة",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80",
    features: [
      "تجهيز الطلبات الفورية",
      "شحن مباشر لمحافظات الدلتا",
      "تحميل سيارات النصف نقل والتوصيل",
    ],
  },
  {
    id: 2,
    name: "مركز توزيع المنصورة (فرع غرب)",
    type: "مركز توزيع فرعي",
    city: "الدقهلية - المنصورة",
    address: "شارع عبد السلام عارف، أمام الموقف الجديد",
    manager: "محمود عبد الله",
    phone: "050-2314560 / 01012345678",
    workingHours: "على مدار 24 ساعة (مناوبات)",
    capacity: "تخزين متوسط (سلع سريعة الحركة)",
    status: "يعمل بكامل الطاقة",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=500&q=80",
    features: [
      "استلام فوري للطلبات أونلاين",
      "خدمة استلام التجار (Self-Pickup)",
      "تغطية مناطق مدينة المنصورة وضواحيها",
    ],
  },
  {
    id: 3,
    name: "مستودع السلع الغذائية والزيوت الجافة",
    type: "مستودع بضائع جافة",
    city: "الدقهلية - طلخا الصناعية",
    address: "المنطقة الصناعية بطلخا، قطعة 42",
    manager: "مهندس حسن رجب",
    phone: "01055544332",
    workingHours: "السبت - الخميس: 9 صباحاً - 6 مساءً",
    capacity: "تخزين استراتيجي للزيوت والحبوب",
    status: "مخزون مكتمل",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=500&q=80",
    features: [
      "تخزين آمن ومحكم للحبوب والزيوت",
      "إشراف جودة دائم",
      "توريدات مباشرة لكبرى الهايبرات",
    ],
  },
  {
    id: 4,
    name: "محطة فرز وتعبئة البقوليات والأرز",
    type: "محطة تصنيع وتغليف",
    city: "الدقهلية - نبروه",
    address: "طريق نبروه الرئيسي",
    manager: "سامح الشناوي",
    phone: "01022334455",
    workingHours: "السبت - الخميس: 7 صباحاً - 5 مساءً",
    capacity: "خطوط تعبئة آلية حديثة",
    status: "تشغيل جزئي",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=500&q=80",
    features: [
      "تعبئة أكياس وكرتونات الجملة",
      "فحص نقاوة الأرز والبقوليات",
      "معايير سلامة غذائية معتمدة",
    ],
  },
];

const EntitiesFactoriesPage = () => {
  const [selectedCity, setSelectedCity] = useState("الكل");

  const cities = ["الكل", ...new Set(facilitiesList.map((f) => f.city))];

  const filteredFacilities = facilitiesList.filter(
    (facility) => selectedCity === "الكل" || facility.city === selectedCity
  );

  return (
    <div
      dir="rtl"
      className="w-full font-cairo bg-[#FBF9F5] min-h-[85vh]  px-3 sm:px-6 lg:px-12 pb-5"
    >
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        {/* 1. Hero Banner */}
        <div className="bg-brand-dark text-white rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-xl border border-brand-gold/30">
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold bg-brand-gold/10 border border-brand-gold/30 px-3 py-1 rounded-full">
              <Sparkles size={14} />
              البنية التحتية وسلاسل الإمداد
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
              مراكز التوزيع، المخازن والمصانع الرئيسية لـ Marketo
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              ندير شبكة متكاملة من المخازن والمستودعات في طلخا ومحافظة الدقهلية
              لضمان سرعة تجهيز وشحن طلبيات الجملة لمحلاتك وسوبرماركتك في أقل وقت
              ممكن.
            </p>
          </div>

          <div className="absolute top-1/2 left-6 -translate-y-1/2 opacity-10 pointer-events-none hidden md:block">
            <Warehouse size={260} />
          </div>
        </div>

        {/* 2. Filter Tabs by City */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-brand-dark flex items-center gap-2">
                <Factory size={22} className="text-brand-gold" />
                <span>
                  المخازن والمراكز المتاحة ({filteredFacilities.length})
                </span>
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                تصفح مواقع المخازن الرئيسية ومواعيد العمل وطرق التواصل المباشر.
              </p>
            </div>

            {/* City Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
              {cities.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => setSelectedCity(city)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                    selectedCity === city
                      ? "bg-brand-dark text-white shadow-sm"
                      : "bg-white text-gray-600 border border-gray-100 hover:bg-gray-50"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Facilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:border-brand-gold/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Facility Image & Status Badge */}
                <div className="relative h-48 w-full bg-[#F8F1E7] overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-lienar-to-t from-black/60 via-transparent to-transparent" />

                  <span className="absolute top-3 right-3 bg-brand-gold text-brand-dark text-[11px] font-black px-3 py-1 rounded-full shadow-md">
                    {facility.type}
                  </span>

                  <span className="absolute bottom-3 right-3 text-white text-xs font-bold flex items-center gap-1 bg-black/40 backdrop-blur-md px-3 py-1 rounded-xl">
                    <CheckCircle2 size={14} className="text-green-400" />
                    <span>{facility.status}</span>
                  </span>
                </div>

                {/* Details Section */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div>
                    <h3 className="font-black text-lg text-brand-dark mb-1">
                      {facility.name}
                    </h3>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <MapPin size={14} className="text-brand-gold shrink-0" />
                      <span>{facility.address}</span>
                    </p>
                  </div>

                  {/* Info Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#FBF9F5] p-3.5 rounded-2xl text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock size={15} className="text-brand-gold shrink-0" />
                      <span className="truncate">{facility.workingHours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={15} className="text-brand-gold shrink-0" />
                      <span className="font-bold text-brand-dark" dir="ltr">
                        {facility.phone}
                      </span>
                    </div>
                  </div>

                  {/* Features / Capabilities */}
                  <div className="space-y-2 pt-1">
                    <h4 className="text-xs font-bold text-brand-dark">
                      مميزات المركز:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {facility.features.map((feat, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-semibold bg-[#F8F1E7] text-brand-dark px-2.5 py-1 rounded-lg border border-[#D9BD96]/30"
                        >
                          ✓ {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="px-5 sm:px-6 pb-6 pt-0">
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-500">
                  <span>
                    المسؤول:{" "}
                    <strong className="text-brand-dark">
                      {facility.manager}
                    </strong>
                  </span>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      facility.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-brand-gold hover:underline"
                  >
                    <Navigation size={14} />
                    <span>عرض على الخريطة</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Logistics Summary Bottom Box */}
        <div className="bg-white rounded-3xl border border-[#D9BD96]/40 p-6 sm:p-10 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2 p-4 rounded-2xl bg-[#FBF9F5]">
            <div className="w-12 h-12 bg-[#F8F1E7] rounded-full flex items-center justify-center mx-auto text-brand-gold">
              <Truck size={24} />
            </div>
            <h4 className="font-black text-sm text-brand-dark">
              أسرع أسطول توصيل
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              أسطول سيارات نقل مجهز لتغطية طلبيات الجملة في طلخا والمنصورة وجميع
              مراكز الدلتا.
            </p>
          </div>

          <div className="space-y-2 p-4 rounded-2xl bg-[#FBF9F5]">
            <div className="w-12 h-12 bg-[#F8F1E7] rounded-full flex items-center justify-center mx-auto text-brand-gold">
              <ShieldCheck size={24} />
            </div>
            <h4 className="font-black text-sm text-brand-dark">
              تخزين بمواصفات قياسية
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              مستودعات جافة ومكيفة تحفظ جودة السلع الغذائية والزيوت والمنتجات
              حتى وصولها لمحلك.
            </p>
          </div>

          <div className="space-y-2 p-4 rounded-2xl bg-[#FBF9F5]">
            <div className="w-12 h-12 bg-[#F8F1E7] rounded-full flex items-center justify-center mx-auto text-brand-gold">
              <Building size={24} />
            </div>
            <h4 className="font-black text-sm text-brand-dark">
              استلام فوري (Pickup)
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              إمكانية تجهيز طلبيتك وحجزها للاستلام المباشر من مخزن طلخا المركزي
              لتوفير وقت الشحن.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntitiesFactoriesPage;
