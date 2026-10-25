import { Wallet } from "lucide-react";

const ReturnsWallet = () => {
  // بيانات تجريبية لمحفظة المرتجعات
  const walletData = {
    balance: 0.0,
    currency: "£E",
  };

  const transactions = [];

  return (
    <div className="space-y-6">
      {/* رأس الصفحة */}
      <div className="space-y-1">
        <span className="text-xs text-gray-400 font-medium">Dashboard</span>
        <h1 className="text-2xl font-black text-brand-dark">Returns Wallet</h1>
      </div>

      {/* بطاقة الرصيد الرئيسي */}
      <div className="bg-[#2C4A3E] text-white rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2 relative z-10">
          <div className="flex items-center gap-2 text-brand-gold text-xs font-bold tracking-wider uppercase">
            <Wallet size={16} />
            <span>Available Balance</span>
          </div>
          <div className="text-3xl sm:text-4xl font-black">
            {walletData.currency} {walletData.balance.toFixed(2)}
          </div>
          <p className="text-xs text-gray-300 max-w-xs">
            Use your returns wallet balance for instant checkout on future
            wholesale orders or request a payout.
          </p>
        </div>

        <div className="flex items-center gap-3 relative z-10 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => alert("طلب سحب الرصيد")}
            className="flex-1 sm:flex-none bg-brand-gold text-brand-dark text-xs font-bold px-5 py-3 rounded-xl hover:bg-white transition-colors shadow-sm cursor-pointer"
          >
            Request Payout
          </button>
        </div>

        {/* خلفية جمالية زخرفية */}
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none blur-2xl"></div>
      </div>

      {/* سجل المعاملات (الحالة الفارغة أو القائمة) */}
      <div className="space-y-3">
        <h3 className="text-base font-black text-brand-dark">
          Wallet Transactions
        </h3>

        {transactions.length > 0 ? (
          <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm space-y-4">
            {/* سيتم عرض المعاملات هنا */}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm text-center space-y-4">
            <div className="w-14 h-14 bg-[#F8F1E7] text-brand-gold rounded-2xl flex items-center justify-center mx-auto border border-[#D9BD96]/30">
              <Wallet size={26} />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-sm text-brand-dark">
                No Transactions Yet
              </h3>
              <p className="text-xs text-gray-400 max-w-sm mx-auto">
                Your wallet transaction history will appear here once you
                process returns or refunds.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReturnsWallet;
