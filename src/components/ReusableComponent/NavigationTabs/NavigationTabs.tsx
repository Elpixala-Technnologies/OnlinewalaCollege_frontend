"use client";

import React, { useState } from "react";

type Tab = {
  label: string;
  component: React.ComponentType;
};

interface TabsProps {
  tabs: Tab[];
  onTabChange: (tab: Tab) => void;
}

const NavigationTabs: React.FC<TabsProps> = ({ tabs, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState<Tab>(tabs[0]);

  const handleTabChange = (tab: Tab) => {
    setSelectedTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="flex justify-around bg-blue-100 py-1 rounded-full mt-4 overflow-x-auto hide-scrollbar">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => handleTabChange(tab)}
          className={`px-4 py-1 min-w-max ${
            selectedTab.label === tab.label ? "border-b-2 border-blue-600" : ""
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default NavigationTabs;
