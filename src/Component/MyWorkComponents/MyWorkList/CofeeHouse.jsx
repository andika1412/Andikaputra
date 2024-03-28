import React from "react";
import { useNavigate } from "react-router-dom";

const CofeeHouse = () => {
  const navigate = useNavigate();
  return (
    <div className="px-[24px] md:px-[100px] max-w-[1100px]  mt-[32px] flex flex-col mx-auto">
      <div className="font-Inter"></div>

      {/* //button */}
      <div>
        <button
          className="text-gray-600 flex text-[18px]  items-center "
          onClick={() => {
            navigate(-1);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="16px" viewBox="0 0 22 22">
            <path fill="currentColor" d="M12.727 3.687a1 1 0 1 0-1.454-1.374l-8.5 9a1 1 0 0 0 0 1.374l8.5 9.001a1 1 0 1 0 1.454-1.373L4.875 12z" className="border border-black" />
          </svg>
          see all project
        </button>
      </div>
      {/* //endbutton */}

      <div className="pt-[24px]">
        <h1 className="text-[40px] font-bold text-bigtext">Cofee House</h1>
      </div>

      <div className="pt-[24px] ">
        <img src="https://andika1412.github.io/Andikaputra/Images/Cover.png" alt="" />

        <img src="https://andika1412.github.io/Andikaputra/Images/Cofee/2.png" alt="" />
        <img src="https://andika1412.github.io/Andikaputra/Images/Cofee/3.png" alt="" />
        <img src="https://andika1412.github.io/Andikaputra/Images/Cofee/4.png" alt="" />
        <img src="https://andika1412.github.io/Andikaputra/Images/Cofee/5.png" alt="" />
        <img src="https://andika1412.github.io/Andikaputra/Images/Cofee/6.png" alt="" />
        <img src="https://andika1412.github.io/Andikaputra/Images/Cofee/7.png" alt="" />
        <img src="https://andika1412.github.io/Andikaputra/Images/Cofee/8.png" alt="" />
        <img src="https://andika1412.github.io/Andikaputra/Images/Cofee/9.png" alt="" />
        <img src="https://andika1412.github.io/Andikaputra/Images/Cofee/10.png" alt="" />
        <img src="https://andika1412.github.io/Andikaputra/Images/Cofee/11.png" alt="" />
        <img src="https://andika1412.github.io/Andikaputra/Images/Cofee/12.png" alt="" />
        <img src="https://andika1412.github.io/Andikaputra/Images/Cofee/13.png" alt="" />
        <img src="https://andika1412.github.io/Andikaputra/Images/Cofee/14.png" alt="" />
        <img src="https://andika1412.github.io/Andikaputra/Images/Cofee/15.png" alt="" />
        <img src="https://andika1412.github.io/Andikaputra/Images/Cofee/16.png" alt="" />
        <img src="https://andika1412.github.io/Andikaputra/Images/Cofee/17.png" alt="" />
      </div>
    </div>
  );
};

export default CofeeHouse;
