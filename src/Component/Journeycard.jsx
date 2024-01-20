import React from "react";

const Journeycard = (props) => {
  return (
    <div className=" w-[341px]  md:px-[12px] hover:-translate-y-1 transition   ">
      <div className=" md:pl-[20px] px-[16px] mt-[24px]  py-[12px]">
        <div className="">
          <img src={props.Gambar} alt="" className="pb-[12px]" />
        </div>
        <div className=" font-Inter">
          <h1 className="font-bold text-[22px] text-bigtext ">{props.Head}</h1>
          <p className="leading-[28px] text-paragraf text-[18px] pt-[12px]"> {props.Desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Journeycard;
