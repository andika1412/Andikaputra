import React from "react";
import Lookingforcard from "./Lookingforcard";
const Lookingfor = () => {
  return (
    <div className="bg-background md:mt-[120px] mt-[100px] md:py-[20px] pt-[40px]">
      <div className="font-Inter font-bold text-[24px] md:text-[30px] text-bigtext text-center pt-[32px] md:pt-[80px] px-[22px] pb-[32px]">
        <h1 className=""> I'm here for you, if you’re looking for</h1>
      </div>
      <div className="flex flex-wrap max-w-[816px] pb-[60px]  md:mt-[24px] mx-auto">
        <Lookingforcard gambar="https://andika1412.github.io/Andikaputra/Images/Lamp.png" text="A reliable and experince UX designer to help youcreate intuitive and user-centered design" />
        <Lookingforcard gambar="https://andika1412.github.io/Andikaputra/Images/Program.png" text="A reliable and experince UX designer to help youcreate intuitive and user-centered design" />
        <Lookingforcard gambar="https://andika1412.github.io/Andikaputra/Images/Web.png" text="A reliable and experince UX designer to help youcreate intuitive and user-centered design" />
        <Lookingforcard gambar="https://andika1412.github.io/Andikaputra/Images/Cookie.png" text="A reliable and experince UX designer to help youcreate intuitive and user-centered design" />
      </div>
    </div>
  );
};

export default Lookingfor;
