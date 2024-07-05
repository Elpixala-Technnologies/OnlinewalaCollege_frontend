import React from "react";
import ExploreCollegeList from "./ExploreCollegeList";
import CollegeImage from "@/assets/images/CollegeImage.png";

function ExploreCollege() {
  const dummyData = [
    {
      id: "1",
      title: "Best online MBA/PGDM colleges in India accepting CMAT",
      imageUrl: CollegeImage,
      count: 150,
    },
    {
      id: "2",
      title: "Best online MBA/PGDM colleges in India accepting CMAT",
      imageUrl: CollegeImage,
      count: 150,
    },
    {
      id: "3",
      title: "Best online MBA/PGDM colleges in India accepting CMAT",
      imageUrl: CollegeImage,
      count: 150,
    },
    {
      id: "4",
      title: "Best online MBA/PGDM colleges in India accepting CMAT",
      imageUrl: CollegeImage,
      count: 150,
    },
    // ... add more dummy data
  ];
  return (
    <div className="container mx-auto p-7">
      <ExploreCollegeList collections={dummyData} />
    </div>
  );
}

export default ExploreCollege;
