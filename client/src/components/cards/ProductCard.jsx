import Image from "next/image";
import React from "react";

const ProductCard = ({
  productName,
  productPrice,
  productImageSrc,
  brandName,
  reviewCount,
  ratingStars,
  isAlmostSoldOut,
}) => {
  return (
    <div className="max-w-md mt-5 px-6 pt-4 pb-9 rounded-xl shadow-md transition-transform transform hover:scale-105 cursor-pointer">
      <div className="rounded-lg">
        <Image
          width={348}
          height={244}
          alt="Product Image"
          objectFit="cover"
          src={productImageSrc}
        />
      </div>
      <div className="flex flex-row mt-3 justify-between">
        <h1 className="font-medium text-xl text-[#484848]">{productName}</h1>
        <div className="flex items-center">
          {Array.from({ length: ratingStars }, (_, index) => (
            <Image
              key={index}
              src={"/Images/ProductCardAssets/StarVector.svg"}
              width={20}
              height={20}
              alt="star"
            />
          ))}
        </div>
      </div>
      <div className="mt-1">
        <p className="flex justify-start font-medium text-xs text-[#8A8A8A]">
          {brandName}
        </p>
      </div>
      <div className="mt-6">
        <p className="flex justify-start text-xs font-medium text-[#484848]">
          {reviewCount} Customer Reviews
        </p>
      </div>
      <div className="flex justify-between items-center mt-6">
        <h1 className="text-[#484848] text-2xl font-medium">{productPrice}</h1>
        {isAlmostSoldOut && (
          <p className="text-[#FF4646] text-xs font-normal">Almost Sold Out</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
