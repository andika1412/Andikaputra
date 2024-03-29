import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Linkdln = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="md:mx-[100px]  mx-[20px] mt-[80px] md:mt-[0px] mb-[24px]">
      <div className="flex flex-wrap justify-center px-[2px]  md:pt-[130px]   max-w-[1000px] mx-auto">
        <div className="  px-[12px] md:w-2/3" data-aos="fade-right">
          <div className=" md:max-w-[401px]    ">
            <h2 className="font-Inter font-bold text-[24px] text-bigtext pb-[16px] text-center md:text-left md:text-[30px]">Start your journey with me, i’ve expertise in those apps</h2>
          </div>
          <div className="max-w-[810px]  ">
            <p className="leading-[38px] font-Inter md:text-[20px] pt-[16px] pb-[24px]  text-[20px] text-bigtext text-center md:text-left">
              From creating wireframes and prototypes to developing high-fidelity mockups and animations, able to utilize a range of design tools to bring my design to life.
            </p>
          </div>

          <div className="flex justify-center py-[24px]  md:justify-normal">
            <Link
              to={"https://www.linkedin.com/in/andikadwiputraharahap/"}
              className="hover:bg-bigtext hover:text-white hover:border hover:border-bigtext  md:py-[16px] md:text-[18px]  md:px-[56px] py-[18px] px-[32px] bg-white text-bigtext border border-bigtext font-Inter font-semibold text-[16px] rounded-[6px]  duration-300 "
            >
              Check My Linkdln
            </Link>
          </div>
        </div>
        <div className="  px-[12px] md:w-1/3 my-auto invisible md:visible  " data-aos="fade-left">
          <img src="https://andika1412.github.io/Andikaputra/Images/Ilustration3.png" alt="" className="w-[0] md:w-[250px] lg:w-auto " />
        </div>
      </div>
    </div>
  );
};

export default Linkdln;
