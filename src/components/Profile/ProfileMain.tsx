"use client";
import React, { useState } from "react";
import ProfileSidebar from "./ProfileSidebar";
import RightSection from "./RightSection";

function ProfileMain() {
  const [selectedItem, setSelectedItem] = useState("Your Profile");

  return (
    <div className="bg-blue-100">
      <div className="lg:p-14 p-3 flex lg:flex-row flex-col justify-between items-start gap-10">
        <div className="lg:w-[25%] w-full">
          <ProfileSidebar
            selectedItem={selectedItem}
            onSelectItem={setSelectedItem}
          />
        </div>
        <div className="lg:w-[75%] w-full">
          <RightSection selectedItem={selectedItem} />
        </div>
      </div>
    </div>
  );
}

export default ProfileMain;
