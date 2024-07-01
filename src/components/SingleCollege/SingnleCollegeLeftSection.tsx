import React from "react";
import DownloadBroucher from "./SingleCollegeLeftSections/DownloadBroucher";
import VideoSections from "./SingleCollegeLeftSections/VideoSections";
import TopCourses from "./SingleCollegeLeftSections/TopCourses";
import ImageSections from "./SingleCollegeLeftSections/ImageSections";
import TopNews from "./SingleCollegeLeftSections/TopNews";

function SingnleCollegeLeftSection() {
  return (
    <>
      <DownloadBroucher />
      <VideoSections />
      <TopCourses />
      <ImageSections />
      <TopNews />
    </>
  );
}

export default SingnleCollegeLeftSection;
