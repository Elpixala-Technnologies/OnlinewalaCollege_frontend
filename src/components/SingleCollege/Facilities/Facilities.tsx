import React from "react";
import InfoCard from "./Campus";
import News from "../Overview/NewsSection/News";

function Facilities() {
  const campusImmersionData = {
    title: "Campus immersion",
    description:
      "In-person events are organized to boost peer interaction and allow learners to step out of their virtual learning bubbles.",
    points: [
      "Connect with peers and faculty in-person.",
      "Share experiences and ideas, and get diverse perspectives from learners across the country and abroad.",
      "Network with professionals and peers to build greater networks",
    ],
  };

  const careerServicesData = {
    title: "Career & placement assistance services",
    description:
      "With an experienced team and extensive industry connections, we help you find the right opportunities to take your career to the next level.",
  };

  const additionalToolsData = {
    title: "Additional tools & certifications",
    description:
      "Make the most of the free Coursera access and choose from over 10,000+ professional certifications and courses from leading global universities while completing your degree.",
  };
  return (
    <div className=" bg-gray-100">
      <div className="">
        <InfoCard
          title={campusImmersionData.title}
          description={campusImmersionData.description}
          points={campusImmersionData.points}
        />
        <InfoCard
          title={careerServicesData.title}
          description={careerServicesData.description}
        />
        <InfoCard
          title={additionalToolsData.title}
          description={additionalToolsData.description}
        />

        <News />
      </div>
    </div>
  );
}

export default Facilities;
