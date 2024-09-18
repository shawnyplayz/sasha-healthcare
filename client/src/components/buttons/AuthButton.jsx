"use client";
import React from "react";

const AuthButton = ({ children }) => {
  return (
    <button className="w-full bg-black font-bold text-sm rounded-md text-white py-3 px-6 border hover:bg-white hover:text-black hover:border hover:border-black">
      {children}
    </button>
  );
};

export default AuthButton;
