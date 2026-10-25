import { Package, ArrowRight, Clock } from "lucide-react";

const Orders = () => {
  // بيانات تجريبية للطلبات
  const ordersList = [
    {
      id: "ORD-20261014-0001",
      date: "Oct 14, 2026",
      itemsCount: 3,
      total: 1250.0,
      status: "قيد المراجعة",
      statusColor: "bg-amber-50 text-amber-600 border-amber-200",
    },
  ];

  return (
    <div className="space-y-6">
      {/* رأس الصفحة */}
      <div className="space-y-1">
        <span className="text-xs text-gray-400 font-medium">Dashboard</span>
        <h1 className="text-2xl font-black text-brand-dark">My Orders</h1>
      </div>

      {/* قائمة الطلبات */}
      {ordersList.length > 0 ? (
        <div className="space-y-4">
          {ordersList.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F8F1E7] text-brand-gold rounded-2xl flex items-center justify-center shrink-0 border border-[#D9BD96]/30">
                  <Package size={22} />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-sm text-brand-dark">
                      {order.id}
                    </h3>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${order.statusColor}`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400 flex items-center gap-2">
                    <span>{order.date}</span>
                    <span>•</span>
                    <span>{order.itemsCount} Items</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between w-full md:w-auto gap-6 border-t md:border-t-0 pt-3 md:pt-0 border-gray-100">
                <div className="text-left md:text-right">
                  <span className="text-[11px] text-gray-400 block">
                    Total Amount
                  </span>
                  <span className="text-sm font-black text-brand-dark">
                    £E {order.total.toFixed(2)}
                  </span>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 bg-[#2C4A3E] text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-brand-gold hover:text-brand-dark transition-colors shadow-sm"
                >
                  <span>View Details</span>
                  <ArrowRight size={14} className="rotate-180" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* الحالة الفارغة */
        <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm text-center space-y-4">
          <div className="w-14 h-14 bg-[#F8F1E7] text-brand-gold rounded-2xl flex items-center justify-center mx-auto border border-[#D9BD96]/30">
            <Clock size={26} />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-sm text-brand-dark">No Orders Yet</h3>
            <p className="text-xs text-gray-400 max-w-sm mx-auto">
              You haven't placed any wholesale orders yet. Start exploring our
              marketplace to place your first order.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
