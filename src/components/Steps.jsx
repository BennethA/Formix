/* eslint-disable react/prop-types */

import { FaCircle } from "react-icons/fa";

const Steps = ({ agreementPage, steps }) => {
  return (
    <div className="flex justify-between items-center mt-9">
      {steps.map((step, index) => (
        <FaCircle
          className={`transition-all duration-300 border rounded-xl p-[3px] text-[22px] ${
            agreementPage > index
              ? "text-black border-black"
              : "text-[#1f1f1f2a] border-[#1f1f1f2a]"
          }`}
          key={index}
        />
        /* {index < steps.length - 1 && (
              <div className="flex flex-1 h-full items-center">
                <hr
                  className={`duration-200 transition-all w-full h-[3px] mx-3 ${
                    agreementPage > index + 1
                      ? "bg-black"
                      : "bg-[#1f1f1f2a]"
                  }`}
                />
              </div>
            )} */
      ))}
    </div>
  );
};

export default Steps;
