import React from "react";
import RankingContainer from "./RankingContainer/RankingContainer";
import Logo from "@/assets/images/Rectangle 745.png";

export interface RankingData {
  topStreams: string[];
  topAgencies: string[];
  sections: any[];
}

function ApprovalsAndRankings() {
  const sampleData: RankingData = {
    topStreams: ["All", "Overall", "Architecture", "Management", "Law"],
    topAgencies: ["All", "India Today", "The Week", "Outlook", "NIRF"],
    sections: [
      {
        title: "India Today",
        logo: Logo,
        rankings: [
          {
            stream: "Overall",
            rank2023: "#2nd out of 100 in India 2023",
            rank2022: "#3rd out of 100 in India 2022",
          },
          {
            stream: "B.Tech",
            rank2023: "#5th out of 100 in India 2023",
            rank2022: "#7th out of 100 in India 2022",
          },
        ],
      },
      {
        title: "The Week Ranking",
        logo: Logo,
        rankings: [
          {
            stream: "Overall",
            rank2023: "#3rd out of 100 in India 2023",
            rank2022: "#5th out of 100 in India 2022",
            rank2021: "#4th out of 100 in India 2021",
          },
          {
            stream: "Architecture",
            rank2023: "#7th out of 50 in India 2023",
            rank2022: "#8th out of 50 in India 2022",
            rank2021: "#6th out of 50 in India 2021",
          },
          {
            stream: "B.Tech",
            rank2023: "#8th out of 100 in India 2023",
            rank2022: "#11th out of 100 in India 2022",
            rank2021: "#9th out of 100 in India 2021",
          },
        ],
      },
      // Add more sections (NIRF, Outlook, etc.) following the same structure
    ],
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <RankingContainer data={sampleData} />
    </div>
  );
}

export default ApprovalsAndRankings;
