import React from "react";
import Lookingforcard from "./Lookingforcard";
const Lookingfor = () => {
  return (
    <div className="bg-background mt-[120px]">
      <div className="font-Inter font-bold text-[24px] md:text-[30px] text-bigtext text-center pt-[32px] md:pt-[80px] px-[22px] pb-[32px]">
        <h1 className=""> I'm here for you, if you’re looking for</h1>
      </div>
      <div className="flex flex-wrap max-w-[816px] pb-[60px]  md:mt-[24px] mx-auto">
        <Lookingforcard gambar="./Andikaputra/images/Lamp.png" text="A reliable and experince UX designer to help youcreate intuitive and user-centered design" />
        <Lookingforcard gambar="./Andikaputra/images/Program.png" text="A reliable and experince UX designer to help youcreate intuitive and user-centered design" />
        <Lookingforcard gambar="./Andikaputra/images/Web.png" text="A reliable and experince UX designer to help youcreate intuitive and user-centered design" />
        <Lookingforcard gambar="./Andikaputra/images/Cookie.png" text="A reliable and experince UX designer to help youcreate intuitive and user-centered design" />
      </div>
    </div>
  );
};

export default Lookingfor;
