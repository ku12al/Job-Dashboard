import React from 'react'
import { FiMessageSquare, FiEye } from "react-icons/fi";
import { LuPencil } from "react-icons/lu";
import { TbUserCheck } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
const JobInsights = () => {
  return (
      <div className='flex flex-col'>
      <div className='flex flex-row justify-between px-2'>
          <button className='w-[172px] h-[42px] ml-4 px-5 border border-1  bg-[#FEF4F2] border-[#DC4A2D] text-[#DC4A2D] rounded-[8px] flex items-center justify-around text-[15px] font-semibold font-style'>
          <RiDeleteBin6Line />
          Delete job
          </button>
          <button className='w-[172px] h-[42px] mr-4 ml-3 px-9 border border-1  bg-[#DC4A2D] border-[#FED3CA] text-white rounded-[8px] flex items-center justify-around text-[15px] font-style '>
          <LuPencil />
          Edit job
          </button>
      </div>
      <div className='flex flex-col mt-4 px-10'>
          <div className='flex flex-row py-4 justify-between ' >
              <div className='flex items-center justify-around'>
              <GoPeople />
              <h1 className='mx-2 font-style font-[500] text-gray-600 text-[15px]'>Applicants</h1>
              </div>
              <div className='text-[18px] font-bold '>400</div>
          </div>
          <span className='h-0.5 w-[278px] bg-[#E7E7E7] my-1'></span>
          <div className='flex flex-row py-4 justify-between' >
              <div className='flex items-center justify-around'>
              <TbUserCheck />
              <h1 className='mx-2  font-style font-[500] text-gray-600 text-[15px]'>Matches</h1>
              </div>
              <div className='text-[18px] font-bold '>100</div>
          </div>
          <span className='h-0.5 w-[278px] bg-[#E7E7E7] my-1'></span>
          <div className='flex flex-row py-4 justify-between ' >
              <div className='flex items-center justify-around'>
              <FiMessageSquare />
              <h1 className='mx-2 font-style font-[500] text-gray-600 text-[15px]'>Messages</h1>
              </div>
              <div className='text-[18px] font-bold '>147</div>
          </div>
          <span className='h-0.5 w-[278px] bg-[#E7E7E7] my-1'></span>
          <div className='flex flex-row py-4 justify-between' >
              <div className='flex items-center justify-around'>
              <FiEye />
              <h1 className='mx-2 font-style font-[500] text-gray-600 text-[15px]'>Views</h1>
              </div>
              <div className='text-[18px] font-bold text-black'>800</div>
          </div>
          <span className='h-0.5 w-[278px] bg-[#E7E7E7] my-1'></span>
      </div>
  </div>
  )
}

export default JobInsights