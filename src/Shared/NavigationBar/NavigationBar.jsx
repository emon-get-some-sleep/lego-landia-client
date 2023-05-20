import React, { useContext } from "react";

import logo from "/favicon.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
const NavigationBar = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut = () => {
    logOut();
    Swal.fire(
      'Successfully Logged out',
      'Please come back later',
      'success'
    )
  }
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
      {/* <div>
        {
          !user ?
          <Link to="/login">
        <button className="bg-violet-400 px-6 py-3 rounded-lg text-white">Login</button>
        </Link>
        :
        <button onClick={handleLogOut}>Log out</button>
        }
        
      </div> */}
      <div className="tooltip hidden md:flex gap-3" data-tip={user?.displayName}>
        {!user ?
        <Link to="/login"><button className="hidden md:block bg-[#3A1C36] text-white font-medium text-xl border px-6 py-4 rounded-lg">Login</button></Link>
        :
        <>
        <img src={user.photoURL} className="w-[50px] h-[50px] rounded-[50%]" alt="" />
        <button onClick={handleLogOut} className="text-sm text-gray-700">Sign Out</button>
        </>
        }
        
      </div>
    </div>
  );
};

export default NavigationBar;
