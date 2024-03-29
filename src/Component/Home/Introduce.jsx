import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Introduce = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="flex justify-center mt-[30px] bg-background md:py-[100px] py-[80px]  ">
      <div className="max-w-[803px] Font-Inter animation mx-[20px] " data-aos="fade-up">
        <img src="https://andika1412.github.io/Andikaputra/Images/ilustration4.png" alt="" className="mx-auto" />
        <h1 className="text-[24px] md:text-[30px] text-bigtext font-bold text-center pt-[24px]">
          <span className="text-orenji">✋ </span>Hi! my name in Andika <br></br> I am a Programer and UI/UX Designer
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
