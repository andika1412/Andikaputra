import React from "react";

const Library = () => {
  return (
    <>
      <div className="mx-auto my-[100px]  max-w-[1100px]      font-Inter  text-bigtext  ">
        <div className="flex flex-wrap-reverse mx-[12px]  justify-between    ">
          <div className="text-center md:text-start w-full my-auto   max-w-fit   md:w-2/3    ">
            <h2 className="font-bold text-[18px] md:text-[20px] pt-[24px] md:pt-[0px]  min-w-fit ">Some contain case studies 👑</h2>
            <h1 className="font-extrabold text-[28px] md:text-[36px] pt-[8px]  min-w-fit ">Projects Library</h1>
            <p className="text-[18px] md:text-[20px] leading-[32px] pt-[12px] md:max-w-[600px]  ">projects that I worked on during my career as a UI designer and some used fake projects</p>
          </div>
          <div className="mx-auto md:mx-0  md:w-1/3 my-auto px-[2px] ">
            <img src="https://andika1412.github.io/Andikaputra/Images/Ilustrasibuku.png" alt="" className="  " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Library;
