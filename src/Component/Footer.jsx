import React from "react";
import { Icon } from "@iconify/react";
const Footer = () => {
  return (
    <div>
      <div className="bg-bigtext h-[180px] md:h-[160px] font-Inter md:px-[160px]  ">
        <div className="px-[24px] pt-[24px] ">
          <h1 className="font-bold text-white text-[20px] md:text-[26px] ">Get in touch</h1>
          <p className="pt-[12px] text-[16px] text-gray-300">
            For business inquiry please send email to{" "}
            <a href="" className="underline">
              andikadwiputra1412@gmail.com
            </a>
          </p>
          <div className="pt-[16px] flex">
            <a href="">
              <Icon icon="ri:instagram-line" color="white" className="h-8 w-8 md:h-6 md:w-6 mr-[24px] " />
            </a>
            <a href="">
              <Icon icon="ic:outline-whatsapp" color="white" className="h-8 w-8 md:h-6 md:w-6 mr-[12px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
