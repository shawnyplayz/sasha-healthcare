"use client";

import { useState } from "react";

const TabNavigation = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-[#8A8A8A] dark:text-gray-400">
      {tabs.map((tab, index) => (
        <li key={index} className="mx-11">
          {tab.disabled ? (
            <span className="inline-block px-12 py-5 font-normal text-base text-[#8A8A8A] cursor-not-allowed">
              {tab.label}
            </span>
          ) : (
            <a
              href="#"
              onClick={() => handleTabClick(index)}
              className={`inline-block px-12 py-5 rounded-lg gap-3 font-semibold text-base ${
                activeTab === index
                  ? "text-white bg-black active"
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
