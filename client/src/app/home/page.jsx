import React from "react";
import HomeCarousel from "./HomeCarousel";
import CategorySection from "./CategorySection";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/navbar/Navbar";
import DiscoverSection from "./DiscoverSection";
import InfoSection from "./InfoSection";
import ProductFeatureSection from "./ProductFeatureSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactUsSection from "./ContactUsSection";
import PromoCard from "@/components/cards/PromoCard";

const Home = () => {
  return (
    <div>
      <TopBanner text={"Rated 4.8-stars across 20k+ reviews"} />
      <Navbar />
      <HomeCarousel />
      <CategorySection />
      <DiscoverSection />
      <InfoSection />
      <ProductFeatureSection />
      {/* <TestimonialsSection /> */}
      <ContactUsSection />
      <PromoCard/>
    </div>
  );
};

export default Home;
