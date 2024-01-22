import React from "react";
import { Icon } from "@iconify/react";
const card = (props) => {
  return (
    <div>
      <div className=" px-[20px] w-[341px] mx-auto  mt-[28px]   ">
        <div
          className=" group border  border-batas rounded-[6px] my-[9px] w-[300px] md:h-[210px] h-[180px]   ease-in-out delay-200  duration-300  py-[12px] font-Inter md:text-[18px] text-[16px] relative transition-colors before:absolute before:left-0 before:rounded-[6px] before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-bigtext before:transition-transform before:duration-1000   before:hover:scale-x-100
   "
        >
          <img src={props.gambar} alt="" className="md:w-[185px] md:h-[185px] w-[170px] lg:contrast-[.25] lg:grayscale group-hover:grayscale-0 lg:group-hover:contrast-100 h-[150px] mx-auto bg-auto  " />
        </div>
        <div className="md:pt-[2px] font-Inter">
          <h1 className=" font-bold text-[22px] text-bigtext pb-[6px]">{props.heading}</h1>
          <p className="leading-[28px] md:text-[18px] md:leading-[28px] md:pb-[8px] text-paragraf">{props.desc}</p>
          <div className="flex ">
            <button className=" font-semibold text-[18px] text-bigtext py-[16px] flex hover:translate-x-2 transition ease-in-out delay-50  duration-300">
              Check it out
              <Icon icon="ph:arrow-right-bold" className="h-7 w-7 ml-[12px] hover:translate-x-4 transition ease-in-out delay-50  duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
