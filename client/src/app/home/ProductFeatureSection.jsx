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
      <div className="flex items-center justify-center flex-col text-center">
        <div className="flex items-center justify-center flex-col max-w-3xl pb-12">
          <div className="font-volkhov font-normal text-5xl mt-28">
            Our Products
          </div>
          <div className="font-normal text-base pt-5 text-[#8A8A8A]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </div>
        </div>
        <div className="flex items-center justify-center mt-12">
          <TabNavigation tabs={tabs} />
        </div>
        <div className="grid lg:grid-cols-3 gap-14 transition-all duration-500 ease-in-out transform">
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
        <div className="mt-12">
          {products.length > 6 && (
            <Button onClick={handleToggleView}>
              {showMore ? "View Less" : "View More"}
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ProductFeatureSection;
