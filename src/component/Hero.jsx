import React from "react";
import { FaCircle, FaCoins } from "react-icons/fa";
import { FiMapPin} from "react-icons/fi";
import JobInsights from "./JobInsights.jsx";

const Hero = () => {
  return (
      <div className="w-full pb-6 border-t-[1px] border-[#D9D9D9] relative md:flex-row flex flex-col justify-between">
      <div className="w-[623px] h-[47px] mx-[108px] my-8 space-y-1">
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-2 md:space-y-0">
          <div className="flex space-x-4 lg:flex-row md:flex-col">
            <div className="flex-shrink-0 min-w-[300px]">
              <h1 className="text-[#3D3D3D] font-semibold text-[35px] font-style">
                Senior Product Designer
              </h1>
            </div>
            <div className="flex flex-row justify-between">
            <span className="self-center rounded-full h-[4px] w-[4px] bg-[#D1D1D1]"></span>
            <div className="flex items-center space-x-2 pl-1">
              <h4 className="text-sm text-[#888888] font-style">posted 2 days ago</h4>
              <div className="flex items-center space-x-1 bg-[#ECFDF3] rounded-full border-[2px] border-[#ABEFC6] px-2 py-1">
                <FaCircle className="text-green-600" size={10} />
                <h4 className="text-[#067647] text-[10px] font-style">Open</h4>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4 py-2 text-center md:text-left items-center md:items-start">
          <div className="flex items-center space-x-1">
            <FiMapPin className="text-[#5D5D5D]" />
            <h2 className="text-[#5D5D5D] font-style">Delaware, USA</h2>
          </div>
          <span className="self-center rounded-full h-[4px] w-[4px] bg-[#D1D1D1]"></span>
          <div className="flex items-center space-x-1">
            <FaCoins className="text-[#5D5D5D]" />
            <h2 className="text-[#5D5D5D] font-style">$300k-$400k</h2>
          </div>
        </div>
      </div>
      <div className="relative md:absolute md:right-0 md:top-0 py-8 w-[360px] h-[1100px] border-2 border-gray-200 bg-white">
        <JobInsights />
      </div>
    </div>
  );
};

export default Hero;
