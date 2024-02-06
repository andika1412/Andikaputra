import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  let Links = [
    { name: "Home", to: "/Andikaputra/Home" },
    { name: "My Works", to: "/Andikaputra/MyWork" },
    { name: "Experince and education", to: "/Andikaputra/ExperienceAndEducation" },
    { name: "Contact", to: "/" },
  ];

  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  // ${open ? top-20 : top-[490]}
  let [open, setOpen] = useState(false);
  return (
    <div className=" sticky top-0 z-40 animasii ">
      <header className="border border-navbar w-full  top-0 left-0 ">
        <div className={`md:flex items-center justify-between  backdrop-blur-[2px] py-3 md:px-20 px-7 ${open ? "bg-white/95" : "bg-white/80"} `}>
          <div className=" font-bold text-2xl cursor-pointer flex items-center ">
            <span className="text-3xl text-indigo-600 mr-1 ">
              <img src="https://andika1412.github.io/Andikaputra/Images/Logooo.png" alt="" className="min-w-fit" />
            </span>
          </div>

          <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-bigtext ">
            <Icon icon={open ? "ion:close" : "ci:hamburger-lg"} />
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-[6px] absolute md:static  z-20 left-0 w-full md:w-auto md:pl-2 pl-9 transtition-all duration-500 ease-in ${
              open ? "top-20 opacity-100 bg-white/90 backdrop-blur-[4px] border-b-[2px] border-smalltext " : "top-[-490px] md:opacity-100 opacity-0 "
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-[36px] text-[19px] md:my-0 my-7">
                <NavLink to={link.to} activeClassName="active" className="text-bigtext font-Inter  hover:text-smalltext duration-00">
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

// import { Icon } from "@iconify/react";
// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// const Navbar = () => {
//   let Links = [
//     { name: "Home", to: "/", className },
//     { name: "My Works", to: "/" },
//     { name: "Experince and education", to: "/" },
//     { name: "Contact", to: "/" },
//   ];

//   const location = useLocation(); // once ready it returns the 'window.location' object
//   const [url, setUrl] = useState(null);
//   useEffect(() => {
//     setUrl(location.pathname);
//   }, [location]);

//   // ${open ? top-20 : top-[490]}
//   let [open, setOpen] = useState(false);
//   return (
//     <div className=" sticky top-0 z-40">
//       <header className="border border-navbar w-full  top-0 left-0 ">
//         <div className={`md:flex items-center justify-between  backdrop-blur-[2px] py-3 md:px-20 px-7 ${open ? "bg-white/95" : "bg-white/80"} `}>
//           <div className=" font-bold text-2xl cursor-pointer flex items-center ">
//             <span className="text-3xl text-indigo-600 mr-1 ">
//               <img src="https://andika1412.github.io/Andikaputra/Images/Logo.png" alt="" className="min-w-fit" />
//             </span>
//           </div>

//           <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-bigtext ">
//             <Icon icon={open ? "ion:close" : "ci:hamburger-lg"} />
//           </div>

//           <ul
//             className={`md:flex md:items-center md:pb-0 pb-[6px] absolute md:static  z-20 left-0 w-full md:w-auto md:pl-0 pl-9 transtition-all duration-500 ease-in ${
//               open ? "top-20 opacity-100 bg-white/90 backdrop-blur-[2px] border-b-[2px] border-smalltext " : "top-[-490px] md:opacity-100 opacity-0 "
//             }`}
//           >
//             {Links.map((link) => (
//               <li key={link.name} className="md:ml-16 text-[20px] md:my-0 my-7">
//                 <a href={link.link} className="text-bigtext font-Inter  hover:text-smalltext duration-00">
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Navbar;
