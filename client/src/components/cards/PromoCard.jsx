import React from "react";

const PromoCard = () => {
  return (
    <div className="bg-[#ECF494] gap-">
      <div className="py-12 flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="text-center lg:text-left lg:mr-32">
          <span className="font-inter font-bold text-3xl lg:text-4xl">
            Subscribe
          </span>
          <span className="font-inter font-normal text-3xl lg:text-4xl">
            {" "} & Get{" "}
          </span>
          <span className="font-inter font-bold text-3xl lg:text-4xl">
            10% OFF
          </span>
          <span className="font-inter font-normal text-3xl lg:text-4xl">
            {" "} for first order
          </span>
        </div>
        <div className="flex items-center w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-grow p-4 rounded-l-full border border-gray-300 focus:outline-none"
          />
          <button
            className="p-4 bg-black text-white rounded-r-full hover:bg-gray-800 focus:outline-none"
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
