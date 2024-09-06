import React from "react";

const HomeButton = ({ children }) => {
  return (
    <button className="bg-black rounded-xl px-8 md:px-16 py-4 md:py-6 text-white flex items-center justify-center gap-3 font-semibold text-xl md:text-2xl hover:bg-white hover:text-black">
      {children}
    </button>
  );
};

export default HomeButton;
