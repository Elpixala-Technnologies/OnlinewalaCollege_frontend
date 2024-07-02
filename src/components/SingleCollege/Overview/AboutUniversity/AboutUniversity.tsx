"use client";
import React, { useState } from "react";

const AboutUniversity: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = `Manipal University Jaipur (MUJ) is ranked 76th in the Engineering category & 79th in the Management category by NIRF 2023 ranking. Manipal University Jaipur, a private university, was established in 2011 and is a part of the Manipal Education and Medical Group (MEMG). Manipal University Jaipur offers undergraduate, postgraduate, and doctoral programs in various fields such as engineering, management, basic and applied sciences, humanities, social sciences, journalism and mass communication, and law. The university also offers various diploma programs.`;

  const shortenedText = fullText.slice(0, 300) + "...";

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-5 mt-5">
      <h2 className="text-xl font-semibold mb-4">
        About Manipal University Online, Jaipur
      </h2>
      <p className="text-gray-700">{isExpanded ? fullText : shortenedText}</p>

      <div className="flex justify-end items-end">
        <button
          onClick={toggleReadMore}
          className="text-blue-600 hover:underline mt-2 focus:outline-none"
        >
          {isExpanded ? "Read less" : "Read more..."}
        </button>
      </div>
    </div>
  );
};

export default AboutUniversity;
