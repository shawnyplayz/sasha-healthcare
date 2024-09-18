import Image from "next/image";
import React from "react";
import Rating from '@mui/material/Rating';

const ProductCard = ({
  productName,
  productPrice,
  productImageSrc,
  brandName,
  reviewCount,
  productRating,
  isAlmostSoldOut,
  category,
  onClick,
}) => {
  return (
    <div className="max-w-md mt-5 px-6 pt-4 pb-9 rounded-xl shadow-md transition-transform transform hover:scale-105 cursor-pointer mb-4">
      <div className="rounded-lg">
        <Image
          width={348}
          height={244}
          alt="Product Image"
          objectFit="cover"
          src={productImageSrc}
        />
      </div>
      <div className="flex flex-col mt-3">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-start lg:text-xl text-[#484848]">
            {productName}
          </h1>
          <div className="flex items-center">
            <Rating
              name="half-rating-read"
              defaultValue={productRating}
              precision={0.5}
              readOnly
              size="small"
            />
          </div>
        </div>
        <p className="flex justify-start font-medium text-xs text-[#8A8A8A] mt-1">
          {brandName}
        </p>
        <p className="flex justify-start text-xs font-medium text-[#484848] mt-6">
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
