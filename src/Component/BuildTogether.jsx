import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import Aos from "aos";
import "aos/dist/aos.css";

const BuildTogether = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="flex justify-center bg-background md:mt-[120px] mt-[80px] pt-[100px] md:pt-[20px] ">
      <div className="md:mx-[100px] mx-[20px] md:mt-[120px] mt-[30px]  max-w-[810px] pb-[40px] my-[50px]  " data-aos="fade-up">
        <div className="">
          <img src="https://andika1412.github.io/Andikaputra/Images/Ilustartion1.png" alt="" className="mx-auto pb-[24px]" />

          <h1 className=" md:text-[30px] text-bigtext font-Inter font-bold text-[24px] text-center pb-[20px] ">Let,s build something together.</h1>
          <p className="md:text-[20px] leading-[38px] text-bigtext text-[20px] font-Inter font-medium text-center pb-[32px] ">
            I've worked with amaizing businesses, from startups to craft amaizing designs that make real business impacts.My focus lies in <span className="text-orenji font-bold ">UX Design</span> ,
            <span className="text-orenji font-bold">Programing</span> and <span className="text-orenji font-bold">web design</span> . No matter the industryyy, i'd love to talk with you and see how we could creater something wonderful.
          </p>
          <div className=" flex justify-center">
            <button className="hover:bg-orenji  md:py-[16px] md:text-[18px]  md:px-[56px] py-[18px] px-[32px] bg-bigtext text-white font-Inter font-semibold text-[16px] rounded-[6px] flex transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
              <Icon icon="iconoir:bright-star" className="h-6 w-6 mr-[12px]" /> Check My Portofolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildTogether;

// import React from "react";
// import { Icon } from "@iconify/react";
// const BuildTogether = () => {
//   return (
//     <div className="flex justify-center">
//       <div className="md:mx-[100px] mx-[20px] md:mt-[120px] mt-[30px] border border-black max-w-[810px] ">
//         <div className="">
//           <img src="/images/Ilustartion1.png" alt="" className="mx-auto pb-[24px]" />

//           <h1 className="text-bigtext font-Inter font-bold text-[24px] text-center pb-[20px] ">Let,s build something together.</h1>
//           <p className="text-bigtext text-[18px] font-Inter font-medium text-center pb-[32px] ">
//             I've worked with amaizing businesses, from startups to craft amaizing designs that make real business impacts.My focus lies in <span className="text-orenji font-bold ">UX Design</span> ,
//             <span className="text-orenji font-bold">Programing</span> and <span className="text-orenji font-bold">web design</span> . No matter the industryyy, i'd love to talk with you and see how we could creater something wonderful.
//           </p>
//           <div className="border border-black flex justify-center">
//             <button className="hover:bg-orenji  md:py-[16px] md:text-[18px]  md:px-[56px] py-[18px] px-[32px] bg-bigtext text-white font-Inter font-semibold text-[16px] rounded-[6px] flex transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
//               <Icon icon="iconoir:bright-star" className="h-6 w-6 mr-[12px]" /> Check My Portofolio
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuildTogether;
