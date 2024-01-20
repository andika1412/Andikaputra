import React from "react";

const Hero = () => {
  return (
    <div>
      {/* for text */}
      <div className="   md:mt-[170px] mt-[30px] md:pb-[100px] max-w-[1000px] mx-auto ">
        <div className="container mx-auto  ">
          <div className="flex flex-wrap-reverse px-[6px] py-[12px]">
            <div className="w-full   xl:w-1/2 my-auto pb-[24px]">
              <h1 className="md:text-left font-Inter font-semibold text-bigtext text-[18px]  md:text-[22px] pb-[12px] text-center">
                <span className=" text-[30px]">👋</span> Hi! my name is Andika & i am a
              </h1>
              <h1 className="md:text-left font-Inter font-bold text-bigtext md:text-[32px] text-[28px] pb-[12px] text-center">Programer & UI/UX Designer</h1>
              <h1 className="md:text-left font-Inter font-[500] text-bigtext md:text-[20px] text-[18px] leading-[32px] pb-[12px] text-center">Crafting Exceptional Digital Experiences. Transforming Complex Problems into Simple Solutions</h1>
              <div className="flex justify-center pt-[32px] content-center pb-[32px] md:justify-normal">
                <div className="w-full md:w-1/2 max-w-fit  max-h-fit ">
                  <button
                    className="md:py-[24px]  md:px-[56px] md:text-[18px] py-[18px] px-[32px] bg-bigtext text-white font-Inter font-semibold text-[16px] rounded-[6px] mr-[24px]  hover:border hover:border-bigtext hover:-translate-y-1 transition ease-in-out delay-50  duration-300
                  hover:relative
                  before:absolute before:left-0 before:rounded-[6px] before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300  hover:text-bigtext before:hover:scale-x-100
                  "
                  >
                    Get Started
                  </button>
                </div>
                <div className="w-full md:w-1/2 max-w-fit  max-h-fit  ">
                  <button
                    className="md:py-[24px]  md:px-[56px] md:text-[18px]  py-[18px] px-[32px]  border border-bigtext text-bigtext font-Inter font-semibold text-[16px] rounded-[6px] hover:bg-bigtext hover:border-0 hover:-translate-y-1  transition ease-in-out delay-50  duration-300
                  hover:relative
                  before:absolute before:left-0 before:rounded-[6px] before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-bigtext before:transition-transform before:duration-300  hover:text-white before:hover:scale-x-100
                  "
                  >
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
            <div className=" w-full  xl:w-1/2 ">
              <img src="https://andika1412.github.io/Andikaputra/Images/Bisajadi.png" alt="" className="mx-auto pb-[32px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// import React from "react";

// const Hero = () => {
//   return (
//     <div>
//       {/* for text */}
//       <div className="   md:mt-[170px] mt-[30px] md:pb-[100px] max-w-[1000px] mx-auto ">
//         <div className="container mx-auto  ">
//           <div className="flex flex-wrap-reverse px-[6px] py-[12px]">
//             <div className="w-full   xl:w-1/2 my-auto pb-[24px]">
//               <h1 className="md:text-left font-Inter font-semibold text-bigtext text-[18px]  md:text-[20px] pb-[12px] text-center">✌ Hi! my name in Andika & i am a</h1>
//               <h1 className="md:text-left font-Inter font-bold text-bigtext md:text-[32px] text-[28px] pb-[12px] text-center">Programer & UI/UX Designer</h1>
//               <h1 className="md:text-left font-Inter font-[500] text-bigtext md:text-[20px] text-[18px] leading-[32px] pb-[12px] text-center">Crafting Exceptional Digital Experiences. Transforming Complex Problems into Simple Solutions</h1>
//               <div className="flex justify-center pt-[32px] content-center pb-[32px] md:justify-normal">
//                 <div className="w-full md:w-1/2 max-w-fit  max-h-fit ">
//                   <button className="md:py-[24px]  md:px-[56px] md:text-[18px] py-[18px] px-[32px] bg-bigtext text-white font-Inter font-semibold text-[16px] rounded-[6px] mr-[24px] hover:bg-white hover:border hover:border-bigtext hover:-translate-y-1 hover:text-bigtext transition ease-in-out delay-50  duration-300">
//                     Get Started
//                   </button>
//                 </div>
//                 <div className="w-full md:w-1/2 max-w-fit  max-h-fit  ">
//                   <button className="md:py-[24px]  md:px-[56px] md:text-[18px]  py-[18px] px-[32px]  border border-bigtext text-bigtext font-Inter font-semibold text-[16px] rounded-[6px] hover:bg-bigtext hover:border-0 hover:-translate-y-1 hover:text-white transition ease-in-out delay-50  duration-300 ">
//                     Contact Me
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className=" w-full  xl:w-1/2 ">
//               <img src="/images/Hero.png" alt="" className="mx-auto pb-[32px]" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
