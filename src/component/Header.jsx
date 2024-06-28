import React, { useState } from "react";
import { LuMessageSquare } from "react-icons/lu";
import { PiHandCoins } from "react-icons/pi";
import { FiBriefcase, FiBell } from "react-icons/fi";
import { IoChevronDownOutline } from "react-icons/io5";

const Header = () => {
  const [active, setActive] = useState(1);
  return (
    // <div className="w-full h-auto bg-[#FFFFFF] py-4 px-1 flex justify-between">
      <div className="w-full h-[100px] bg-white py-6 px-[28px]  md:flex-row flex flex-row justify-between top-0 sticky z-30">
        <div className="w-[100px] h-[55px] bg-[#E7E7E7] py-[4px] px-[28px] text-center flex items-center justify-center ">
          <h1 className="text-[#DC4A2D] font-semibold text-[20px] font-style">Logo</h1>
        </div>

        <div className="w-[450px] h-[60px] py-2 px-2 text-center flex items-center justify-center md:space-y-0 md:space-x-8 rounded-full border-[0.5px] border-[#D1D1D1] cursor-pointer">
          <div className={`w-[294px] h-[50px] flex justify-center items-center rounded-[40px] border-[2px] ${active===1 ? " bg-[#DC4A2D] border-[#FCB4A5]" : "bg-[#FFFFFF] border-white"}`} onClick={() => setActive(1)}>
            <FiBriefcase size={20} className={`${active===1 ? "text-[#FFFFFF]" : "text-[#B0B0B0]"}`}/>
            <h1 className={`px-1 font-style font-medium text-[20px] ${active===1 ? "text-[#FFFFFF]" : "text-[#B0B0B0]"}`}>Jobs</h1>
          </div>
          <div className={`w-[420px] h-[50px] flex justify-center items-center rounded-[40px] border-[2px] ${active===2 ? " bg-[#DC4A2D] border-[#FCB4A5] " : "bg-[#FFFFFF] border-white"}`} onClick={() => setActive(2)}>
            <div className="relative">
            <LuMessageSquare size={30} className={`${active===2 ? "text-[#FFFFFF]" : "text-[#B0B0B0]"}`}/>
            <span class="absolute top-0 right-0 rounded-full h-[4px] w-[4px] bg-[#DC4A2D]"></span>
            </div>
            <h1 className={`px-1 font-medium font-style text-[20px] ${active===2 ? "text-[#FFFFFF]" : "text-[#B0B0B0]"}`}>Messages</h1>
          </div>
          <div className={`w-[420px] h-[50px] flex justify-center items-center rounded-[40px] border-[2px] ${active===3 ? " bg-[#DC4A2D] border-[#FCB4A5] " : "bg-[#FFFFFF] border-white"}`} onClick={() => setActive(3)}>
            <PiHandCoins size={30} className={`${active===3 ? "text-[#FFFFFF]" : "text-[#B0B0B0]"}`}/>
            <h1 className={`px-1 font-style font-medium text-[20px] ${active===3 ? "text-[#FFFFFF]" : "text-[#B0B0B0]"}`}>Payments</h1>
          </div>
        </div>

        <div className="flex space-x-2 mt-4 md:mt-0 items-center">
          {/* Icon for notifications */}
          <div className="relative">
          <FiBell size={30} className="text-gray-700" />
          <span class="absolute top-0 right-1 rounded-full h-[4px] w-[4px] bg-[#DC4A2D]"></span>
          </div>

          {/* Profile Image and Dropdown Icon */}
          <div className="flex items-center ">
            <div className="w-9 h-9 rounded-full overflow-hidden">
              <img
                src="https://th.bing.com/th/id/OIP.0yXC974S_Qn0sCvwllS4DQAAAA?w=256&h=256&rs=1&pid=ImgDetMain"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <IoChevronDownOutline size={20} className="text-gray-700" />
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Header;
