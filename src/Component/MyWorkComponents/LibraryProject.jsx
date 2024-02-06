import React from "react";

import CardLibrary from "./CardLibrary";

const LibraryProject = () => {
  return (
    <>
      <div className="flex container items-center mx-auto max-w-[1100px] justify-center px-[12px] mb-[100px]  ">
        <div className="grid gap-x-[100px] gap-y-[100px] grid-cols-1 md:grid-cols-2 ">
          <CardLibrary
            Image="https://andika1412.github.io/Andikaputra/Images/TitikBacaCover.png"
            Title="Titik Baca Digital"
            Desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iste nulla voluptatem consequatur! "
            link="/Andikaputra/MyWork/TitikBaca"
          />
          <CardLibrary
            Image="https://andika1412.github.io/Andikaputra/Images/uu.jpg"
            Title="Testing"
            Desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iste nulla voluptatem consequatur!"
            link="/Andikaputra/ExperienceAndEducation"
          />
          <CardLibrary
            Image="https://andika1412.github.io/Andikaputra/Images/uu.jpg"
            Title="Testing"
            Desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iste nulla voluptatem consequatur!"
            link="/Andikaputra/ExperienceAndEducation"
          />
        </div>
      </div>
    </>
  );
};

export default LibraryProject;
