"use client";

import React, { useState } from "react";
import ProductCard from "@/components/cards/ProductCard";
import Container from "@/components/utils/Container";
import TabNavigation from "@/components/utils/TabNavigation";
import Button from "@/components/buttons/Button";
import { products } from "@/app/constants.js";

const ProductFeatureSection = () => {
  const [showMore, setShowMore] = useState(false);
  const tabs = [
    { label: "All Products" },
    { label: "Skincare" },
    { label: "Haircare" },
    { label: "Nutraceuticals" },
  ];

  const handleToggleView = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  const productsToDisplay = showMore ? products : products.slice(0, 6);

  return (
    <Container>
      <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl pb-12">
          <h2 className="font-volkhov font-normal text-3xl sm:text-4xl md:text-5xl mt-12">
            Our Products
          </h2>
          <p className="font-normal text-sm sm:text-base text-[#8A8A8A] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </p>
        </div>
        <div className="w-full flex justify-center mt-6">
          <TabNavigation tabs={tabs} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6 transition-all duration-500 ease-in-out transform">
          {productsToDisplay.map((product) => (
            <ProductCard
              key={product?.productId}
              productName={product?.productName}
              productPrice={product?.productPrice}
              productImageSrc={product?.productImageSrc}
              brandName={product?.brandName}
              reviewCount={product?.reviewCount}
              ratingStars={product?.ratingStars}
              isAlmostSoldOut={product?.isAlmostSoldOut}
            />
          ))}
        </div>
        {products.length > 6 && (
          <div className="mt-8">
            <Button onClick={handleToggleView}>
              {showMore ? "View Less" : "View More"}
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ProductFeatureSection;
