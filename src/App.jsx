import CategoriesSection from "./components/CategoriesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import NewArrivalsSection from "./components/NewArrivalsSection";
import RecommendedSection from "./components/RecommendedSection";
import SpecialOffersSection from "./components/SpecialOffersSection";
import SuppliersSection from "./components/SuppliersSection";
import TopSalesSection from "./components/TopSalesSection";

function App() {
  return (
    <div className="min-h-screen bg-brand-bg font-cairo text-right" dir="rtl">
      <Navbar />
      <HeroSection />
      <main>
        <SuppliersSection />
        <CategoriesSection />
        <SpecialOffersSection />
        <RecommendedSection />
        <NewArrivalsSection />
        <TopSalesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
