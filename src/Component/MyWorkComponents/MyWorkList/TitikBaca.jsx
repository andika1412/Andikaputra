import React from "react";

import { useNavigate } from "react-router-dom";
// onClick={event =>  window.location.href='/your-href'}

const TitikBaca = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="px-[24px] md:px-[100px] max-w-[900px]  mt-[32px] flex flex-col mx-auto">
        <div className="font-Inter">
          {/* //button back */}
          <div>
            <button
              className="text-gray-600 flex  items-center "
              onClick={() => {
                navigate(-1);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="16px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12.727 3.687a1 1 0 1 0-1.454-1.374l-8.5 9a1 1 0 0 0 0 1.374l8.5 9.001a1 1 0 1 0 1.454-1.373L4.875 12z" className="border border-black" />
              </svg>
              see all project
            </button>
          </div>
          {/* //endbutton back */}

          <div className="pt-[24px]">
            <h1 className="text-[32px] font-bold text-bigtext"> Titik Baca Digital</h1>
          </div>

          <div className="pt-[24px] ">
            <img src="https://andika1412.github.io/Andikaputra/Images/TitikBacaCover.png" alt="" />
          </div>

          {/* //explenation */}
          <div className="pt-[24px]">
            <h1 className="text-[18px] text-paragraf font-semibold">Client : PT Maxima Inditech Media</h1>
            <h1 className="text-[18px] text-paragraf font-semibold pt-[12px]">Year : 2021-2022</h1>
            <p className="text-paragraf pt-[24px] text-[18px] leading-[32px] ">
              Pt Maxima Inditech Media is a startup in Medan that provides solutions to book readers who want to literacy needs of today's digital society This. We launched a new platform which we named TitikBaca. A way build a library
              anywhere, in the terminal waiting room, airports, train stations, terminals, queue waiting rooms at Village, District, Districts, cafes, schools, campuses wherever desired.
            </p>

            <h1 className="text-[24px] text-bigtext font-bold pt-[40px]">The Problem</h1>
            <p className="text-paragraf pt-[16px] text-[18px] leading-[32px] ">
              Many Book Fairs are visited everywhere. The main cause is Lack of access to reading Our people especially find it difficult to access reading at their times have free time. Compare it with Japanese society wherever they are
              they read. Our society's book purchasing power is still low Use your budget to buy basic supplies. So demanding It is still very difficult for them to hold a book while they are doing activities.
            </p>

            <div className="pt-[24px]">
              <img src="https://andika1412.github.io/Andikaputra/Images/Readbook.png" alt="" />
            </div>

            <h1 className="text-[24px] text-bigtext font-bold pt-[40px]">How Titik Baca Digital Work</h1>

            <p className="text-paragraf pt-[16px] text-[18px] leading-[32px] ">
              A place can have several Reading Points with different book collections. Matter This makes it possible for each different content provider to attach a QR Code different. The QR Code location must be filled in by the Content
              Provider in some way provided by the owner of TitikBaca, namely PT Maxima Indietech Media Reading content can be adapted to the environment where TitikRead is embedded, for example in In the airport waiting room, the books
              provided are on the theme of Practical Management or reading child.
            </p>

            <div className="pt-[24px]">
              <img src="https://andika1412.github.io/Andikaputra/Images/Titikbacaspot.png" alt="" />
            </div>

            <h1 className="text-[24px] text-bigtext font-bold pt-[40px]"> Design Decisions</h1>

            <h1 className="text-[24px] text-bigtext font-semibold pt-[20px]">On Boarding</h1>
            <div className="pt-[24px]">
              <img src="https://andika1412.github.io/Andikaputra/Images/Onboarding.png" alt="" />
            </div>

            <h1 className="text-[24px] text-bigtext font-semibold pt-[32px]">Home Screen</h1>
            <div className="pt-[24px]">
              <img src="https://andika1412.github.io/Andikaputra/Images/Homescreen.png" alt="" />
            </div>

            <h1 className="text-[24px] text-bigtext font-semibold pt-[32px]">Location</h1>
            <div className="pt-[24px]">
              <img src="https://andika1412.github.io/Andikaputra/Images/Location.png" alt="" />
            </div>

            <h1 className="text-[24px] text-bigtext font-semibold pt-[32px]">Place</h1>
            <div className="pt-[24px]">
              <img src="https://andika1412.github.io/Andikaputra/Images/Place.png" alt="" />
            </div>

            <h1 className="text-[24px] text-bigtext font-semibold pt-[32px]">Scan</h1>
            <div className="pt-[24px]">
              <img src="https://andika1412.github.io/Andikaputra/Images/Scanqr.png" alt="" />
            </div>

            <h1 className="text-[24px] text-bigtext font-semibold pt-[32px]">Final Result</h1>
            <div className="pt-[24px]">
              <img src="https://andika1412.github.io/Andikaputra/Images/Final1.png" alt="" />
              <img src="https://andika1412.github.io/Andikaputra/Images/Final2.png" alt="" className="pt-[24px]" />
            </div>

            <p className="text-paragraf pt-[16px] text-[16px] leading-[32px] pb-[60px] ">Share this study case :</p>
          </div>

          {/* //end explenation */}
        </div>
      </div>
    </>
  );
};

export default TitikBaca;
