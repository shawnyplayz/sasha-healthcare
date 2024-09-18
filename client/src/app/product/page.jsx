"use client";

import ProductCard from "@/components/cards/ProductCard";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import { useRouter } from "next/navigation";
import { products } from "../constants";
import Container from "@/components/utils/Container";

const Products = () => {
  const router = useRouter();

  const handleProductClick = (productId) => {
    router.push(`product/${productId}`);
  };

  return (
    <>
      <Navbar />
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6 transition-all duration-500 ease-in-out transform overflow-hidden mb-10">
          {products.map((product) => (
            <div
              key={product?.productId}
              onClick={() => handleProductClick(product?.productId)}
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
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Products;
