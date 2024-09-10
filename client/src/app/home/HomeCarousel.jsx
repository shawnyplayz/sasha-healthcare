"use client";

import React from "react";
import Image from "next/image";
import HomeButton from "@/components/buttons/HomeButton";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeCarousel = () => {
  return (
    <div className="w-full overflow-hidden">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        interval={2000}
        showStatus={false}
        className="mb-12"
        showThumbs={true}
        swipeable={false}
        transitionTime={500}
      >
        {/* First Section */}
        <div className="bg-home-carousel flex flex-col md:flex-row gap-12 items-center justify-around p-4 overflow-hidden min-h-[600px] md:min-h-[800px]">
          <div className="text-section max-w-full md:max-w-2xl text-center md:text-left px-4">
            <h1 className="font-kyivType font-normal text-2xl md:text-6xl py-4">
              Delight your skin and stimulate your senses
            </h1>
            <p className="font-normal text-lg md:text-3xl text-[#1A1A1ACC] pb-4">
              Self-care is essential for all types
            </p>
            <div className="mt-8 md:mt-12 flex items-center justify-center lg:block">
              <HomeButton>Shop Now</HomeButton>
            </div>
          </div>
          <div className="image-section my-9 w-full md:w-auto flex justify-center">
            <Image
              src={"/Images/HeroSectionAssets/Clonex-A.png"}
              width={500}
              height={500}
              alt="Clonex-A product image"
              className="object-cover max-w-[300px] md:max-w-none"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        {/* Second Section */}
        <div className="bg-home-carousel-color-1 flex flex-col md:flex-row gap-12 items-center justify-around p-4 overflow-hidden min-h-[600px] md:min-h-[800px]">
          <div className="text-section max-w-full md:max-w-2xl text-center md:text-left px-4">
            <h1 className="font-kyivType font-normal text-2xl md:text-6xl py-4">
              Promoting integral wellness for dermal, follicular, and overall
              vitality
            </h1>
            <div className="mt-8 md:mt-12 flex items-center justify-center lg:block">
              <HomeButton>Shop Now</HomeButton>
            </div>
          </div>
          <div className="image-section my-9 w-full md:w-auto flex justify-center">
            <Image
              src={"/Images/HeroSectionAssets/Zorman.png"}
              width={500}
              height={500}
              alt="Zorman product image"
              className="object-cover max-w-[300px] md:max-w-none"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        {/* Third Section */}
        <div className="bg-home-carousel-color-2 flex flex-col md:flex-row gap-12 items-center justify-around p-4 overflow-hidden min-h-[600px] md:min-h-[800px]">
          <div className="text-section max-w-full md:max-w-2xl text-center md:text-left px-4">
            <h1 className="font-kyivType font-normal text-2xl md:text-6xl py-4">
              Promoting integral wellness for dermal, follicular, and overall
              vitality
            </h1>
            <div className="mt-8 md:mt-12 flex items-center justify-center lg:block">
              <HomeButton>Shop Now</HomeButton>
            </div>
          </div>
          <div className="image-section my-9 w-full md:w-auto flex justify-center">
            <Image
              src={"/Images/HeroSectionAssets/Zorman.png"}
              width={500}
              height={500}
              alt="Zorman product image"
              className="object-cover max-w-[300px] md:max-w-none"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
