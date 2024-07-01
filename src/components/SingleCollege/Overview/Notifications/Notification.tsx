// components/Notification.tsx
import React from "react";

interface Notification {
  date: string;
  message: string;
}

const notifications: Notification[] = [
  {
    date: "21 June 2024",
    message: "Manipur University online admissions apply till 30 June 2024",
  },
  {
    date: "20 June 2024",
    message: "Manipur University online admissions apply till 30 June 2024",
  },
  {
    date: "19 June 2024",
    message: "Manipur University online admissions apply till 30 June 2024",
  },
  {
    date: "18 June 2024",
    message: "Manipur University online admissions apply till 30 June 2024",
  },
  {
    date: "17 June 2024",
    message: "Manipur University online admissions apply till 30 June 2024",
  },
  {
    date: "15 June 2024",
    message: "Manipur University online admissions apply till 30 June 2024",
  },
];

const Notification: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5">
      <div className="flex items-center mb-4">
        <svg
          className="w-6 h-6 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <h2 className="text-xl font-semibold">Notification</h2>
      </div>
      <ul className="space-y-2">
        {notifications.map((notification, index) => (
          <li key={index} className="text-sm">
            <span className="text-blue-600">{notification.date}: </span>
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
