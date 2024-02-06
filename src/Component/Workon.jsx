import React, { useEffect } from "react";
import Card from "./Card";
import Aos from "aos";
import "aos/dist/aos.css";

const Workon = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        <div className="animation" data-aos="fade-right">
          <Card heading="Literasia" desc="Lorem ipsum dolor sit amet consectetur. Semper ut nec vitae eget malesuada orci adipiscing." gambar="https://andika1412.github.io/Andikaputra/Images/Literasia1.png" />
        </div>
        <div className="animation" data-aos="fade-up">
          <Card heading="Titikbaca Digital" desc="Lorem ipsum dolor sit amet consectetur. Semper ut nec vitae eget malesuada orci adipiscing." gambar="https://andika1412.github.io/Andikaputra/Images/Titikbaca.png" />
        </div>
        <div className="animation" data-aos="fade-left">
          <Card heading="Bisajadicreative" desc="Lorem ipsum dolor sit amet consectetur. Semper ut nec vitae eget malesuada orci adipiscing." gambar="https://andika1412.github.io/Andikaputra/Images/Bisajadi.png" />
        </div>
      </div>
    </div>
  );
};

export default Workon;
