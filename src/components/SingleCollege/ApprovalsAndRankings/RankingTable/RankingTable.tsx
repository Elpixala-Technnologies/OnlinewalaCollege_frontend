// components/RankingTable.tsx
import React from "react";
import { RankingData } from "../ApprovalsAndRankings";

interface RankingTableProps {
  rankings: RankingData[];
}

const RankingTable: React.FC<RankingTableProps> = ({ rankings }) => {
  return (
    <div className="overflow-x-auto hide-scrollbar">
      <table className="w-full border-collapse rounded-md">
        <thead>
          <tr className="bg-[#B4CDFF] ">
            <th className="p-2 border min-w-40">Stream</th>
            <th className="p-2 border min-w-40">2023 Ranking</th>
            <th className="p-2 border min-w-40">2022 Ranking</th>
            <th className="p-2 border min-w-40">2021 Ranking</th>
          </tr>
        </thead>
        <tbody>
          {rankings.map((ranking: any, index: any) => (
            <tr key={index} className="">
              <td className="p-2 border min-w-40">{ranking.stream}</td>
              <td className="p-2 border min-w-40">{ranking.rank2023 || "-"}</td>
              <td className="p-2 border min-w-40">{ranking.rank2022 || "-"}</td>
              <td className="p-2 border min-w-40">{ranking.rank2021 || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RankingTable;
