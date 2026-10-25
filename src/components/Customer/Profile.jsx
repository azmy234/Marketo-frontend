import { User, Mail, Phone, Building, Save } from "lucide-react";

const Profile = () => {
  return (
    <div className="space-y-6">
      {/* رأس الصفحة */}
      <div className="space-y-1">
        <span className="text-xs text-gray-400 font-medium">Dashboard</span>
        <h1 className="text-2xl font-black text-brand-dark">
          Profile Information
        </h1>
      </div>

      {/* نموذج بيانات الحساب */}
      <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-4 pb-6 border-b border-gray-100">
          <div className="w-16 h-16 bg-[#F8F1E7] rounded-2xl flex items-center justify-center text-brand-dark font-black text-2xl border border-[#D9BD96]/30 shrink-0">
            A
          </div>
          <div>
            <h3 className="font-bold text-base text-brand-dark">Ahmad Azmy</h3>
            <p className="text-xs text-gray-400">
              Creative Technologist & Full-Stack Developer
            </p>
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-brand-dark block">
                Full Name
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <User size={16} />
                </span>
                <input
                  type="text"
                  defaultValue="Ahmad Azmy"
                  className="w-full pl-10 pr-4 py-2.5 bg-[#FBF9F5] border border-gray-200 rounded-xl text-xs font-semibold text-brand-dark focus:outline-none focus:border-brand-gold transition-colors"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-brand-dark block">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Mail size={16} />
                </span>
                <input
                  type="email"
                  defaultValue="ahmadazmy2025@gmail.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-[#FBF9F5] border border-gray-200 rounded-xl text-xs font-semibold text-brand-dark focus:outline-none focus:border-brand-gold transition-colors"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-brand-dark block">
                Phone Number
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Phone size={16} />
                </span>
                <input
                  type="text"
                  defaultValue="+20 10xxxxxxxx"
                  className="w-full pl-10 pr-4 py-2.5 bg-[#FBF9F5] border border-gray-200 rounded-xl text-xs font-semibold text-brand-dark focus:outline-none focus:border-brand-gold transition-colors"
                />
              </div>
            </div>

            {/* Company / Business */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-brand-dark block">
                Business / Company
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Building size={16} />
                </span>
                <input
                  type="text"
                  defaultValue="Marketo B2B Wholesale"
                  className="w-full pl-10 pr-4 py-2.5 bg-[#FBF9F5] border border-gray-200 rounded-xl text-xs font-semibold text-brand-dark focus:outline-none focus:border-brand-gold transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="button"
              onClick={() => alert("تم حفظ التغييرات بنجاح")}
              className="inline-flex items-center gap-2 bg-[#2C4A3E] text-white text-xs font-bold px-6 py-3 rounded-xl hover:bg-brand-gold hover:text-brand-dark transition-colors shadow-sm cursor-pointer"
            >
              <Save size={16} />
              <span>Save Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
