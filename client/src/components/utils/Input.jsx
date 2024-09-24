"use client";
import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Input = ({ id, label, type = "text", placeholder, className = "" }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={`flex flex-col pt-1 relative ${className}`}>
      <label htmlFor={id} className="font-medium text-sm">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={type === "password" && isPasswordVisible ? "text" : type}
          placeholder={placeholder}
          className={`rounded-md w-full bg-gray-100 p-3 pr-10 font-roboto font-normal text-sm ${className}`}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
            aria-label="Toggle password visibility"
          >
            {isPasswordVisible ? <IoEyeOff /> : <IoEye />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
