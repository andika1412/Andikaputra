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
            Desc="Titik Baca Digital is an application and web management company for developing village information systems"
            link="/Andikaputra/MyWork/TitikBaca"
          />
        </div>
      </div>
    </>
  );
};

export default LibraryProject;
