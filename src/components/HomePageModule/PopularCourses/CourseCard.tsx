import React from "react";

interface CourseCardProps {
  title: string;
  memberCount: number;
  color: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  memberCount,
  color,
}) => {
  return (
    <div className={`relative min-w-[281px] min-h-[261px] rounded-lg ${color}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center">
          <h3 className="text-2xl font-bold">{title}</h3>
          <div className="mt-2 flex items-center justify-center">
            <div className="flex -space-x-1 overflow-hidden">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="inline-block h-6 w-6 rounded-full bg-gray-300"
                />
              ))}
            </div>
            <span className="ml-2 text-sm">+ {memberCount}K Members</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
