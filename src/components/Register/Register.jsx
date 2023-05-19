import React from 'react';
import { FaCameraRetro, FaGoogle, FaHouseUser, FaLocationArrow, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
const Register = () => {
    return (
        <div className="h-[100vh] flex items-center lego-bg justify-center bg-blue-500">
      {/* <div>
                <img className='w-[400px] border-2 rounded-lg h-[400px]' src="https://images.pexels.com/photos/298825/pexels-photo-298825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div> */}

      <div className="w-[400px] h-[600px] bg-transparent border-2 backdrop-blur-[15px] rounded-lg flex items-center justify-center relative">
        <div>
          <form>
            <h2 className="font-bold text-xl text-center text-white">Register</h2>
            <div className="relative my-[30px] w-[310px] border-b-2">
              <FaHouseUser className="inline absolute right-[8px] text-white top-[20px] text-lg" />
              <input
                className="w-full h-[50px] beautiful-input transparent border-none bg-transparent pr-[35px] pl-[5px] outline-none"
                type="text"
                name="name"
              />
              <label className="absolute duration-300 cursor-none top-[50%] left-[5px] text-white -translate-y-[50%]">
                Name
              </label>
            </div>
            <div className="relative my-[30px] w-[310px] border-b-2">
              <FaLocationArrow className="inline absolute right-[8px] text-white top-[20px] text-lg" />
              <input
                className="w-full h-[50px] beautiful-input transparent border-none bg-transparent pr-[35px] pl-[5px] outline-none"
                type="email"
                name="email"
              />
              <label className="absolute duration-300 cursor-none top-[50%] left-[5px] text-white -translate-y-[50%]">
                Email
              </label>
            </div>
            <div className="relative my-[30px] w-[310px] border-b-2">
              <FaCameraRetro className="inline absolute right-[8px] text-white top-[20px] text-lg" />
              <input
                className="w-full h-[50px] beautiful-input transparent border-none bg-transparent pr-[35px] pl-[5px] outline-none"
                type="text"
                name="photo"
              />
              <label className="absolute duration-300 cursor-none top-[50%] left-[5px] text-white -translate-y-[50%]">
                PhotoURL
              </label>
            </div>
            <div className="relative my-[30px] w-[310px] border-b-2">
              <FaLock className="inline absolute right-[8px] text-white top-[20px] text-lg" />
              <input
                className="w-full h-[50px] beautiful-input transparent border-none bg-transparent pr-[35px] pl-[5px] outline-none"
                type="password"
                name="password"
              />
              <label className="absolute duration-300 cursor-none top-[50%] left-[5px] text-white -translate-y-[50%]">
                Password
              </label>
            </div>
            <div className="-mt-[15px] mb-[15px] text-white text-sm flex items-center justify-center gap-3">
              <label>
                {" "}
                <input type="checkbox" name="" /> Remember me
              </label>
              <Link className="hover:underline text-white-800 font-bold">
                Forget Password
              </Link>
            </div>
            <input
              className="w-full h-[40px] rounded-[40px] bg-white border-none outline-none font-bold cursor-pointer"
              type="submit"
              value="Register"
            />
            <div className="text-sm text-white text-center mt-[25px] mb-[15px]">
              <p className="font-semibold">
                Already have an account?{" "}
                <Link to="/login" className=" hover:text-white text-sky-400 underline">
                  Login
                </Link>
              </p>
            </div>
            <div className=''>
                <button className='text-white flex items-center justify-center gap-2 hover:bg-white hover:text-black text-center font-bold text-sm w-full mb-3 p-3 h-[40px] border-2 rounded-lg'><span>Sign up with</span> <FaGoogle className='inline ' /></button>
                
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Register;