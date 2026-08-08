import WhyChooseUs from "../../Components/Home/whyChooseUs";
import Categories from "../../Components/Home/Categories";
import FeaturedProducts from "../../Components/Home/FeaturedProducts";
import Hero from "../../Components/Home/Hero";
import PromotionalBanner from "../../Components/Home/PromotionalBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories/>
      <FeaturedProducts/>
      <PromotionalBanner/>
      <WhyChooseUs/>
    </>
  );
}
