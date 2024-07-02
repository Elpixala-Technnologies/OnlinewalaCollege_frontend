"use client";

import { useState, useEffect } from "react";
import SingleCollegeHeroSection from "./SingleCollegeHeroSection/SingleCollegeHeroSection";
import Overview from "./Overview/Overview";
import CoursesAndFees from "./CoursesAndFees/CoursesAndFees";
import ApprovalsAndRankings from "./ApprovalsAndRankings/ApprovalsAndRankings";
import EligibilityAndAdmissionProcess from "./EligibilityAndAdmissionProcess/EligibilityAndAdmissionProcess";
import SingnleCollegeLeftSection from "./SingnleCollegeLeftSection";
import RatingAndReviews from "./RatingAndReviews/RatingAndReviews";
import NavigationTabs from "../ReusableComponent/NavigationTabs/NavigationTabs";
import ScholarShipMain from "./Scholarships/ScholarShipMain";
import Facilities from "./Facilities/Facilities";
import Placement from "./Placement/Placement";
import FAQs from "./FAQs/FAQs";
import CompareColleges from "./CompareColleges/CompareColleges";
import NewsAndUpdates from "./NewsAndUpdates/NewsAndUpdates";
import ForumsAndDiscussions from "./Forums and discussions/ForumsAndDiscussions";

type Tab =
  | "Overview"
  | "Approvals & Rankings"
  | "Courses & Fees"
  | "Scholarships"
  | "Eligibility & admission process"
  | "Facilities"
  | "Rating & reviews"
  | "Placement"
  | "FAQs"
  | "Compare Colleges"
  | "News and updates"
  | "Forums and discussions";

const SingleCollegeMain = () => {
  const [selectedTab, setSelectedTab] = useState<Tab | null>(null);

  useEffect(() => {
    const savedTab = localStorage.getItem("selectedTab") as Tab | null;
    if (savedTab) {
      setSelectedTab(savedTab);
    } else {
      setSelectedTab("Overview");
    }
  }, []);

  useEffect(() => {
    if (selectedTab) {
      localStorage.setItem("selectedTab", selectedTab);
    }
  }, [selectedTab]);

  const renderContent = () => {
    switch (selectedTab) {
      case "Overview":
        return <Overview />;
      case "Approvals & Rankings":
        return <ApprovalsAndRankings />;
      case "Courses & Fees":
        return <CoursesAndFees />;
      case "Scholarships":
        return <ScholarShipMain />;
      case "Eligibility & admission process":
        return <EligibilityAndAdmissionProcess />;
      case "Rating & reviews":
        return <RatingAndReviews />;
      case "Facilities":
        return <Facilities />;
      case "Placement":
        return <Placement />;
      case "FAQs":
        return <FAQs />;
      case "Compare Colleges":
        return <CompareColleges />;
      case "News and updates":
        return <NewsAndUpdates />;
      case "Forums and discussions":
        return <ForumsAndDiscussions />;
      default:
        return <Overview />;
    }
  };

  return (
    <div>
      {/* for hero section */}
      <div className="max-w-[1332px] mx-auto p-4">
        <SingleCollegeHeroSection />

        {selectedTab && (
          <NavigationTabs
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        )}
      </div>
      <div className="bg-[#EEF4FF]">
        <div className="md:flex gap-5 max-w-[1332px] mx-auto p-4">
          {/* right section */}
          <div className="md:w-[69%]">{selectedTab && renderContent()}</div>
          {/* left section */}
          <div className="md:w-[31%] md:block hidden">
            <SingnleCollegeLeftSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCollegeMain;
