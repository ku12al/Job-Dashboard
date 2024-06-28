import React from "react";

const Footer = () => {
  return (
    <div className="w-[736px] h-[271px] ml-[108px] grid grid-cols-1 gap-y-4">
      <div className="w-[148px] h-[60px] pr-[10px] py-[10px]">
        <div className="w-[138px] h-[40px] flex justify-between">
          <img
            src="https://static.workventure.com/uploads/images/company/thumb/logo-atlassian-408-145.png"
            alt=""
            className="w-[40px] h-[40px] rounded-md"
          />
          <div className="w-[86px] h-[27px]">
            <h1 className="text-[#4F4F4F] text-[20px] font-medium font-style">
              Atlassian
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full h-[195px] grid grid-cols-2 gap-4">
        <div>
          <h1 className="text-[14px] text-[#6E6D6D] font-medium font-style">
            Company size
          </h1>
          <h1 className="text-[16px] text-[#3D3D3D] font-medium font-style">
            1k-2k Employees
          </h1>
        </div>
        <div>
          <h1 className="text-[14px] text-[#6E6D6D] font-medium font-style">Type</h1>
          <h1 className="text-[16px] text-[#3D3D3D] font-medium font-style">Private</h1>
        </div>

        <div>
          <h1 className="text-[14px] text-[#6E6D6D] font-medium font-style">Sector</h1>
          <h1 className="text-[16px] text-[#3D3D3D] font-medium font-style">
            Information Technology, Infrastructure
          </h1>
        </div>
        <div>
          <h1 className="text-[14px] text-[#6E6D6D] font-medium font-style">Funding</h1>
          <h1 className="text-[16px] text-[#3D3D3D] font-medium font-style">
            Bootstrapped
          </h1>
        </div>

        <div>
          <h1 className="text-[14px] text-[#6E6D6D] font-medium font-style">Founded In</h1>
          <h1 className="text-[16px] text-[#3D3D3D] font-medium font-style">2019</h1>
        </div>
        <div>
          <h1 className="text-[14px] text-[#6E6D6D] font-medium font-style">Founded By</h1>
          <a
            className="text-[16px] text-[#3D3D3D] font-medium font-style"
            href="https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Scott+Farquhar&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgGn2U5_lv-iJKoEW9GGV3oQ_U1KzHM3grBvdDJw8AP9jrnXyCRK6qNSYCb3jHdJP2aGUh_HIEtaCjacARkKoOWECb-5Ob0Mv9e_MI4c_vMY8PVDZWA6-OO6yqvbV1TIRgm4P4FtNTbK6rHh3ojk0CXz_ZgaKdVf6VpRiXhZ7YUAy8LzI5HMyryDEBGhju5Ama_FvECG7_qGa4tSKw7XIbHa99s9btrbgRBy-6z85_2p6BPYPhA%3D%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAXoECDYQAw"
          >
            Scott Farquhar,
          </a>
          <a
            className="text-[16px] text-[#3D3D3D] font-medium font-style"
            href="https://www.google.com/search?sca_esv=2e8a42a989b18c72&sca_upv=1&sxsrf=ADLYWIJfOan6Il30oG_UZfuOgWJJQyy6jw:1718807486320&q=Mike+Cannon-Brookes&si=ACC90nwLLwns5sISZcdzuISy7t-NHozt8Cbt6G3WNQfC9ekAgJsvrQUWPOKZ8iETJQdvnbU2UFD7BVWUbHmvxqkn_X6fnbX-LLuIjmm9FYDOCdLoN8dDFvHE1HsZUhT6XIGTrbZRGGDIDstquY_yluK6YQX1NkHtmo0wsp8wVD7ouAbjfDvaQHjO4Iyd2AKnCQbPH8-Ah5otgNPwHcJ39HScqiWv6SVxYRXUiznwfdbns6uKnydurua8JyyTlcxFT3lPFMTAfAAzqy-x0DxflUh6aHFtCEgFOChGuNdxmDlND1wruAK7SbM%3D&sa=X&sqi=2&ved=2ahUKEwip7KLt8OeGAxVBRmwGHTGjBGsQmxMoAnoECDYQBA"
          >
            Mike Cannon-Brookes
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
