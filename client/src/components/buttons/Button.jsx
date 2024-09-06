import React from "react";

const Button = ({ children, onClick, className = "", type = "button", ariaLabel = "button" }) => {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      className={`bg-black text-white font-normal text-base py-5 px-20 gap-2 rounded-xl mb-11 border transition-all duration-300 ease-in-out
      hover:border-black hover:bg-white hover:text-black ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
