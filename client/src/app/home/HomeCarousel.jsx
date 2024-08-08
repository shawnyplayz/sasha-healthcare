"use client";

import React from "react";
import ClonexA from "./assets/Clonex-A.png";
import Zorman from "./assets/Zorman.png";
import Image from "next/image";
import HomeButton from "./HomeButton";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeCarousel = () => {
  return (
    <div>
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={2000}
        showStatus={false}
        className="mb-12"
        showThumbs={true}
        swipeable={true}
        transitionTime={500}
      >
        {/* First Section */}
        <div className="bg-home-carousel flex flex-col md:flex-row gap-12 items-center justify-around p-4 overflow-hidden min-h-[600px]">
          <div className="text-section max-w-2xl text-center md:text-left">
            <h1 className="font-kyivType font-normal text-4xl md:text-6xl py-4">
              Delight your skin and stimulate your senses
            </h1>
            <p className="font-normal text-xl md:text-3xl text-[#1A1A1ACC] pb-4">
              Self-care is essential for all types
            </p>
            <div className="mt-12">
              <HomeButton>Shop Now</HomeButton>
            </div>
          </div>
          <div className="image-section my-9">
            <Image
              src={ClonexA}
              width={500}
              height={500}
              alt="Clonex-A product image"
              className="object-cover"
              style={{ objectFit: "cover", height: "500px", width: "500px" }}
            />
          </div>
        </div>
        {/* Second Section */}
        <div className="bg-home-carousel-color-1 flex flex-col md:flex-row gap-12 items-center justify-around p-4 overflow-hidden min-h-[600px]">
          <div className="text-section max-w-2xl text-center md:text-left">
            <h1 className="font-kyivType font-normal text-4xl md:text-6xl py-4">
              Promoting integral wellness for dermal, follicular, and overall vitality
            </h1>
            <div className="mt-12">
              <HomeButton>Shop Now</HomeButton>
            </div>
          </div>
          <div className="image-section my-9">
            <Image
              src={Zorman}
              width={500}
              height={500}
              alt="Zorman product image"
              className="object-cover"
              style={{ objectFit: "cover", height: "500px", width: "500px" }}
            />
          </div>
        </div>
        {/* Third Section */}
        <div className="bg-home-carousel-color-2 flex flex-col md:flex-row gap-12 items-center justify-around p-4 overflow-hidden min-h-[600px]">
          <div className="text-section max-w-2xl text-center md:text-left">
            <h1 className="font-kyivType font-normal text-4xl md:text-6xl py-4">
              Promoting integral wellness for dermal, follicular, and overall vitality
            </h1>
            <div className="mt-12">
              <HomeButton>Shop Now</HomeButton>
            </div>
          </div>
          <div className="image-section my-9">
            <Image
              src={Zorman}
              width={500}
              height={500}
              alt="Zorman product image"
              className="object-cover"
              style={{ objectFit: "cover", height: "500px", width: "500px" }}
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
