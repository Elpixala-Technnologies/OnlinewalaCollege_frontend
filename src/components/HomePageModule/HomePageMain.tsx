"use client";

import React from "react";
import HomePageHeader from "./HomeHeader/HomeHeader";
import HomeHeroSection from "./HomeHeroSection/HomeHeroSection";
import HomeImageLine from "./HomeImageLine/HomeImageLine";
import PopularCourses from "./PopularCourses/PopularCourses";
import EventsAndWebinars from "./Webinar/EventsAndWebinars";
import HomePageTopCollege from "./HomePageTopCollege/HomeTopCollege";
import StudentReview from "./StudentReview/StudentReview";
import NewsCarousel from "./NewsCarousel/NewsCarousel";
import ExploreCollege from "./ExploreColleges/ExploreCollege";
import DiscussionForums from "./DiscussionForums/DiscussionForums";
import CourseGrid from "../CourseModule/CourseListingPage/StartExplore/CourseGrid";
import FAQSection from "../ReusableComponent/FAQSections/FAQSection";

function HomePageMain() {
  const faqData = [
    {
      question:
        "What are the eligibility criteria for students to avail the career and placement assistance at Online Manipal?",
      answer: "Answer details here...",
    },
    {
      question:
        "What are the services offered to students by Manipal University Online before the placement process?",
      answer: "Answer details here...",
    },
    {
      question: "Who are the top recruiters at Manipal University Online?",
      answer: "Answer details here...",
    },
    {
      question: "What skill development training is offered at Manipal Online?",
      answer: "Answer details here...",
    },
  ];
  return (
    <>
      <div className="bg-[#3455FF]">
        <HomePageHeader />
        <HomeHeroSection />
        <HomeImageLine />
      </div>
      <div className="bg-white">
        <PopularCourses />
      </div>
      <div className="bg-blue-200">
        <EventsAndWebinars />
      </div>
      <div className="bg-white container mx-auto p-7">
        <HomePageTopCollege />
      </div>
      <div className="bg-white container mx-auto p-7">
        <StudentReview />
      </div>
      <div className="bg-white container mx-auto p-7">
        <NewsCarousel />
      </div>
      <div className="bg-blue-200 ">
        <ExploreCollege />
      </div>
      <div className="bg-white ">
        <DiscussionForums />
      </div>
      <div className="bg-white ">
        <CourseGrid />
      </div>
      <div className="bg-blue-200 p-10">
        <div className="container mx-auto ">
          <FAQSection faqData={faqData} />
        </div>
      </div>
    </>
  );
}

export default HomePageMain;
