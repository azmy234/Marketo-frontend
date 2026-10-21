import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. منع المتصفح من استرجاع مكان السكرول القديم عند الـ Reload
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. التمرير للأعلى عند التحميل أو عند تغيير المسار
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
