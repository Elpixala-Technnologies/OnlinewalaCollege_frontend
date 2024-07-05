import React from "react";
import EventCard from "./EventCard";
import WebImage from "@/assets/images/CollegeImage.png";

const EventsAndWebinars = () => {
  const events = [
    {
      id: "1",
      title:
        "Career counselling tips for student to achieve the best course and colleges for students",
      imageUrl: WebImage,
      isLive: true,
    },
    {
      id: "2",
      title:
        "Career counselling tips for student to achieve the best course and colleges for students",
      imageUrl: WebImage,
      isLive: true,
    },
    {
      id: "3",
      title:
        "Career counselling tips for student to achieve the best course and colleges for students",
      imageUrl: WebImage,
      isLive: true,
    },
  ];
  return (
    <div className="container mx-auto p-7 py-14">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Events and Webinars
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
        {events?.map((event: any) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsAndWebinars;
