import React, { useState } from 'react'

const Navbar = () => {
      const [active, setActive] = useState(1);
      


  return (
      <div className="w-full h-[62px] py-2  border-[0.5px] border-[#D9D9D9] md:flex-row flex flex-row justify-between">
      <div className="w-[590px] h-[27px] mx-24 my-4 flex justify-between cursor-pointer">
            <div className={` px-3 text-[20px] ${active===1 ? "border-[#DC4A2D] underline underline-offset-[13px] text-[#DC4A2D] font-[600]" : "text-[#888888] font-[500]"}`} onClick={() => setActive(1)}>
                  <h1 className='font-style'>Job preview</h1>
            </div>
            <div className={`px-3 text-[20px] ${active===2 ? "border-[#DC4A2D] underline underline-offset-[13px] text-[#DC4A2D] font-semibold" : "text-[#888888] font-[500]"}`} onClick={() => setActive(2)}>
                  <h1 className='font-style'>Applicants</h1>
            </div>
            <div className={`px-3 text-[20px] ${active===3 ? "border-[#DC4A2D] underline underline-offset-[13px] text-[#DC4A2D] font-semibold" : "text-[#888888] font-[500]"}`} onClick={() => setActive(3)}>
                  <h1 className='font-style'>Match</h1>
            </div>
            <div className={`px-3 text-[20px] ${active===4 ? "border-[#DC4A2D] underline underline-offset-[13px] text-[#DC4A2D] font-semibold" : "text-[#888888] font-[500]"}`} onClick={() => setActive(4)}>
                  <h1 className='font-style'>Messages</h1>
            </div>
      </div>
    </div>
  )
}

export default Navbar