import React, { useContext, useState } from "react";
import {
  FaCameraRetro,
  FaGoogle,
  FaHouseUser,
  FaLocationArrow,
  FaLock,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { newUser, signUpWithGoogle, updateProfile, auth } =
    useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "password must be at least six characters long",
        text: "Please enter a valid password",
      });
      return;
    }
    // const user = {email, password, name, photo};
    // console.log(user);
    newUser(name, photo, email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
        console.log(user);
        Swal.fire(
          "Registered Successfully!",
          "Welcome to Lego Landia",
          "success"
        );
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        Swal.fire({
          icon: "error",
          title: error,
          text: "Please enter a valid password",
        });
      });
  };

  const handleGoogleSignUp = () => {
    signUpWithGoogle()
      .then((result) => {
        const user = result.user;
        // console.log(user);
        Swal.fire(
          "Registered Successfully!",
          "Welcome to Lego Landia",
          "success"
        );
        navigate("/");
      })
      .catch((error) => {
        const warning = error.message;
        Swal.fire({
          icon: "error",
          title: warning,
          text: "We are extremly sorry for this inconvenient",
        });
      });
  };
  return (
    <div className="h-[100vh] flex items-center lego-bg justify-center bg-blue-500">
      <Helmet>
        <title>Lego Landia | Register</title>
      </Helmet>
      {/* <div>
                <img className='w-[400px] border-2 rounded-lg h-[400px]' src="https://images.pexels.com/photos/298825/pexels-photo-298825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div> */}

      <div className="w-[400px] h-auto bg-transparent border-2 backdrop-blur-[15px] rounded-lg flex items-center justify-center relative">
        <div>
          <form onSubmit={handleRegister}>
            <h2 className="font-bold text-xl text-center text-white">
              Register
            </h2>
            <div className="relative my-[30px] w-[310px] border-b-2">
              <FaHouseUser className="inline absolute right-[8px] text-white top-[20px] text-lg" />
              <input
                className="w-full h-[50px] text-white beautiful-input transparent border-none bg-transparent pr-[35px] pl-[5px] outline-none"
                type="text"
                name="name"
                required
              />
              <label className="absolute duration-300 cursor-none top-[50%] left-[5px] text-white -translate-y-[50%]">
                Name
              </label>
            </div>
            <div className="relative my-[30px] w-[310px] border-b-2">
              <FaLocationArrow className="inline absolute right-[8px] text-white top-[20px] text-lg" />
              <input
                className="w-full h-[50px] text-white beautiful-input transparent border-none bg-transparent pr-[35px] pl-[5px] outline-none"
                type="email"
                name="email"
                required
              />
              <label className="absolute duration-300 cursor-none top-[50%] left-[5px] text-white -translate-y-[50%]">
                Email
              </label>
            </div>
            <div className="relative my-[30px] w-[310px] border-b-2">
              <FaCameraRetro className="inline absolute right-[8px] text-white top-[20px] text-lg" />
              <input
                className="w-full h-[50px] text-white beautiful-input transparent border-none bg-transparent pr-[35px] pl-[5px] outline-none"
                type="text"
                name="photo"
                required
              />
              <label className="absolute duration-300 cursor-none top-[50%] left-[5px] text-white -translate-y-[50%]">
                PhotoURL
              </label>
            </div>
            <div className="relative my-[30px] w-[310px] border-b-2">
              <FaLock className="inline absolute right-[8px] text-white top-[20px] text-lg" />
              <input
                className="w-full h-[50px] text-white beautiful-input transparent border-none bg-transparent pr-[35px] pl-[5px] outline-none"
                type="password"
                name="password"
                required
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
                <Link
                  to="/login"
                  className=" hover:text-white text-sky-400 underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>

          <div className="">
            <button
              onClick={handleGoogleSignUp}
              className="text-white flex items-center justify-center gap-2 hover:bg-white hover:text-black text-center font-bold text-sm w-full mb-3 p-3 h-[40px] border-2 rounded-lg"
            >
              <span>Sign up with</span> <FaGoogle className="inline " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
