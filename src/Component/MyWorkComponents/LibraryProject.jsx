import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

import CardLibrary from "./CardLibrary";

const LibraryProject = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div data-aos="fade-up">
        <div className="flex container items-center mx-auto max-w-[1100px] justify-center px-[12px] mb-[100px] ">
          <div className="md:grid md:gap-x-[80px] grid gap-y-[50px] md:gap-y-[100px] grid-cols-1 md:grid-cols-2 ">
            <CardLibrary
              Image="https://andika1412.github.io/Andikaputra/Images/TitikBacaCover.png"
              Title="Titik Baca Digital"
              Desc="Titik Baca Digital is an application and web management company for developing village information systems"
              link="/Andikaputra/MyWork/TitikBaca"
            />
            <CardLibrary
              Image="https://andika1412.github.io/Andikaputra/Images/coverkopi.png"
              Title="Cofee House"
              Desc="coffee app is an application where users can 
              easily order coffee or snacks directly at the coffee shop"
              link="/Andikaputra/MyWork/CofeeHouse"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LibraryProject;
