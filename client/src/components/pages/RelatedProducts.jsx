import Image from "next/image";
import React from "react";

const RelatedProducts = ({
  relatedProductImage,
  relatedProductName,
  relatedProductPrice,
}) => {
  return (
    <div>
      <div className="mt-9">
        <Image
          src={relatedProductImage}
          width={287}
          height={287}
          alt={`${relatedProductName} Image`}
          className="rounded-xl bg-[#F3F3F3] px-7 py-11"
        />
        <div className="mt-4 font-medium text-base text-black">
          {relatedProductName}
        </div>
        <div className="mt-3 font-semibold text-2xl">{relatedProductPrice}</div>
      </div>
    </div>
  );
};

export default RelatedProducts;
