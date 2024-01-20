import React from "react";
import Journeycard from "./Journeycard";
const Journey = () => {
  return (
    <div className="flex flex-wrap justify-center  ">
      <Journeycard Gambar="https://andika1412.github.io/Andikaputra/Images/Figma.png" Head="Figma" Desc="2 Years of experience with figma and am now considered an expert." />
      <Journeycard Gambar="https://andika1412.github.io/Andikaputra/Images/Wordpress.png" Head="Wordpress" Desc="Using Wordpress for last 1 year. experienced with responsive website" />
      <Journeycard Gambar="https://andika1412.github.io/Andikaputra/Images/Tailwind.png" Head="Tailwind Css" Desc="1 Years of experience in using tailwind css framewok" />
    </div>
  );
};

export default Journey;
