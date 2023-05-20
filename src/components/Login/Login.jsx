import React, { useContext } from "react";
import { FaGoogle, FaLocationArrow, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
const Login = () => {

  const navigate = useNavigate();
  const { signIn, signInWithGoogle} = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = {email, password};
    console.log(user);
    signIn(email, password)
    .then(result => {
      const user = result.user;
      Swal.fire(
        'Login Successful!',
        'Welcome Back',
        'success'
      )
      navigate('/')
    })
    .catch(error => {
      Swal.fire({
        icon: 'error',
        title: error.message,
        text: 'We are sorry for this inconvenient'
        
      })
    })
  }
  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result => {
      const user = result.user;
      // console.log(user);
      Swal.fire(
        'Logged In Successfully!',
        'Welcome Back',
        'success'
      )
      navigate('/')
    })
    .catch(error => {
      const warning = error.message;
      Swal.fire({
        icon: 'error',
        title: warning,
        text: 'We are extremly sorry for this inconvenient'
        
      })
    })
  }
  return (
    <div className="h-[100vh] mt-[60px] flex items-center lego-bg justify-center bg-blue-500">
      {/* <div>
                <img className='w-[400px] border-2 rounded-lg h-[400px]' src="https://images.pexels.com/photos/298825/pexels-photo-298825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div> */}

      <div className="w-[400px] h-[450px] bg-transparent border-2 backdrop-blur-[15px] rounded-lg flex items-center justify-center relative">
        <div>
          <form onSubmit={handleLogin}>
            <h2 className="font-bold text-xl text-center text-white">Login</h2>
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
              value="Login"
            />
            <div className="text-sm text-white text-center mt-[25px] mb-[15px]">
              <p className="font-semibold">
                Don't have an account?{" "}
                <Link to="/register" className=" hover:text-white text-sky-400 underline">
                  Register
                </Link>
              </p>
            </div>
            
          </form>
          <div className=''>
                <button onClick={handleGoogleSignIn} className='text-white flex items-center justify-center gap-2 hover:bg-white hover:text-black text-center font-bold text-sm w-full mb-3 p-3 h-[40px] border-2 rounded-lg'><span>Sign In with</span> <FaGoogle className='inline ' /></button>
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
