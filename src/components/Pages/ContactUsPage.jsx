import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  Headphones,
} from "lucide-react";

const ContactUsPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "استفسار عن طلب جملة",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      dir="rtl"
      className="w-full font-cairo bg-[#FBF9F5] min-h-[85vh]  px-3 sm:px-6 lg:px-12 pb-5"
    >
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        {/* 1. Hero Banner */}
        <div className="bg-brand-dark text-white rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-xl border border-brand-gold/30">
          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold bg-brand-gold/10 border border-brand-gold/30 px-3 py-1 rounded-full">
              <Headphones size={14} />
              دعم ومبيعات تجار الجملة
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
              نحن هنا دائماً لخدمة نشاطك التجاري وتلبية طلبياتك
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              فريق الدعم الفني وخدمة العملاء في{" "}
              <strong className="text-brand-gold">Marketo</strong> جاهز للإجابة
              على استفساراتكم حول الطلبيات، الأسعار، ومواعيد الشحن في طلخا
              والدقهلية ومحافظات الدلتا.
            </p>
          </div>

          <div className="absolute top-1/2 left-6 -translate-y-1/2 opacity-10 pointer-events-none hidden md:block">
            <MessageSquare size={260} />
          </div>
        </div>

        {/* 2. Main Content Grid (Contact Info Cards + Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Right Column: Contact Info & Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-base font-black text-brand-dark pb-3 border-b border-gray-100 flex items-center gap-2">
                <Sparkles size={18} className="text-brand-gold" />
                <span>قنوات التواصل المباشر</span>
              </h2>

              <div className="space-y-5 text-xs sm:text-sm">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-[#F8F1E7] rounded-xl flex items-center justify-center text-brand-gold shrink-0 border border-[#D9BD96]/30">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark text-xs">
                      رقم خدمة العملاء والمبيعات
                    </h3>
                    <p className="text-gray-600 font-semibold mt-0.5" dir="ltr">
                      +20 010 9876 5432
                    </p>
                    <span className="text-[10px] text-gray-400 block">
                      متاح يومياً من 8 ص إلى 10 م
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-[#F8F1E7] rounded-xl flex items-center justify-center text-brand-gold shrink-0 border border-[#D9BD96]/30">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark text-xs">
                      البريد الإلكتروني للشركات
                    </h3>
                    <p className="text-gray-600 font-semibold mt-0.5" dir="ltr">
                      support@marketo-b2b.com
                    </p>
                    <span className="text-[10px] text-gray-400 block">
                      للشكاوى والمقترحات وعقود التوريد
                    </span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-[#F8F1E7] rounded-xl flex items-center justify-center text-brand-gold shrink-0 border border-[#D9BD96]/30">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark text-xs">
                      العنوان الرئيسي والمخازن
                    </h3>
                    <p className="text-gray-600 font-semibold mt-0.5">
                      طلخا، محافظة الدقهلية، مصر (بجوار المحطة الرئيسية).
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-[#F8F1E7] rounded-xl flex items-center justify-center text-brand-gold shrink-0 border border-[#D9BD96]/30">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark text-xs">
                      مواعيد العمل الرسمية
                    </h3>
                    <p className="text-gray-600 font-semibold mt-0.5">
                      السبت وحتى الخميس (الجمعة إجازة المخازن).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Support Box */}
            <div className="bg-linear-to-l from-brand-dark to-[#242424] text-white rounded-3xl p-6 shadow-md flex items-center justify-between gap-4 border border-brand-gold/30">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-brand-gold bg-brand-gold/10 px-2.5 py-0.5 rounded-md">
                  تواصل فوري
                </span>
                <h3 className="text-sm font-black">
                  تحتاج رداً سريعاً عبر واتساب؟
                </h3>
                <p className="text-xs text-gray-300">
                  تحدث مع فريق المبيعات مباشرة.
                </p>
              </div>
              <a
                href="https://wa.me/201098765432"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold text-xs px-4 py-3 rounded-xl transition-colors shrink-0 shadow-md"
              >
                راسلنا واتساب
              </a>
            </div>
          </div>

          {/* Left Column: Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm space-y-6">
              {isSubmitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-600 shadow-inner">
                    <CheckCircle2 size={36} />
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-xl font-black text-brand-dark">
                      تم إرسال رسالتك بنجاح!
                    </h2>
                    <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
                      شكراً لتواصلك معنا. قام فريق خدمة العملاء باستلام رسالتك
                      وسيتم التواصل معك هاتفياً أو عبر واتساب خلال ساعات قليلة.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        subject: "استفسار عن طلب جملة",
                        message: "",
                      });
                    }}
                    className="bg-brand-dark text-white text-xs font-bold px-6 py-3 rounded-xl hover:bg-brand-gold transition-colors shadow-md mt-2"
                  >
                    إرسال رسالة أخرى
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-1 pb-3 border-b border-gray-100">
                    <h2 className="text-lg font-black text-brand-dark">
                      أرسل لنا استفسارك
                    </h2>
                    <p className="text-xs text-gray-500">
                      املأ النموذج أدناه وسيقوم فريق المبيعات بمراجعة طلبك والرد
                      عليك فوراً.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-bold text-brand-dark block">
                          الاسم الكريم / اسم النشاط:
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="مثال: سوبرماركت الأمل"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-brand-dark outline-none focus:border-brand-gold transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-bold text-brand-dark block">
                          رقم الهاتف الأساسي:
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="01000000000"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-brand-dark outline-none focus:border-brand-gold transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-brand-dark block">
                        موضوع الاستفسار:
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-brand-dark outline-none focus:border-brand-gold transition-colors"
                      >
                        <option value="استفسار عن طلب جملة">
                          استفسار عن طلب جملة حالي
                        </option>
                        <option value="طلب كميات ضخمة / مصانع">
                          طلب كميات ضخمة للهايبرماركت
                        </option>
                        <option value="مقترح انضمام كمورد">
                          رغبة في الانضمام كمورد
                        </option>
                        <option value="شكوى أو اقتراح">
                          شكوى أو مقترح لتطوير الخدمة
                        </option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-bold text-brand-dark block">
                        نص الرسالة أو الطلب:
                      </label>
                      <textarea
                        name="message"
                        required
                        rows="4"
                        placeholder="اكتب تفاصيل طلبك أو استفسارك بوضوح..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-brand-dark outline-none focus:border-brand-gold transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-dark text-white py-4 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-brand-gold shadow-lg shadow-brand-dark/10 transition-all duration-300"
                    >
                      <Send size={16} />
                      <span>إرسال الرسالة الآن</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
