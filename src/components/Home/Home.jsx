import CategoriesSection from "./CategoriesSection";
import HeroSection from "./HeroSection";
import NewArrivalsSection from "./NewArrivalsSection";
import RecommendedSection from "./RecommendedSection";
import SpecialOffersSection from "./SpecialOffersSection";
import SuppliersSection from "./SuppliersSection";
import TopSalesSection from "./TopSalesSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <SuppliersSection />
      <CategoriesSection />
      <SpecialOffersSection />
      <RecommendedSection />
      <NewArrivalsSection />
      <TopSalesSection />
    </main>
  );
};

export default Home;
