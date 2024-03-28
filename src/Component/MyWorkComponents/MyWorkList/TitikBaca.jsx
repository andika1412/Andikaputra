import React from "react";

import { useNavigate } from "react-router-dom";
// onClick={event =>  window.location.href='/your-href'}

const TitikBaca = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="px-[24px] md:px-[100px] max-w-[1100px]  mt-[32px] flex flex-col mx-auto">
        <div className="font-Inter">
          {/* //button back */}
          <div>
            <button
              className="text-gray-600 flex text-[18px]  items-center "
              onClick={() => {
                navigate(-1);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="16px" viewBox="0 0 22 22">
                <path fill="currentColor" d="M12.727 3.687a1 1 0 1 0-1.454-1.374l-8.5 9a1 1 0 0 0 0 1.374l8.5 9.001a1 1 0 1 0 1.454-1.373L4.875 12z" className="border border-black" />
              </svg>
              see all project
            </button>
          </div>
          {/* //endbutton back */}

          <div className="pt-[24px]">
            <h1 className="md:text-[40px] text-[30px] font-bold text-bigtext"> Titik Baca Digital</h1>
          </div>

          <div className="pt-[24px] ">
            <img src="https://andika1412.github.io/Andikaputra/Images/Titikbaca/BooksCover.png" alt="" className="shadow-l" />
          </div>

          {/* //explenation */}
          <div className="pt-[24px] pb-[40px]">
            <h1 className="md:text-[20px] text-[18px] text-paragraf font-semibold">Client : PT Maxima Inditech Media</h1>
            <h1 className="md:text-[20px] text-[18px] text-paragraf font-semibold pt-[12px]">Year : 2021-2022</h1>
            <h1 className="md:text-[30px] text-[26px] text-bigtext font-bold pt-[40px]">Project Overview</h1>
            <p className="text-paragraf md:pt-[20px] pt-[12px] md:text-[20px] text-[18px] md:leading-[50px] leading-[46px] ">
              Pt Maxima Inditech Media is a startup in Medan that provides solutions to book readers who want to literacy needs of today's digital society This. We launched a new platform which we named TitikBaca. A way build a library
              anywhere, in the terminal waiting room, airports, train stations, terminals, queue waiting rooms at Village, District, Districts, cafes, schools, campuses wherever desired.
            </p>

            {/* //grid use */}
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div className="flex flex-col ">
                <h1 className="md:text-[30px] text-[26px] text-bigtext font-bold pt-[40px]">My Role</h1>

                <p className="text-paragraf md:pt-[20px] pt-[12px] md:text-[20px] text-[18px]   ">UX Research & UI/UX Designer</p>
              </div>

              <div className="flex flex-col ">
                <h1 className="md:text-[30px] text-[26px] text-bigtext font-bold pt-[40px]">Responbilities</h1>

                <p className="text-paragraf md:pt-[20px] pt-[12px] md:text-[20px] text-[18px] md:leading-[50px] leading-[46px] ">
                  I have responsibilities as user research in this project such as collecting data reviews on Google Play, conducting data from user interviews, conducting usability testing, and sometimes helping with the Hi-Fi design
                  process and created style guide documentation.{" "}
                </p>
              </div>
            </div>
            {/* // end grid use */}

            {/* //grid use */}
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div className="flex flex-col ">
                <h1 className="md:text-[30px] text-[26px] text-bigtext font-bold pt-[40px]">Time Line</h1>

                <p className="text-paragraf md:pt-[20px] pt-[12px] md:text-[20px] text-[18px]  ">April 2022 - Maret 2023</p>
              </div>

              <div className="flex flex-col ">
                <h1 className="md:text-[30px] text-[26px] text-bigtext font-bold pt-[40px]">Tools</h1>

                <div className="flex flex-wrap   p-[2px]  gap-6">
                  <div className="flex items-center gap-3 pt-[12px]">
                    <p className="text-paragraf  md:text-[24px] text-[18px] ">Figma</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21.34px" height="32px" viewBox="0 0 256 384">
                      <path fill="#0acf83" d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64" />
                      <path fill="#a259ff" d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64" />
                      <path fill="#f24e1e" d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64" />
                      <path fill="#ff7262" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64z" />
                      <path fill="#1abcfe" d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64" />
                    </svg>
                  </div>
                  <div className="flex  items-center gap-3 pt-[12px]">
                    <p className="text-paragraf  md:text-[24px] text-[18px] ">Maze</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M11.37 9.593L8.779 7L1 14.778l2.593 2.593zM15.222 7L23 14.778l-2.576 2.576l-5.202-5.202l-5.202 5.202l-2.576-2.576z" />
                    </svg>
                  </div>
                  <div className="flex  items-center gap-3 pt-[12px]">
                    <p className="text-paragraf  md:text-[24px] text-[18px] min-w-max ">Google Meet</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="38.83px" height="32px" viewBox="0 0 256 211">
                      <path fill="#00832d" d="m144.822 105.322l24.957 28.527l33.562 21.445l5.838-49.792l-5.838-48.669l-34.205 18.839z" />
                      <path fill="#0066da" d="M0 150.66v42.43c0 9.688 7.864 17.554 17.554 17.554h42.43l8.786-32.059l-8.786-27.925l-29.11-8.786z" />
                      <path fill="#e94235" d="M59.984 0L0 59.984l30.876 8.765l29.108-8.765l8.626-27.545z" />
                      <path fill="#2684fc" d="M.001 150.679h59.983V59.983H.001z" />
                      <path fill="#00ac47" d="M241.659 25.398L203.34 56.834v98.46l38.477 31.558c5.76 4.512 14.186.4 14.186-6.922V32.18c0-7.403-8.627-11.495-14.345-6.781" />
                      <path fill="#00ac47" d="M144.822 105.322v45.338H59.984v59.984h125.804c9.69 0 17.553-7.866 17.553-17.554v-37.796z" />
                      <path fill="#ffba00" d="M185.788 0H59.984v59.984h84.838v45.338l58.52-48.49V17.555c0-9.69-7.864-17.554-17.554-17.554" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* // end grid use */}

            <div className="pt-[100px]">
              <h1 className="md:text-[30px] text-[26px] text-bigtext font-bold ">How Titik Baca Digital Work</h1>
              <div className="mt-[32px] bg-slate-400 md:w-full  ">
                <img src="https://andika1412.github.io/Andikaputra/Images/Titikbaca/user.png" alt="" className="rounded-xw-fulll   " />
              </div>
              <p className="text-paragraf md:pt-[20px] pt-[12px] md:text-[20px] text-[18px] md:leading-[50px] leading-[46px] ">
                A place can have several Reading Points with different book collections. Matter This makes it possible for each different content provider to attach a QR Code different. The QR Code location must be filled in by the Content
                Provider in some way provided by the owner of TitikBaca, namely PT Maxima Indietech Media Reading content can be adapted to the environment where TitikRead is embedded, for example in In the airport waiting room, the books
                provided are on the theme of Practical Management or reading child.
              </p>
            </div>

            <div>
              <h1 className="md:text-[30px] text-[26px] text-bigtext font-bold pt-[60px]">The Problem</h1>
              <div className="pt-[32px] md:w-full">
                <img src="https://andika1412.github.io/Andikaputra/Images/Titikbaca/problem.png" alt="" className="rounded-xl w-full object-cover" />
              </div>
              <p className="text-paragraf md:pt-[20px] pt-[12px] md:text-[20px] text-[18px] md:leading-[50px] leading-[46px] ">
                Many Book Fairs are visited everywhere. The main cause is Lack of access to reading Our people especially find it difficult to access reading at their times have free time. Compare it with Japanese society wherever they are
                they read. Our society's book purchasing power is still low Use your budget to buy basic supplies. So demanding It is still very difficult for them to hold a book while they are doing activities.
              </p>
              <ul className="list-decimal md:pl-[50px] pl-[20px] text-paragraf md:pt-[20px] pt-[12px] md:text-[20px] text-[18px] md:leading-[50px] leading-[46px]">
                <li>Inconvenience in Accessing Books: Users find it inconvenient to manually search for digital books using traditional methods, especially when they are on the go.</li>
                <li>
                  Discoverability Issues : Users encounter difficulties in discovering new titles that align with their interests amidst the vast digital library, leading to decision paralysis and missed opportunities for exploration.
                </li>

                <li>
                  Lack of Personalization : Users miss out on personalized recommendations tailored to their individual interests and reading habits, hindering their ability to discover new titles and engage with content on a deeper level.
                </li>
              </ul>
            </div>

            <div>
              <h1 className="md:text-[30px] text-[26px] text-bigtext font-bold pt-[60px]">User & Audience</h1>
              <div className="pt-[32px] md:w-full">
                <img src="https://andika1412.github.io/Andikaputra/Images/Titikbaca/audience.png" alt="" className="rounded-xl w-full object-cover" />
              </div>
              <p className="text-paragraf pt-[16px] text-[20px] leading-[50px] ">For making this app to work, there are 3 sides to the app/platform :</p>
              <ul className="list-decimal md:pl-[50px] pl-[20px] text-paragraf md:pt-[20px] pt-[12px] md:text-[20px] text-[18px] md:leading-[50px] leading-[46px]">
                <li>Reader : The main user is Book Reader.</li>
                <li>Agency : Agency will have their web to buy a Digital Book and see the list of their book and detail about their agency.</li>
                <li>Administrator : The administrator will use the website dashboard for managing the content of the app, Digital Book, and Agency.</li>
              </ul>
            </div>

            <div>
              <h1 className="md:text-[30px] text-[26px] text-bigtext font-bold pt-[60px]">Scope & Constraints</h1>
              <p className="text-paragraf md:pt-[20px] pt-[12px] md:text-[20px] text-[18px] md:leading-[50px] leading-[46px] ">
                As i mentioned earlier that this app will have 3 sides : reader, Agency, and the administrator. And these are the scope on each side.
              </p>
              <p className="text-paragraf pt-[16px] text-[20px] leading-[50px] font-semibold ">Customer App Scope</p>
              <ul className="list-decimal md:pl-[50px] pl-[20px] text-paragraf  md:pt-[20px] pt-[12px] md:text-[20px] text-[18px] md:leading-[50px] leading-[46px]">
                <li>See a book colection by scanning Qr code and read the books provided by the agency.</li>
                <li>See the most Read book.</li>
                <li>See the total amount of books.</li>
                <li>See the history of Qr Scan : Qr location, Book History.</li>
              </ul>
              <p className="text-paragraf pt-[16px] text-[20px] leading-[50px] font-semibold ">Agency Web App</p>
              <ul className="list-decimal md:pl-[50px] pl-[20px] text-paragraf md:pt-[20px] pt-[12px] md:text-[20px] text-[18px] md:leading-[50px] leading-[46px]">
                <li>Generate barcode so they can put in on a spot where user can scan.</li>
                <li>Buy an E-Book to add to their Colection.</li>
              </ul>
              <p className="text-paragraf pt-[16px] text-[20px] leading-[50px] font-semibold ">Administrator Dashboard Scope</p>
              <ul className="list-decimal md:pl-[50px] pl-[20px] text-paragraf md:pt-[20px] pt-[12px] md:text-[20px] text-[18px] md:leading-[50px] leading-[46px]">
                <li>Managing Books Colection : name, image, description, price in points, and availability.</li>
                <li>Managing Agency : name, description, availability, how to use, terms and condition.</li>
                <li>Managing Agency accounts.</li>
                <li>Can be tracked who uses the admin.</li>
              </ul>
            </div>

            {/* //On boarding */}
            <h1 className="md:text-[30px] text-[26px] text-bigtext font-bold pt-[60px]"> Design Decisions</h1>
            <h1 className="text-[28px] text-bigtext font-semibold pt-[24px]">On Boarding</h1>
            <div className="pt-[24px] w-full">
              <img src="https://andika1412.github.io/Andikaputra/Images/Titikbaca/onboarding.png" alt="" className="rounded-xl  w-full object-cover" />
            </div>
            <p className="text-paragraf md:pt-[20px] pt-[12px] md:text-[20px] text-[18px] md:leading-[50px] leading-[46px] ">
              I make sure that when users use our application and see the boarding page they will understand what our application can do by highlighting the advantages of our application and providing login and register buttons at the
              beginning if the user wants to enter directly without forcing the user to read.
            </p>

            {/* //On Boarding END */}

            {/* //Home Screen */}
            <h1 className="md:text-[30px] text-[26px] text-bigtext font-semibold pt-[60px]">Home Screen</h1>
            <div className="pt-[24px] w-full">
              <img src="https://andika1412.github.io/Andikaputra/Images/Titikbaca/homescreen.png" alt="" className="rounded-xl  w-full object-cover" />
            </div>
            <div className="text-paragraf md:pt-[20px] pt-[12px] md:text-[20px] text-[18px] md:leading-[50px] leading-[46px] ">
              <p className=" ">This screen contains Bookquotes,Scan Information, Location Information and List of Freebook</p>
              <ul className="list-disc md:pl-[50px] pl-[20px] ">
                <li>Book Quote,contains interesting quotes taken randomly in the book which can be shared on social media and changed every day</li>
                <li>Scan Information, a button to scan the qr code to read a book and history of scan after you scan the qr code this information will contain the time period and location for reading the book provided</li>
                <li>Loaction Information, Map about a place which has the location of the nearest reading point </li>
                <li>Free Book, provides several free books that can be read without scanning the QR code which changes every few days </li>
              </ul>
            </div>

            {/* end of home screen */}

            <div>
              <h1 className="md:text-[30px] text-[26px] text-bigtext font-semibold pt-[60px]">TitikBaca Location</h1>
              <div className="pt-[24px] w-full">
                <img src="https://andika1412.github.io/Andikaputra/Images/Titikbaca/loaction.png" alt="" className="rounded-xl  w-full object-cover" />
              </div>
              <div className="text-paragraf md:pt-[20px] pt-[12px] md:text-[20px] text-[18px] md:leading-[50px] leading-[46px] ">
                <p>This pages will show you the nearest Titikbaca Location and the detail of the place</p>
                <ul className="list-disc md:pl-[50px] pl-[20px] ">
                  <li>contains information about a distance from your real location so that users know where they are going to visit</li>
                  <li>how many books that place have that user can read and the detail of the book so that users can plan which books they will read </li>
                  <li>how much visitor that has been Scan Titikbaca qr </li>
                </ul>
              </div>
            </div>
            <div></div>

            <h1 className="md:text-[30px] text-[26px] text-bigtext font-semibold pt-[60px]">Detail Places</h1>
            <div className="pt-[24px] w-full">
              <img src="https://andika1412.github.io/Andikaputra/Images/Titikbaca/detailplace.png" alt="" className="rounded-xl  w-full object-cover" />
            </div>
            <p className="text-paragraf md:pt-[20px] pt-[12px] md:text-[20px] text-[18px] md:leading-[50px] leading-[46px]">
              <p className=" ">Information About Place and Books</p>
              <ul className="list-disc md:pl-[50px] pl-[20px]">
                <li>Show the detail about Titikbaca Provider so the user know when to visit the place to Scan qr </li>
                <li>Books Detail will show you the The category of the book and the sinposis so the user know what the book all about </li>
                <li>Like button book so other user know the popular book by the Like</li>
              </ul>
            </p>

            <h1 className="md:text-[30px] text-[26px] text-bigtext font-semibold pt-[60px]">Scan Qr</h1>
            <div className="pt-[24px] w-full">
              <img src="https://andika1412.github.io/Andikaputra/Images/Titikbaca/scan.png" alt="" className="rounded-xl  w-full object-cover" />
            </div>
            <div className="text-paragraf md:pt-[20px] pt-[12px] md:text-[20px] text-[18px] md:leading-[50px] leading-[46px]">
              <p className=" ">Allow you to scan Titikbaca Baner</p>
              <ul className="list-disc md:pl-[50px] pl-[20px]">
                <li>Scan Qr to see the list of book that place have</li>
                <li>extend the time to add more time to read your book beacuse the book have a due to read</li>
                <li>you will abble to see the list of place that you have been visit and the detail when you Scan </li>
              </ul>
            </div>

            <h1 className="md:text-[30px] text-[26px] text-bigtext font-bold pt-[60px] mb-[32px]">Final Result</h1>
            <div className="pt-[24px] w-full">
              <img src="https://andika1412.github.io/Andikaputra/Images/Titikbaca/finalresult1.png" alt="" className="rounded-xl  w-full object-cover" />
              <img src="https://andika1412.github.io/Andikaputra/Images/Titikbaca/finalresult2.png" alt="" className="pt-[24px] rounded-xl  w-full object-cover" />
            </div>
          </div>

          {/* //end explenation */}
        </div>
      </div>
    </>
  );
};

export default TitikBaca;
