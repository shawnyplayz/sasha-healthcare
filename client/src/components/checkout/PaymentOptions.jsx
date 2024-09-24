"use client";

import Image from "next/image";
import { useState } from "react";

const PaymentOptions = () => {
  const [selectedPayment, setSelectedPayment] = useState("UPI");

  const paymentMethods = [
    {
      id: "UPI",
      label: "Pay via UPI",
      amount: "₹1347",
      icons: [
        { src: "/Images/CheckoutSectionAssets/paytm.webp", alt: "Paytm" },
        { src: "/Images/CheckoutSectionAssets/googlepay.png", alt: "PhonePe" },
        { src: "/Images/CheckoutSectionAssets/phonepay.png", alt: "GPay" },
      ],
    },
    {
      id: "COD",
      label: "Cash on Delivery",
      amount: "₹1347",
      icons: [
        { src: "/Images/CheckoutSectionAssets/cash.png", alt: "Cash" },
        { src: "/Images/CheckoutSectionAssets/cash.png", alt: "Cash" },
        { src: "/Images/CheckoutSectionAssets/cash.png", alt: "Cash" },
      ],
    },
    {
      id: "Cards",
      label: "Pay via Cards",
      amount: "₹1347",
      icons: [
        {
          src: "/Images/CheckoutSectionAssets/mastercard.png",
          alt: "Mastercard",
        },
        { src: "/Images/CheckoutSectionAssets/visa.jpg", alt: "Visa" },
        { src: "/Images/CheckoutSectionAssets/rupay.png", alt: "RuPay" },
      ],
    },
    {
      id: "Netbanking",
      label: "Pay via Netbanking",
      amount: "₹1347",
      icons: [
        { src: "/Images/CheckoutSectionAssets/sbi.webp", alt: "SBI" },
        { src: "/Images/CheckoutSectionAssets/hdfc.png", alt: "hdfc" },
        { src: "/Images/CheckoutSectionAssets/icici.png", alt: "icici" },
      ],
    },
  ];

  return (
    <div className="w-full max-w-[672px] mx-auto mt-8">
      {paymentMethods.map((method) => (
        <div
          key={method.id}
          className={`flex my-2 justify-between items-center p-4 rounded-lg border ${
            selectedPayment === method.id
              ? "bg-green-100 border-green-400"
              : "bg-white border-gray-300"
          } cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100`}
          onClick={() => setSelectedPayment(method.id)}
        >
          {/* Stacking label and amount vertically */}
          <div className="flex flex-col">
            <div className="text-lg font-semibold">{method.label}</div>
            <div className="font-bold text-lg">{method.amount}</div>
          </div>

          {/* Icons */}
          <div className="flex space-x-2">
            {method.icons.map((icon, index) => (
              <Image
                width={50}
                height={50}
                key={index}
                src={icon.src}
                alt={icon.alt}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentOptions;
