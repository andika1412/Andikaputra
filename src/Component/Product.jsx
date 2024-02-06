import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Product = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="md:mx-[100px] mb-[24px] mx-[20px] md:mt-[100px] mt-[30px] pt-[40px] md:pt-[0px] ">
      <div className="flex flex-wrap justify-center   max-w-[1000px] mx-auto ">
        <div className="  px-[12px] md:w-2/3 animation" data-aos="fade-right">
          <div className=" md:max-w-[351px]    ">
            <h2 className="font-Inter font-bold text-[24px] text-bigtext pb-[16px] text-center md:text-left md:text-[30px]">Check out some of the products i've worked on</h2>
          </div>
          <div className="max-w-[810px]  ">
            <p className="leading-[38px] font-Inter md:text-[20px] pt-[16px] pb-[24px]  text-[20px] text-bigtext text-center md:text-left">
              Worked closely with the clients to understand their business goals and the needs of their target audience, and designed a new interface that met their needs and exceede their expectations.
            </p>
          </div>

          <div className="flex justify-center py-[24px]  md:justify-normal">
            <button className="relative font-Inter md:text-[18px] text-[16px] border rounded-[6px] border-bigtext bg-transparent py-[20px] px-[20px] font-semibold text-bigtext transition-colors before:absolute before:left-0 before:rounded-[6px] before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-bigtext before:transition-transform before:duration-300  hover:text-white before:hover:scale-x-100">
              View All Design Work
            </button>
          </div>
        </div>
        <div className="  px-[12px] md:w-1/3 my-auto invisible md:visible animation " data-aos="fade-left">
          <img src="https://andika1412.github.io/Andikaputra/Images/Ilustration2.png" alt="" className="w-[0] md:w-[250px] lg:w-auto " />
        </div>
      </div>
    </div>
  );
};

export default Product;
