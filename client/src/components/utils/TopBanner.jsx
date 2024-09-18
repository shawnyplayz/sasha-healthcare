// components/TopBanner.js
import React from "react";

const TopBanner = ({ backgroundColor = "#ECF494", text, className = "" }) => {
  return (
    <div
      className={`flex items-center justify-center py-2 font-light text-base ${className}`}
      style={{ backgroundColor }}
    >
      <div>{text}</div>
    </div>
  );
};

export default TopBanner;
