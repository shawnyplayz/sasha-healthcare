import Image from "next/image";
import React from "react";
import Skincare from "../../../public/Images/CategorySectionAssets/skincare.gif";
import Haircare from "../../../public/Images/CategorySectionAssets/Haircare.svg";
import Nutra from "../../../public/Images/CategorySectionAssets/Nutra.svg";

import Container from "@/components/utils/Container";

const CategorySection = () => {
  return (
    <Container>
      <div className="flex flex-row items-center justify-center py-28 gap-1 px-4">
        <div className="py-16 relative flex items-center justify-center">
          <Image src={Skincare} width={366} alt="Skincare" />
          <h1 className="absolute top-[47%] font-semibold text-5xl text-white">
            SkinCare
          </h1>
        </div>
        <div>
          <Image src={Haircare} width={440} alt="Haircare" />
        </div>
        <div>
          <Image src={Nutra} width={440} alt="Nutra Image" />
        </div>
      </div>
    </Container>
  );
};

export default CategorySection;
