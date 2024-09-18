import React from "react";

const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
  ariaLabel = "button",
  variant = "default"
}) => {
  const variantClasses = {
    default: "bg-black text-white border-transparent hover:border-black hover:bg-white hover:text-black",
    outline: "bg-transparent text-black border-black hover:bg-black hover:text-white"
  };

  return (
    <button
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      className={`font-normal text-base py-2 px-4 rounded-lg border transition-all duration-300 ease-in-out ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
