import React from "react";

function DownloadBroucher() {
  return (
    <div>
      <div className="shadow-lg rounded-lg bg-white py-5">
        <h1 className="text-center">Are you Interested in this College ?</h1>
        <div className="p-10">
          <div className="flex flex-col items-center gap-3">
            <button className="h-8 text-sm rounded-lg w-full border border-blue-600 bg-blue-600 bg-opacity-20">
              Download broucher
            </button>
            <button className="h-8 text-sm text-white rounded-lg bg-blue-500 w-full">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadBroucher;
