import React, { useState } from "react";
import QuestionList from "./QuestionList";
import FilterBar from "./FilterBar";
import QuestionInput from "./QuestionInput";

function ForumsAndDiscussions() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question:
        "Which should one select, either the online PGDM course at BIMTECH with upgrad or online MBA at Manipal?",
      askedBy: "Akshat",
      answers: [
        {
          id: 1,
          author: "Madhur",
          content:
            "The fee of an Online MBA at Manipal is around Rs. 1,50,000 while BIMTECH is around Rs. 2,50,000. The placements are almost similar. However, BIMTECH has a collaboration with Upgrad. The final choice is personal to the aspirants.",
          postedOn: "April 20th, 2023",
        },
      ],
    },
    {
      id: 2,
      question: "I need all the course list available",
      askedBy: "Akshat",
      answers: [
        {
          id: 2,
          author: "Madhur",
          content:
            "The fee of an Online MBA at Manipal is around Rs. 1,50,000 while BIMTECH is around Rs. 2,50,000. The placements are almost similar. However, BIMTECH has a collaboration with Upgrad. The final choice is personal to the aspirants.",
          postedOn: "April 20th, 2023",
        },
      ],
    },
  ]);

  return (
    <div className="bg-white rounded-lg  p-4">
      <h1 className="text-2xl font-bold mb-4">
        Ask your questions on Manipal University Online, Jaipur
      </h1>
      <p className="text-sm text-gray-600 mb-4">
        Get the latest answers on cutoff, courses, placements, admission, fees,
        ranking & eligibility. All answers have been submitted by students,
        alumni & experts.
      </p>
      <QuestionInput />
      <h2 className="text-xl font-semibold mt-8 mb-4">
        Questions on Manipal University Online, Jaipur
      </h2>
      <FilterBar />
      <QuestionList questions={questions} />
      <button className="block mx-auto mt-8 px-4 py-2 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300">
        View more
      </button>
    </div>
  );
}

export default ForumsAndDiscussions;
