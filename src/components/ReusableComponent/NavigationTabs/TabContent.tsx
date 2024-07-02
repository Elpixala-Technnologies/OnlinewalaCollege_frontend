"use client";

import React from "react";

type Tab = {
  label: string;
  component: React.ComponentType;
};

interface TabContentProps {
  selectedTab: Tab;
}

const TabContent: React.FC<TabContentProps> = ({ selectedTab }) => {
  const Component = selectedTab.component;
  return <Component />;
};

export default TabContent;
