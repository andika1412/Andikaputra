import React from "react";

const Heroo = () => {
  return (
    <div className="max-h-fit md:px-[100px] px-[30px] font-Inter text-center flex flex-col  ">
      <div className="md:pt-[160px] pt-[40px] md:mb-[250px] mb-[100px] ">
        <div className="text-[#6A6C76] text-[20px] z-10 relative  ">
          <h1>FrontEnd Developer - UI/UX Designer</h1>
        </div>
        <div className="font-extrabold text-bigtext pt-[32px] pb-[60px] relative md:text-[59px] text-[40px] z-10 ">
          <h1 className="animasi">
            Turning ideas into real life <br /> products is my calling.
          </h1>
        </div>
        <div className="text-orenji  font-medium text-[20px] max-w-fit flex flex-row mx-auto gap-5  ">
          <a href="">About me</a>
          <p className="text-bigtext">-</p>
          <a href="">My Projects</a>
        </div>

        <div className="absolute md:top-[165px] top-[100px] left-[500px] z-0 animate-bounce  ">
          <img src="Images/square.png" alt="" className="" />
        </div>
        <div className="absolute md:top-[255px] top-[200px] left-[330px] z-0  animate-bounce">
          <img src="Images/square2.png" alt="" className="" />
        </div>
        <div className="absolute md:top-[255px] top-[400px] right-[150px] z-0 animate-bounce">
          <img src="Images/square2.png" alt="" className="" />
        </div>
        <div className="absolute md:top-[365px] top-[600px] left-[150px] z-0 animate-bounce">
          <img src="Images/square2.png" alt="" className="" />
        </div>
        <div className="absolute md:top-[495px] top-[250px] left-[230px] z-0 animate-bounce">
          <img src="Images/square.png" alt="" className="" />
        </div>
        <div className="absolute md:top-[465px] top-[200px] right-[270px] z-0 animate-bounce">
          <img src="Images/square.png" alt="" className="" />
        </div>
        <div className="absolute md:top-[495px] top-[500px] md:right-[350px] right-[250px] z-0 animate-bounce ">
          <img src="Images/square.png" alt="" className="" />
        </div>
        <div className="absolute md:top-[265px] right-[200px] z-0 invisible md:visible ">
          <img src="Images/line.png" alt="" className="" />
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
