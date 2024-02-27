import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
const card = (props) => {
  return (
    <div>
      <div className=" px-[20px] bore w-[341px] mx-auto  mt-[28px] group  ">
        <div className=" border  border-batas rounded-[6px] my-[9px] w-[300px] md:h-[210px] h-[180px]   ease-in-out   duration-200  py-[12px] font-Inter md:text-[18px] text-[16px] hover:shadow-lg">
          <img
            src={props.gambar}
            alt=""
            className="md:w-[185px] hover md:h-[185px] w-[150px] lg:contrast-[.25] ease-in-out duration-200 lg:grayscale group-hover:grayscale-0 group-hover:scale-110 lg:group-hover:contrast-100 h-[150px] mx-auto bg-auto  "
          />
        </div>
        <div className="md:pt-[2px] font-Inter">
          <h1 className=" font-bold text-[22px] text-bigtext pb-[6px]">{props.heading}</h1>
          <p className="leading-[28px] md:text-[18px] md:leading-[28px] md:pb-[8px] text-paragraf">{props.desc}</p>
          <div className="flex ">
            <Link className=" font-semibold text-[18px] text-bigtext py-[16px] flex hover:translate-x-2 transition ease-in-out delay-50  duration-300 " to={props.link}>
              Check it out
              <Icon icon="ph:arrow-right-bold" className="h-7 w-7 ml-[12px] hover:translate-x-4 transition ease-in-out delay-50  duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
