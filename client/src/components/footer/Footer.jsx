import Image from "next/image";
import React from "react";
import Container from "../utils/Container";

import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaBehance,
} from "react-icons/fa";
import Link from "next/link";

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
    src: "/Images/FooterAssets/Shield.svg",
    alt: "Shield Icon",
    text: "100% SECURE PAYMENT",
  },
  {
    src: "/Images/FooterAssets/Chat.svg",
    alt: "Chat Icon",
    text: "24/7 DEDICATED SUPPORT",
  },
];

const Footer = () => {
  return (
    <Container>
      <div className="my-8 mx-4">
        {/* Top Footer */}
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

        {/* Main Footer */}
        <div className="main-footer mt-8 flex flex-col lg:flex-row lg:gap-16">
          {/* First Section */}
          <div className="first-section mt-8 lg:mt-16">
            <h1 className="font-bold text-3xl lg:text-5xl">Sasha</h1>
            <h5 className="mt-3 font-inter font-normal text-xs">
              HOTLINE 24/7
            </h5>
            <h4 className="text-[#4B3EC4] font-inter font-bold text-lg lg:text-xl mt-1">
              +91 8655100951
            </h4>
            <div className="mt-5 max-w-full lg:max-w-72">
              <p className="font-inter font-normal text-sm">
                501, Krishna Kunj, Mhatre Wadi, L.T. Road, Dahisar West, Mumbai
                - 400068, INDIA.
              </p>
            </div>
            <p className="font-inter font-normal text-sm mt-1">
              sashalifehealthcare@gmail.com
            </p>
            <div className="icon-group mt-10 flex gap-3">
              <div className="rounded-full border p-3">
                <FaFacebookF />
              </div>
              <div className="rounded-full border p-3">
                <FaYoutube />
              </div>
              <div className="rounded-full border p-3">
                <FaInstagram />
              </div>
              <div className="rounded-full border p-3">
                <FaTwitter />
              </div>
              <div className="rounded-full border p-3">
                <FaBehance />
              </div>
            </div>
          </div>

          {/* Responsive Sections */}
          {[
            {
              title: "Top Categories",
              links: [
                "Skin Care",
                "Hair Serum",
                "Face Care",
                "Body Lotions",
                "Perfumes",
                "Cosmetics",
              ],
            },
            {
              title: "Company",
              links: [
                "About Sasha",
                "Contact",
                "Career",
                "Blog",
                "Sitemap",
                "Store Location",
              ],
            },
            {
              title: "Help Center",
              links: [
                "Customer Service",
                "Policy",
                "Terms & Conditions",
                "Tranch Order",
                "FAQs",
                "My Account",
                "Product Support",
              ],
            },
            {
              title: "Partner",
              links: ["Become Seller", "Affiliate", "Advertise", "Partnership"],
            },
          ].map((section, index) => (
            <div
              key={index}
              className={`mt-8 lg:mt-16 lg:ml-0 ${index > 0 ? "lg:ml-8" : ""}`}
            >
              <h1 className="font-inter font-semibold text-lg text-black">
                {section.title}
              </h1>
              <ul className="flex flex-col mt-8 gap-2 text-[#666666] font-normal font-inter text-sm">
                {section.links.map((link, idx) => (
                  <Link href="/" key={idx} className="hover:underline">
                    {link}
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Footer;
