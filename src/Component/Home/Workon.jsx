import React, { useEffect } from "react";
import CardWorkon from "./CardWorkon";
import Aos from "aos";
import "aos/dist/aos.css";

const Workon = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        <div className="animation" data-aos="fade-up">
          <CardWorkon
            heading="Titik Baca Digital"
            desc="Titik Baca Digital is a digital book library application that you can read anywhere"
            link="/Andikaputra/MyWork/TitikBaca"
            gambar="https://andika1412.github.io/Andikaputra/Images/Titikbaca.png"
          />
        </div>
        <div className="animation" data-aos="fade-up">
          <CardWorkon heading="Bisajadicreative" desc="Bisajadicreative is a company that focuses on managing development in the digital creative field" gambar="https://andika1412.github.io/Andikaputra/Images/Bisajadi.png" />
        </div>
        <div className="animation" data-aos="fade-up">
          <CardWorkon heading="Cofee House" desc="Cofee House is an application where users can easily order coffee or snacks directly at the coffee shop" link="/Andikaputra/MyWork/CofeeHouse" gambar="./Images/Kopii.png " />
        </div>
      </div>
    </div>
  );
};

export default Workon;
