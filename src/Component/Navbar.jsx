import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "My Works", link: "/" },
    { name: "Experince and education", link: "/" },
    { name: "Contact", link: "/" },
  ];
  // ${open ? top-20 : top-[490]}
  let [open, setOpen] = useState(false);
  return (
    <div className="stick top-0">
      <header className="border border-navbar w-full  top-0 left-0 ">
        <div className="md:flex items-center justify-between bg-white/80 backdrop-blur-[2px] py-3 md:px-20 px-7 ">
          <div className=" font-bold text-2xl cursor-pointer flex items-center ">
            <span className="text-3xl text-indigo-600 mr-1 ">
              <img src="./Andikaputra/Images/Logo.png" alt="" className="min-w-fit" />
            </span>
          </div>

          <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-bigtext ">
            <Icon icon={open ? "ion:close" : "ci:hamburger-lg"} />
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-[6px] absolute md:static  z-20 left-0 w-full md:w-auto md:pl-0 pl-9 transtition-all duration-500 ease-in ${
              open ? "top-20 opacity-100 bg-white/60 backdrop-blur-[2px] border-b-[2px] border-smalltext " : "top-[-490px] md:opacity-100 opacity-0 "
            }`}
          >
            {/* <ul className={"md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-[auto] z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transtition-all duration-500 ease-in  "}> */}

            {Links.map((link) => (
              <li key={link.name} className="md:ml-16 text-xl md:my-0 my-7">
                <a href={link.link} className="text-bigtext font-Inter  hover:text-smalltext duration-00">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
