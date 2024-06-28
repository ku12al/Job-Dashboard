import React from 'react'

const Aboutjob = () => {
  return (
      <div className="w-full md:flex-row flex flex-cols justify-between">
      <div className="w-[526px] h-[401px] mx-2 md:mx-[108px] my-5 md:flex-row flex flex-row justify-between ">
      <div className="w-full h-full">
        <h2 className="text-[14px] text-[#6E6D6D] font-medium mb-2 font-style">About the job</h2>
        <ol className="list-decimal list-inside  text-[#3D3D3D] text-[16px] font-medium font-style">
          <li>Handle the UI/UX research design</li>
          <li>Work on researching on latest web applications designs & trends</li>
          <li>Work on conceptualizing and visualizing</li>
          <li>Work on creating graphics content and other graphic related works</li>
        </ol>

        <div className="mt-4  text-[#3D3D3D] text-[16px] font-medium font-style">
          <h3 className="font-semibold font-style">Benefits:</h3>
          <ul className="list-disc pl-5">
            <li>Health insurance</li>
            <li>Provident Fund</li>
          </ul>
        </div>

        <div className="mt-4  text-[#3D3D3D] text-[16px] font-medium font-style">
          <h3 className="font-semibold">Schedule:</h3>
          <ul className="list-disc pl-5">
            <li>Day shift</li>
          </ul>
        </div>

        <div className="mt-4  text-[#3D3D3D] text-[16px] font-medium font-style">
          <h3 className="font-semibold">Supplemental pay types:</h3>
          <ul className="list-disc pl-5">
            <li>Performance bonus</li>
            <li>Yearly bonus</li>
          </ul>
        </div>

        <div className="flex justify-start  text-[#3D3D3D] text-[16px] font-medium font-style">
          <h3 className="font-semibold">Work Location:</h3>
          <p>In person</p>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Aboutjob