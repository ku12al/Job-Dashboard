import React from "react";

const Subhero = () => {
  return (
    <div className="w-full border-b-[1px] border-[#D9D9D9] md:flex-row flex flex-cols justify-between">
      <div className="w-[872px] h-[115px] mx-[108px] my-10 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
        <div className="w-[170px] h-full">
          <div>
            <h1 className="text-[#6E6D6D] font-style">Skills Required</h1>
          </div>
          <div className="py-2 space-y-2">
            <div className="w-[66px] flex items-center pl-2 border-[1px] border-[#D0D5DD] rounded-md">
              <img
                src="https://th.bing.com/th/id/OIP.NI94miDnt29EtYfOyUGBUQHaLG?rs=1&pid=ImgDetMain"
                alt=""
                className="w-[10px] h-[12px]"
              />
              <h1 className="text-[#344054] pl-2 text-[12px] font-style">
                Figma
              </h1>
            </div>
            <div className="w-[126.41px] h-[24px] flex items-center pl-1 border-[1px] border-[#D0D5DD] rounded-md">
              <img
                src="https://th.bing.com/th/id/OIP.4YvSN4vCvED1popDk_WQEgHaHO?rs=1&pid=ImgDetMain"
                alt=""
                className="w-[15px] h-[15px] pl-[2px] rounded-sm"
              />
              <h1 className="text-[#344054] text-[12px] pl-2 font-style">
                Adobe Illustrator
              </h1>
            </div>
            <div className="w-[88.41px] h-[24px] flex items-center pl-1 border-[1px] border-[#D0D5DD] rounded-md">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1200px-Adobe_XD_CC_icon.svg.png"
                alt=""
                className="w-[15px] h-[15px] pl-[2px] rounded-sm"
              />
              <h1 className="text-[#344054] text-[12px] pl-2 font-style">
                Adobe XD
              </h1>
            </div>
          </div>
        </div>

        <div className="grid min-[1300px]:grid-cols-3 ml-10 md:grid-cols-2 justify-between md:gap-5 w-[2000px]">
        <div className="w-[170px] h-[49px] mx-2 flex flex-col justify-center items-start">
          <h1 className="text-[14px] text-[#6E6D6D] font-medium font-style">
            Preferred Language
          </h1>
          <h2 className="text-[16px] text-[#3D3D3D] font-semibold font-style">
            English
          </h2>
        </div>

        <div className="w-[170px] h-[49px] mx-2 flex flex-col justify-center items-start">
          <h1 className="text-[14px] text-[#6E6D6D] font-medium font-style">
            Type
          </h1>
          <h2 className="text-[16px] text-[#3D3D3D] font-semibold font-style">
            Full time
          </h2>
        </div>

        <div className="w-[178px] h-[49px] mx-2 flex flex-col justify-center items-start">
          <h1 className="text-[14px] text-[#6E6D6D] font-medium font-style">
            Years of Experience
          </h1>
          <h2 className="text-[16px] text-[#3D3D3D] font-semibold font-style">
            3+ Years of Experience
          </h2>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Subhero;
