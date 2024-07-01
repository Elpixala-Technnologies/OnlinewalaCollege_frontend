import React from "react";

const NavigationTabs = ({ selectedTab, setSelectedTab }: any) => {
  return (
    <div className="flex justify-around bg-blue-100 py-1 rounded-full mt-4 overflow-x-auto hide-scrollbar">
      <button
        onClick={() => setSelectedTab("Overview")}
        className={`px-4 py-1 min-w-max ${
          selectedTab === "Overview" ? "border-b-2 border-blue-600" : ""
        }`}
      >
        Overview
      </button>
      <button
        onClick={() => setSelectedTab("Approvals & Rankings")}
        className={`px-4 py-1 min-w-max ${
          selectedTab === "Approvals & Rankings"
            ? "border-b-2 border-blue-600"
            : ""
        }`}
      >
        Approvals & Rankings
      </button>
      <button
        onClick={() => setSelectedTab("Courses & Fees")}
        className={`px-4 py-1 min-w-max ${
          selectedTab === "Courses & Fees" ? "border-b-2 border-blue-600" : ""
        }`}
      >
        Courses & Fees
      </button>
      <button
        onClick={() => setSelectedTab("Scholarships")}
        className={`px-4 py-1 min-w-max ${
          selectedTab === "Scholarships" ? "border-b-2 border-blue-600" : ""
        }`}
      >
        Scholarships
      </button>
      <button
        onClick={() => setSelectedTab("Eligibility & admission process")}
        className={`px-4 py-1 min-w-max ${
          selectedTab === "Eligibility & admission process"
            ? "border-b-2 border-blue-600"
            : ""
        }`}
      >
        Eligibility & admission process
      </button>

      <button
        onClick={() => setSelectedTab("Rating & reviews")}
        className={`px-4 py-1 min-w-max ${
          selectedTab === "Rating & reviews" ? "border-b-2 border-blue-600" : ""
        }`}
      >
        Rating & Reviews
      </button>

      <button
        onClick={() => setSelectedTab("Facilities")}
        className={`px-4 py-1 min-w-max ${
          selectedTab === "Facilities" ? "border-b-2 border-blue-600" : ""
        }`}
      >
        Facilities
      </button>

      <button
        onClick={() => setSelectedTab("Placement")}
        className={`px-4 py-1 min-w-max ${
          selectedTab === "Placement" ? "border-b-2 border-blue-600" : ""
        }`}
      >
        Placement
      </button>

      <button
        onClick={() => setSelectedTab("FAQs")}
        className={`px-4 py-1 min-w-max ${
          selectedTab === "FAQs" ? "border-b-2 border-blue-600" : ""
        }`}
      >
        FAQs
      </button>

      <button
        onClick={() => setSelectedTab("Compare Colleges")}
        className={`px-4 py-1 min-w-max ${
          selectedTab === "Compare Colleges" ? "border-b-2 border-blue-600" : ""
        }`}
      >
        Compare Colleges
      </button>

      <button
        onClick={() => setSelectedTab("News and updates")}
        className={`px-4 py-1 min-w-max ${
          selectedTab === "News and updates" ? "border-b-2 border-blue-600" : ""
        }`}
      >
        News and updates
      </button>

      <button
        onClick={() => setSelectedTab("Forums and discussions")}
        className={`px-4 py-1 min-w-max ${
          selectedTab === "Forums and discussions"
            ? "border-b-2 border-blue-600"
            : ""
        }`}
      >
        Forums and discussions
      </button>
    </div>
  );
};

export default NavigationTabs;
