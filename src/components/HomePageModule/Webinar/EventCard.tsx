import Image from "next/image";
import React from "react";

interface EventCardProps {
  event: {
    title: string;
    imageUrl: any;
    isLive: boolean;
  };
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden w-full">
      <div className="relative">
        <Image
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-t-2xl"
        />
        {event.isLive && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-4 py-1 rounded-full text-sm">
            Live
          </span>
        )}
      </div>
      <div className="p-4 bg-blue-100 bg-opacity-50">
        <h2 className="text-lg font-semibold mb-2 line-clamp-2">
          {event.title}
        </h2>
        <button className="w-full bg-[#001CAF] h-[45px] text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
          Attend now
        </button>
      </div>
    </div>
  );
};

export default EventCard;
