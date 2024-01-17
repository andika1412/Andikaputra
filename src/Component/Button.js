import React from "react";

const Button = (props) => {
  return <button className="bg-bigtext text-white font-[inter] py-2 px-6 rounded md:ml-8 hover:bg-smalltext duration-500">{props.children}</button>;
};

export default Button;
