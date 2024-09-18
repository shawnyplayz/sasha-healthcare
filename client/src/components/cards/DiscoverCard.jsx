import Image from "next/image";
import React from "react";

const DiscoverCard = ({ imageSrc, title, description }) => {
  return (
    <div className="rounded-2xl relative w-full md:w-80 lg:w-96 h-40">
      <div className="absolute inset-0 bg-black opacity-100 rounded-2xl"></div>
      <Image
        src={imageSrc}
        alt="Discover Image"
        className="object-cover rounded-2xl opacity-90"
        layout="fill"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <span className="text-white text-xl md:text-2xl font-semibold">
          {title}
        </span>
        <div className="bg-white text-black text-base md:text-xl font-medium rounded-md px-3 py-1 mt-2 font-vollkorn">
          {description}
        </div>
      </div>
    </div>
  );
};

export default DiscoverCard;
