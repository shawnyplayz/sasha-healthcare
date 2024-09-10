import Image from "next/image";
import React from "react";
import Skincare from "../../../public/Images/CategorySectionAssets/skincare.gif";
import Haircare from "../../../public/Images/CategorySectionAssets/haircare.gif";
import Nutra from "../../../public/Images/CategorySectionAssets/nutra.gif";

import Container from "@/components/utils/Container";

const CategorySection = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row items-center justify-center py-12 md:py-28 gap-4 px-4">
        <div className="relative flex items-center justify-center py-8 md:py-16 w-full">
          <Image
            src={Skincare}
            width={300}
            height={300}
            alt="Skincare"
            style={{ objectFit: "cover" }}
            className="w-full h-full"
          />
          <h1 className="absolute top-[47%] font-semibold text-3xl sm:text-2xl lg:text-5xl text-white">
            Skincare
          </h1>
        </div>
        <div className="relative flex items-center justify-center py-8 md:py-16 w-full">
          <Image
            src={Haircare}
            width={300}
            height={300}
            alt="Haircare"
            style={{ objectFit: "cover" }}
            className="w-full h-full"
          />
          <h1 className="absolute top-[47%] font-semibold sm:text-2xl text-3xl lg:text-5xl text-white">
            HairCare
          </h1>
        </div>
        <div className="relative flex items-center justify-center py-8 md:py-16 w-full">
          <Image
            src={Nutra}
            width={300}
            height={300}
            alt="Nutra Image"
            style={{ objectFit: "cover" }}
            className="w-full h-full"
          />
          <h1 className="absolute top-[47%] font-semibold text-3xl sm:text-2xl lg:text-5xl text-white">
            Nutra
          </h1>
        </div>
      </div>
    </Container>
  );
};

export default CategorySection;
