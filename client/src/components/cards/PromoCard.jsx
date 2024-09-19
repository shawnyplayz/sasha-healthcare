import React from "react";
import Container from "../utils/Container";

const PromoCard = ({
  bgColor = "#ECF494",
  title = "Subscribe",
  discount = "10% OFF",
  subtitle = "for first order",
  buttonText = "SUBSCRIBE",
  buttonColor = "bg-black",
  buttonHoverColor = "hover:bg-gray-800",
  textColor = "text-[#333]",
  fontSize = "text-3xl lg:text-4xl",
}) => {
  return (
    <div className={`bg-[${bgColor}]`}>
      <Container>
        <div className="py-12 flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-6">
          <div className={`text-center lg:text-left lg:mr-32 ${textColor}`}>
            <span className={`font-inter font-bold ${fontSize}`}>{title}</span>
            <span className={`font-inter font-normal ${fontSize}`}>
              {" "}
              & Get{" "}
            </span>
            <span className={`font-inter font-bold ${fontSize}`}>
              {discount}
            </span>
            <span className={`font-inter font-normal ${fontSize}`}>
              {" "}
              {subtitle}
            </span>
          </div>
          <div className="flex items-center max-w-md">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow p-4 rounded-l-full border border-gray-300 focus:outline-none"
            />
            <button
              className={`p-4 ${buttonColor} text-white rounded-r-full ${buttonHoverColor} focus:outline-none`}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PromoCard;
