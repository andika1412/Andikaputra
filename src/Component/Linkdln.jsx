import React from "react";

const Linkdln = () => {
  return (
    <div className="md:mx-[100px] mb-[24px] mx-[20px] mt-[24px]">
      <div className="flex flex-wrap justify-center px-[2px]  md:pt-[130px] pt-[80px]  max-w-[1000px] mx-auto">
        <div className="  px-[12px] md:w-2/3">
          <div className=" md:max-w-[401px]    ">
            <h2 className="font-Inter font-bold text-[24px] text-bigtext pb-[16px] text-center md:text-left md:text-[30px]">Start your journey with me, i’ve expertise in those apps</h2>
          </div>
          <div className="max-w-[810px]  ">
            <p className="leading-[32px] font-Inter md:text-[20px] pt-[16px] pb-[24px]  text-[18px] text-bigtext text-center md:text-left">
              From creating wireframes and prototypes to developing high-fidelity mockups and animations, able to utilize a range of design tools to bring my design to life.
            </p>
          </div>

          <div className="flex justify-center py-[24px]  md:justify-normal">
            <button className="hover:bg-bigtext hover:text-white hover:border hover:border-bigtext  md:py-[16px] md:text-[18px]  md:px-[56px] py-[18px] px-[32px] bg-white text-bigtext border border-bigtext font-Inter font-semibold text-[16px] rounded-[6px]  duration-300 ">
              Check My Linkdln
            </button>
          </div>
        </div>
        <div className="  px-[12px] md:w-1/3 my-auto invisible md:visible  ">
          <img src="/images/Ilustration3.png" alt="" className="w-[0] md:w-[250px] lg:w-auto " />
        </div>
      </div>
    </div>
  );
};

export default Linkdln;
