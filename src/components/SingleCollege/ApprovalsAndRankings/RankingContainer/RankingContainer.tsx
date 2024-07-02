import React from "react";
import RankingSection from "../RankingSection/RankingSection";
import { RankingData } from "../ApprovalsAndRankings";

interface RankingContainerProps {
  data: RankingData;
}

const RankingContainer: React.FC<RankingContainerProps> = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Top Streams:</h3>
        <div className="flex flex-wrap gap-2">
          {data?.topStreams?.map((stream: any, index: any) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
            >
              {stream}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Top Agencies:</h3>
        <div className="flex flex-wrap gap-2">
          {data.topAgencies.map((agency: any, index: any) => (
            <span
              key={index}
              className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
            >
              {agency}
            </span>
          ))}
        </div>
      </div>
      {data.sections.map((section: any, index: any) => (
        <RankingSection key={index} {...section} />
      ))}
    </div>
  );
};

export default RankingContainer;
