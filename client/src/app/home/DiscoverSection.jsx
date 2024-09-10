import React from "react";
import Container from "@/components/utils/Container";
import DiscoverCard from "@/components/cards/DiscoverCard";

const DiscoverSection = () => {
  return (
    <Container>
      <div className="flex items-center justify-center flex-col overflow-hidden px-6 md:px-14 mb-20">
        <div className="font-semibold text-sm md:text-base pb-3 font-inter">
          #MADE FOR EVERYBODY
        </div>
        <div className="font-normal text-3xl md:text-5xl pb-8 md:pb-12 font-vollkorn text-center">
          Discover your perfect match
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full">
          <DiscoverCard
            imageSrc="/Images/DiscoverySectionAssets/coconut.webp"
            title="Coconut"
            description="For Smooth Skin"
          />
          <DiscoverCard
            imageSrc="/Images/DiscoverySectionAssets/bringraj.webp"
            title="Bringraj"
            description="For Shine Skin"
          />
          <DiscoverCard
            imageSrc="/Images/DiscoverySectionAssets/ricewater.webp"
            title="Rice Water"
            description="For Strong Hair"
          />
        </div>
      </div>
    </Container>
  );
};

export default DiscoverSection;
