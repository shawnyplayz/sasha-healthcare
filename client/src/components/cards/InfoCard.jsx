import React from "react";
import Image from "next/image";

const InfoCard = ({ icon, title, description }) => {
  return (
    <div className="text-black flex items-center my-12 px-3 max-w-96 border rounded-2xl">
      <div className="flex items-center">
        <Image src={icon} width={37} height={37} alt="Eco-Friendly Icon" />
      </div>
      <div className="flex flex-col ml-4 p-2 my-6">
        <div className="font-semibold text-xl">{title}</div>
        <div className="md:text-sm">{description}</div>
      </div>
    </div>
  );
};

export default InfoCard;
