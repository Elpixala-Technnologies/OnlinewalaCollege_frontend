"use client";

import React, { useState } from "react";
import SingleCollegeHeroSection from "./SingleCollegeHeroSection/SingleCollegeHeroSection";
import Overview from "./Overview/Overview";
import CoursesAndFees from "./CoursesAndFees/CoursesAndFees";
import ApprovalsAndRankings from "./ApprovalsAndRankings/ApprovalsAndRankings";
import EligibilityAndAdmissionProcess from "./EligibilityAndAdmissionProcess/EligibilityAndAdmissionProcess";
import SingnleCollegeLeftSection from "./SingnleCollegeLeftSection";
import RatingAndReviews from "./RatingAndReviews/RatingAndReviews";
import ScholarShipMain from "./Scholarships/ScholarShipMain";
import Facilities from "./Facilities/Facilities";
import Placement from "./Placement/Placement";
import FAQs from "./FAQs/FAQs";
import NewsAndUpdates from "./NewsAndUpdates/NewsAndUpdates";
import ForumsAndDiscussions from "./Forums and discussions/ForumsAndDiscussions";
import NavigationTabs from "@/components/ReusableComponent/NavigationTabs/NavigationTabs";
import TabContent from "@/components/ReusableComponent/NavigationTabs/TabContent";
import CompareCollegesMain from "./CompareColleges/CompareCollegesMain";

type Tab = {
  label: string;
  component: React.ComponentType;
};

const SingleCollegeMain = () => {
  const tabs: Tab[] = [
    { label: "Overview", component: Overview },
    { label: "Approvals & Rankings", component: ApprovalsAndRankings },
    { label: "Courses & Fees", component: CoursesAndFees },
    { label: "Scholarships", component: ScholarShipMain },
    {
      label: "Eligibility & admission process",
      component: EligibilityAndAdmissionProcess,
    },
    { label: "Rating & reviews", component: RatingAndReviews },
    { label: "Facilities", component: Facilities },
    { label: "Placement", component: Placement },
    { label: "FAQs", component: FAQs },
    { label: "Compare Colleges", component: CompareCollegesMain },
    { label: "News and updates", component: NewsAndUpdates },
    { label: "Forums and discussions", component: ForumsAndDiscussions },
  ];

  const [selectedTab, setSelectedTab] = useState<Tab>(tabs[0]);

  return (
    <div>
      <div className="max-w-[1332px] mx-auto p-4">
        <SingleCollegeHeroSection />
        <NavigationTabs tabs={tabs} onTabChange={setSelectedTab} />
      </div>
      <div className="bg-[#EEF4FF]">
        <div className="md:flex gap-5 max-w-[1332px] mx-auto p-4">
          <div className="md:max-w-[69%] md:min-w-[69%]">
            <TabContent selectedTab={selectedTab} />
          </div>
          <div className="md:max-w-[31%] md:min-w-[31%]  md:block hidden">
            <SingnleCollegeLeftSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCollegeMain;
