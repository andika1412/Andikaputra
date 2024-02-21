import React, { useEffect } from "react";
import Journeycard from "./Journeycard";
import Aos from "aos";
import "aos/dist/aos.css";

const Journey = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="flex flex-wrap justify-center  ">
      <div data-aos="fade-up">
        <Journeycard Gambar="https://andika1412.github.io/Andikaputra/Images/Figma.png" Head="Figma" Desc="2 Years of experience with figma and am now considered an expert." />
      </div>
      <div data-aos="fade-up">
        <Journeycard Gambar="https://andika1412.github.io/Andikaputra/Images/Wordpress.png" Head="Wordpress" Desc="Using Wordpress for last 1 year. experienced with responsive website" />
      </div>
      <div data-aos="fade-up">
        <Journeycard Gambar="https://andika1412.github.io/Andikaputra/Images/Tailwind.png" Head="Tailwind Css" Desc="1 Years of experience in using tailwind css framewok" />
      </div>
    </div>
  );
};

export default Journey;
