import React, { useState } from "react";

function EducationalDetails({ onNext }: any) {
  const [formData, setFormData] = useState({
    graduationInstitute: "",
    graduationYear: "",
    graduationGradingSystem: "Percentage",
    graduationCourse: "",
    twelfthSchool: "",
    twelfthYear: "",
    twelfthGradingSystem: "Percentage",
    twelfthBoard: "",
    twelfthStream: "",
    tenthSchool: "",
    tenthYear: "",
    tenthGradingSystem: "Percentage",
    tenthBoard: "",
    isTenthSameAsTwelfth: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Educational details submitted:", formData);
    onNext();
  };

  return (
    <div className="p-6 font-sans">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3">
              Graduation Educational Details
            </h3>
            <div className="space-y-3">
              <input
                type="text"
                name="graduationInstitute"
                placeholder="Institute name"
                className="w-full p-2 border rounded"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="graduationYear"
                placeholder="Grad pass year"
                className="w-full p-2 border rounded"
                onChange={handleInputChange}
              />
              <div className="flex">
                <input
                  type="text"
                  name="graduationGradingSystem"
                  placeholder="Grading system"
                  className="w-2/3 p-2 border rounded-l"
                  value={formData.graduationGradingSystem}
                  onChange={handleInputChange}
                />
                <div className="w-1/3 p-2 bg-gray-200 text-center rounded-r">
                  Percentage
                </div>
              </div>
              <input
                type="text"
                name="graduationCourse"
                placeholder="Graduation course"
                className="w-full p-2 border rounded"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-3">
              12th Educational Details
            </h3>
            <div className="space-y-3">
              <input
                type="text"
                name="twelfthSchool"
                placeholder="School name"
                className="w-full p-2 border rounded"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="twelfthYear"
                placeholder="12th passing year"
                className="w-full p-2 border rounded"
                onChange={handleInputChange}
              />
              <div className="flex">
                <input
                  type="text"
                  name="twelfthGradingSystem"
                  placeholder="Grading system"
                  className="w-2/3 p-2 border rounded-l"
                  value={formData.twelfthGradingSystem}
                  onChange={handleInputChange}
                />
                <div className="w-1/3 p-2 bg-gray-200 text-center rounded-r">
                  Percentage
                </div>
              </div>
              <input
                type="text"
                name="twelfthBoard"
                placeholder="Board"
                className="w-full p-2 border rounded"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="twelfthStream"
                placeholder="Stream"
                className="w-full p-2 border rounded"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-3">
            10th Educational Details
          </h3>
          <div className="space-y-3">
            <input
              type="text"
              name="tenthSchool"
              placeholder="School name"
              className="w-full p-2 border rounded"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="tenthYear"
              placeholder="10th passing year"
              className="w-full p-2 border rounded"
              onChange={handleInputChange}
            />
            <div className="flex">
              <input
                type="text"
                name="tenthGradingSystem"
                placeholder="Grading system"
                className="w-2/3 p-2 border rounded-l"
                value={formData.tenthGradingSystem}
                onChange={handleInputChange}
              />
              <div className="w-1/3 p-2 bg-gray-200 text-center rounded-r">
                Percentage
              </div>
            </div>
            <input
              type="text"
              name="tenthBoard"
              placeholder="Board"
              className="w-full p-2 border rounded"
              onChange={handleInputChange}
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                name="isTenthSameAsTwelfth"
                id="sameAs12th"
                className="mr-2"
                checked={formData.isTenthSameAsTwelfth}
                onChange={handleInputChange}
              />
              <label htmlFor="sameAs12th">Same as 12th</label>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Save and next
          </button>
        </div>
      </form>
    </div>
  );
}

export default EducationalDetails;
