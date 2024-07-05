import React from "react";
import CollegeImage from "@/assets/images/CollegeImage.png";
import CollectionGrid from "./CollectionGrid";

function Collections() {
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
    <div>
      <CollectionGrid collections={dummyData} />
    </div>
  );
}

export default Collections;
