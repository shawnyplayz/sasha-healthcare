import React from "react";

const CheckoutButton = ({ children, onClick, className = "" }) => {
  return (
    <div>
      <button
        className={`py-4 px-10 bg-black text-white rounded-lg hover:bg-white hover:text-black border hover:border border-black transition duration-300 ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default CheckoutButton;
