import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const UnderlineTabs = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(tabsData[0]?.value || "");

  return (
    <Tabs value={activeTab} className="w-full">
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 overflow-x-auto whitespace-nowrap"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {tabsData.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={`whitespace-nowrap px-4 py-2 text-sm md:text-base ${
              activeTab === value ? "text-gray-900" : "text-gray-600"
            }`}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {tabsData.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default UnderlineTabs;
