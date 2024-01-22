import React from "react";

const Introduce = () => {
  return (
    <div className="flex justify-center bg-background md:py-[100px] py-[80px]">
      <div className="max-w-[803px] Font-Inter  mx-[20px]">
        <img src="https://andika1412.github.io/Andikaputra/Images/ilustration4.png" alt="" className="mx-auto" />
        <h1 className="text-[24px] md:text-[30px] text-bigtext font-bold text-center pt-[24px]">
          <span className="text-orenji">✋ </span>know more about me
        </h1>
        <p className="text-bigtext text-[20px] md:text-[20px] md:leading-[38px] leading-[38px] text-center pt-[24px] ">
          Since beginning my journey as a freelance designer, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly
          confident, naturally curious, and perpetually working on improving my chops.
        </p>
      </div>
    </div>
  );
};

export default Introduce;
