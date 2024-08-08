import React from "react";
import HomeCarousel from "./HomeCarousel";
import CategorySection from "./CategorySection";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/navbar/Navbar";

const Home = () => {
  return (
    <div>
      <TopBanner text={"Rated 4.8-stars across 20k+ reviews"} />
      <Navbar/>
      <HomeCarousel />
      <CategorySection />
    </div>
  );
};

export default Home;
