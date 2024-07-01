import React from "react";
import Notification from "./Notifications/Notification";
import AboutUniversity from "./AboutUniversity/AboutUniversity";
import Table from "./Table/Table";
import CoursesOffered from "./CoursesOffered/CoursesOffered";
import UniversityReview from "./UniversityReview/UniversityReview";
import FacilitiesSection from "./FacilitiesSection/FacilitiesSection";
import ImageGalleryMain from "./ImageGalleryProps/ImageGalleryMain";
import SameGroupCollege from "./SameGroupCollege/SameGroupCollege";
import News from "./NewsSection/News";

function Overview() {
  return (
    <div>
      <Notification />
      <AboutUniversity />
      <Table />
      <CoursesOffered />
      <UniversityReview />
      <FacilitiesSection />
      <ImageGalleryMain />
      <SameGroupCollege />
      <News />
    </div>
  );
}

export default Overview;
