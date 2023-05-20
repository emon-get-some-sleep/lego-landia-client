import React from "react";

import logo from "/favicon.png";
import { Link } from "react-router-dom";
const NavigationBar = () => {
  return (
    <div className="flex items-center justify-around mt-[40px]">
      <div className="flex items-center">
        <img className="w-[40px] h-[70px]" src={logo} alt="" />
        <h2 className="font-bold text-2xl">Lego Landia</h2>
      </div>

      <div className="space-x-3">
        <Link to='/' className="font-semibold text-[#141414] hover:text-violet-600 duration-300">Home</Link>
        <Link to='/'  className="font-semibold text-[#141414] hover:text-violet-600 duration-300">About Us</Link>
        <Link to='/'  className="font-semibold text-[#141414] hover:text-violet-600 duration-300">Contact</Link>
      </div>
      <div>
        <Link to="/login">
        <button className="bg-violet-400 px-6 py-3 rounded-lg text-white">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
