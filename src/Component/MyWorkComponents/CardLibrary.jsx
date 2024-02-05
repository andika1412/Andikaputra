import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
const CardLibrary = (props) => {
  return (
    <>
      <div className="     ">
        <img src={props.Image} alt="" className=" rounded-[6px]  " />
        <h1 className=" font-bold text-[22px] text-bigtext pt-[12px]"> {props.Title}</h1>
        <p className="text-bigtext pt-[8px] text-[18px]"> {props.Desc}</p>

        <Link to={props.link} className="text-bigtext font-Inter md:text-[16px] mt-[16px]    flex  hover:text-smalltext duration-00">
          <Icon icon="ph:book" className="h-5 w-5 mr-[8px]  my-auto  " /> View Design
        </Link>
      </div>
    </>
  );
};

export default CardLibrary;

// OMM Design
// OMM is a financial technology company that offers an online platform connecting borrowers
