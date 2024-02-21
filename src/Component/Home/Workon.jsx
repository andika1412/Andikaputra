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
          <CardWorkon heading="Literasia" desc="LITERASIA is a cloud-based school management information system provider." gambar="https://andika1412.github.io/Andikaputra/Images/Literasia1.png" />
        </div>
        <div className="animation" data-aos="fade-up">
          <CardWorkon
            heading="Titikbaca Digital"
            desc="Titik Baca Digital is an application and web management company for developing  information systems"
            link="/Andikaputra/MyWork/TitikBaca"
            gambar="https://andika1412.github.io/Andikaputra/Images/Titikbaca.png"
          />
        </div>
        <div className="animation" data-aos="fade-up">
          <CardWorkon heading="Bisajadicreative" desc="Bisajadicreative is a company that focuses on managing development in the digital creative field" gambar="https://andika1412.github.io/Andikaputra/Images/Bisajadi.png" />
        </div>
      </div>
    </div>
  );
};

export default Workon;
