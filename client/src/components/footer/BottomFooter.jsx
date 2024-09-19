import Image from "next/image";
import Link from "next/link";
import React from "react";

const BottomFooter = () => {
  return (
    <div className="bottom-footer mt-8 bg-[#EBEEF6]">
      <div className="py-10 pl-5 pr-5 md:pl-14 md:flex md:items-center md:justify-between flex-col gap-4 lg:flex-row lg:gap-0">
        {/* Copyright Section */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h1 className="font-inter font-normal text-sm text-[#666666]">
            © 2024{" "}
            <span className="font-inter font-bold md:text-sm text-xs text-black">
              Sasha
            </span>{" "}
            All Rights Reserved
          </h1>
        </div>

        {/* Payment Method */}
        <div className="flex gap-3 md:gap-5 mb-4 md:mb-0 justify-center items-center">
          <div>
            <Image
              src="/Images/footerAssets/icons/paypal.svg"
              width={25}
              height={25}
              alt="paypal logo"
            />
          </div>
          <div>
            <Image
              src="/Images/footerAssets/icons/stripe.svg"
              width={40}
              height={40}
              alt="Stripe logo"
            />
          </div>
          <div>
            <Image
              src="/Images/footerAssets/icons/mastercard.svg"
              width={40}
              height={40}
              alt="Mastercard logo"
            />
          </div>
          <div>
            <Image
              src="/Images/footerAssets/icons/klarna.svg"
              width={40}
              height={40}
              alt="Klarna logo"
            />
          </div>
          <div>
            <Image
              src="/Images/footerAssets/icons/visa.svg"
              width={40}
              height={40}
              alt="visa logo"
            />
          </div>
        </div>

        {/* Design and Development */}
        <div className="flex gap-2 items-center justify-center font-semibold text-xs font-inter text-center md:text-left">
          <h1>Designed and Developed by</h1>
          <span>
            <Image
              src="/Images/FooterAssets/icons/innovative-cursor.svg"
              width={25}
              height={25}
              alt="Innovative Cursor Logo"
            />
          </span>
          <Link href="https://www.innovativecursor.com/">
            <span className="hover:underline">Innovative Cursor</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
