"use client";

import { useState } from "react";

const TabNavigation = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <ul className="flex flex-wrap justify-center text-sm sm:text-base font-medium text-[#8A8A8A]">
      {tabs.map((tab, index) => (
        <li key={index} className="mx-2 sm:mx-4">
          {tab.disabled ? (
            <span className="inline-block px-6 py-3 sm:px-8 sm:py-4 font-normal text-[#8A8A8A] cursor-not-allowed">
              {tab.label}
            </span>
          ) : (
            <a
              href="#"
              onClick={() => handleTabClick(index)}
              className={`inline-block px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold ${
                activeTab === index
                  ? "text-white bg-black"
                  : "hover:text-black hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
              }`}
            >
              {tab.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TabNavigation;
