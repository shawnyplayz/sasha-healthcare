import React from "react";

const Stepper = ({ steps, currentStep, onStepClick }) => {
  return (
    <div className="flex flex-nowrap items-center justify-center lg:justify-start">
      {" "}
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          {/* Step */}
          <div
            className="flex items-center cursor-pointer mb-2 md:mb-0"
            onClick={() => onStepClick(index + 1)}
          >
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                index + 1 === currentStep
                  ? "border-green-500 text-green-500"
                  : index + 1 < currentStep
                  ? "border-black text-black"
                  : "border-gray-300 text-gray-300"
              }`}
            >
              {index + 1}
            </div>
            <span
              className={`ml-2 text-xs sm:text-base ${
                index + 1 === currentStep
                  ? "text-green-500"
                  : index + 1 < currentStep
                  ? "text-black"
                  : "text-gray-300"
              }`}
            >
              {step}
            </span>
          </div>

          {/* Divider Line */}
          {index !== steps.length - 1 && (
            <div className="h-1 bg-gray-300 mx-1 sm:w-8 sm:mx-4"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
