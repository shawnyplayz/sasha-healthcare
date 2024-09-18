"use client";

import React, { useState } from "react";
import ProductCard from "@/components/cards/ProductCard";
import Container from "@/components/utils/Container";
import TabNavigation from "@/components/utils/TabNavigation";
import Button from "@/components/buttons/Button";
import { products } from "@/app/constants.js";
import Link from "next/link";

const ProductFeatureSection = () => {
  const [showMore, setShowMore] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { label: "All Products" },
    { label: "Skincare" },
    { label: "Haircare" },
    { label: "Nutraceuticals" },
  ];

  const handleToggleView = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const filteredProducts =
    activeTab === 0
      ? products // Show all products for "All Products"
      : products.filter(
          (product) => product.category === tabs[activeTab].label
        );

  const productsToDisplay = showMore
    ? filteredProducts
    : filteredProducts.slice(0, 6);

  return (
    <Container>
      <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 mb-36">
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
          <TabNavigation tabs={tabs} onTabClick={handleTabChange} />{" "}
          {/* Pass onTabClick */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6 transition-all duration-500 ease-in-out transform">
          {productsToDisplay.map((product) => (
            <Link
              key={product.productId}
              href={`/product/${product.productId}`}
            >
              <ProductCard
                key={product?.productId}
                productName={product?.productName}
                productPrice={product?.productPrice}
                productImageSrc={product?.productImageSrc}
                brandName={product?.brandName}
                reviewCount={product?.reviewCount}
                productRating={product?.productRating}
                isAlmostSoldOut={product?.isAlmostSoldOut}
                category={product?.category}
              />
            </Link>
          ))}
        </div>
        {filteredProducts.length > 6 && (
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
