import Image from "next/image";
import React from "react";
import Container from "../utils/Container";

// Define constants for the footer items
const FOOTER_ITEMS = [
  {
    src: "/Images/FooterAssets/Truck.svg",
    alt: "Truck Icon",
    text: "FREE SHIPPING OVER $99",
  },
  {
    src: "/Images/FooterAssets/Return.svg",
    alt: "Return Icon",
    text: "30 DAYS MONEY BACK",
  },
  {
    src: "/Images/FooterAssets/shield.svg",
    alt: "Shield Icon",
    text: "100% SECURE PAYMENT",
  },
  {
    src: "/Images/FooterAssets/chat.svg",
    alt: "Chat Icon",
    text: "24/7 DEDICATED SUPPORT",
  },
];

const Footer = () => {
  return (
    <Container>
      <div className="my-8 mx-4">
        <div className="top-footer lg:my-12">
          <div className="info-box grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {FOOTER_ITEMS.map((item, index) => (
              <div
                key={index}
                className={`flex gap-4 items-center justify-center px-4 border-[#ddd] ${
                  index < FOOTER_ITEMS.length - 1 ? "lg:border-r" : ""
                }`}
              >
                <Image src={item.src} width={18} height={18} alt={item.alt} />
                <h1 className="text-sm text-center md:text-left">
                  {item.text}
                </h1>
              </div>
            ))}
          </div>
        </div>

        <div className="main-footer mt-8">{/* Add your content here */}</div>
        <div className="bottom-footer mt-8">{/* Add your content here */}</div>
      </div>
    </Container>
  );
};

export default Footer;
