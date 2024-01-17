import React from "react";

const Lookingforcard = (props) => {
  return (
    <div className=" flex flex-wrap border border-batas rounded-[6px] bg-white px-[16px] mx-auto my-[24px] shadow-xl hover:shadow-2xl hover:shadow-white  ">
      <div className="flex  w-[290px]  h-[260px] mx-auto">
        <div className="m-auto ">
          <img src={props.gambar} alt="" className="mx-auto w-[66px]" />
          <p className="font-Inter text-bigtext text-[18px] text-center pt-[12px]"> {props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Lookingforcard;
