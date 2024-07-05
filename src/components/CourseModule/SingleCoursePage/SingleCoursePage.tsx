"use client";
import React, { useState } from "react";
import HeroSection from "./SIngleCoursePageHeroSection/HeroSection";
import Overview from "./Overview/Overview";
import TopColleges from "./TopColleges/TopColleges";
import Curriculum from "./Curriculum/Curriculum";
import Eligibility from "./Eligibility/Eligibility";
import FeeStructure from "./FeeStructure/FeeStructure";
import RatingAndReviews from "./RatingAndReviews/RatingAndReviews";
import Facilities from "./Facilities/Facilities";
import Placement from "./Placement/Placement";
import NewsAndUpdates from "./NewsAndUpdates/NewsAndUpdates";
import ForumsAndDiscussions from "./ForumsAndDiscussions/ForumsAndDiscussions";
import NavigationTabs from "@/components/ReusableComponent/NavigationTabs/NavigationTabs";
import TabContent from "@/components/ReusableComponent/NavigationTabs/TabContent";
import Scholarship from "./Scholarship/Scholarship";

type Tab = {
  label: string;
  component: React.ComponentType;
};

const SingleCoursePage = () => {
  const tabs: Tab[] = [
    { label: "Overview", component: Overview },
    { label: "Top Colleges", component: TopColleges },
    { label: "Curriculum", component: Curriculum },
    { label: "Eligibility", component: Eligibility },
    { label: "Fee Structure", component: FeeStructure },
    { label: "Scholarship", component: Scholarship },
    { label: "Rating & reviews", component: RatingAndReviews },
    { label: "Facilities and staff", component: Facilities },
    { label: "Placement", component: Placement },
    { label: "News and updates", component: NewsAndUpdates },
    { label: "Forums and discussions", component: ForumsAndDiscussions },
  ];

  const [selectedTab, setSelectedTab] = useState<Tab>(tabs[0]);

  return (
    <>
      <div className="max-w-[1332px] mx-auto p-4">
        <HeroSection />
        <NavigationTabs tabs={tabs} onTabChange={setSelectedTab} />
      </div>
      <div className="bg-[#EEF4FF] pt-5">
        <TabContent selectedTab={selectedTab} />
      </div>
    </>
  );
};

export default SingleCoursePage;
