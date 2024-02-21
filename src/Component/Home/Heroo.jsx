import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const Heroo = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="max-h-fit md:px-[100px] px-[18px] font-Inter text-center flex flex-col  ">
      <div className="md:pt-[160px] pt-[40px] md:mb-[250px] mb-[100px] ">
        <div className="text-[#6A6C76] text-[18px] z-10 relative  ">
          <h1>FrontEnd Developer - UI/UX Designer</h1>
        </div>
        <div className="font-extrabold text-bigtext pt-[50px] md:pt-[32px]  leading-[70px] pb-[80px] relative md:text-[59px] text-[60px] z-10 ">
          <h1 data-aos="fade-up ">
            Turning <span className="text-orenji">Ideas</span> into real life <br /> products is my calling.
            {/* Concepts/visions */}
          </h1>
        </div>
        <div className="text-orenji  font-medium text-[18px] md:text-[20px]  max-w-fit flex flex-row mx-auto gap-5   ">
          <a href="" className=" hover:font-semibold z-20  ">
            About me
          </a>
          <p className="text-bigtext">-</p>
          <a href="" className=" hover:font-semibold z-20">
            My Projects
          </a>
        </div>

        <div className="absolute md:top-[165px] top-[100px] left-[500px] z-0 animate-bounce-slow animation" data-aos="fade-up">
          <img src="https://andika1412.github.io/Andikaputra/Images/square.png" alt="" className="" />
        </div>
        <div className="absolute md:top-[255px] top-[200px] left-[330px] z-0  animate-bounce  ">
          <img src="https://andika1412.github.io/Andikaputra/Images/square2.png" alt="" className="" />
        </div>
        <div className="absolute md:top-[255px] top-[400px] right-[150px] z-0 animate-bounce-slow">
          <img src="https://andika1412.github.io/Andikaputra/Images/square2.png" alt="" className="" />
        </div>
        <div className="absolute md:top-[365px] top-[450px] md:left-[150px] left-[300px] z-0 animate-bounce">
          <img src="https://andika1412.github.io/Andikaputra/Images/square2.png" alt="" className="" />
        </div>
        <div className="absolute md:top-[495px] top-[360px] left-[230px] z-0 animate-bounce-slow">
          <img src="https://andika1412.github.io/Andikaputra/Images/square.png" alt="" className="" />
        </div>
        <div className="absolute md:top-[465px] top-[200px] right-[270px] z-0 animate-bounce">
          <img src="https://andika1412.github.io/Andikaputra/Images/square.png" alt="" className="" />
        </div>
        <div className="absolute md:top-[495px] top-[450px] md:right-[350px] right-[250px] z-0 animate-bounce-slow ">
          <img src="https://andika1412.github.io/Andikaputra/Images/square.png" alt="" className="" />
        </div>
        <div className="absolute md:top-[265px] right-[200px] z-0 invisible md:visible ">
          <img src="https://andika1412.github.io/Andikaputra/Images/line.png" alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default Heroo;

// const Heroo = () => {
//   return (
//     <div className="max-h-fit px-[100px] font-Inter text-center flex flex-col relative  ">
//       <div className="pt-[150px] mb-[250px]">
//         <div className="text-[#6A6C76] text-[20px] ">
//           <h1>FrontEnd Developer - UI/UX Designer</h1>
//         </div>
//         <div className="font-extrabold text-bigtext pt-[32px] pb-[40px] text-[59px]">
//           <h1>
//             Turning ideas into real life <br /> products is my calling.
//           </h1>
//         </div>
//         <div className="text-orenji  font-medium text-[20px] max-w-fit flex flex-row mx-auto gap-5  ">
//           <a href="">About me</a>
//           <p className="text-bigtext">-</p>
//           <a href="">My Projects</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Heroo;
