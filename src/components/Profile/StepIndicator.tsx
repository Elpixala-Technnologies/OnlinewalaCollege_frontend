const StepIndicator = ({ currentStep }: any) => {
  return (
    <div className="flex justify-between lg:w-[80%] w-[100%] mx-auto">
      <div className="text-center">
        <div
          className={`md:w-14 w-10 md:h-14 h-10 ${
            currentStep >= 1 ? "bg-blue-500" : "bg-gray-300"
          } text-white rounded-full flex items-center justify-center mx-auto font-bold text-2xl`}
        >
          1
        </div>
        <p className="mt-2 md:text-sm text-xs">Your Details</p>
      </div>
      <div className="text-center">
        <div
          className={`md:w-14 w-10 md:h-14 h-10 ${
            currentStep >= 2 ? "bg-blue-500" : "bg-gray-300"
          } text-white rounded-full flex items-center justify-center mx-auto font-bold text-2xl`}
        >
          2
        </div>
        <p className="mt-2 md:text-sm text-xs">Educational Details</p>
      </div>
      <div className="text-center">
        <div
          className={`md:w-14 w-10 md:h-14 h-10 ${
            currentStep >= 3 ? "bg-blue-500" : "bg-gray-300"
          } text-white rounded-full flex items-center justify-center mx-auto font-bold text-2xl`}
        >
          3
        </div>
        <p className="mt-2 md:text-sm text-xs">Desired Colleges</p>
      </div>
    </div>
  );
};

export default StepIndicator;
