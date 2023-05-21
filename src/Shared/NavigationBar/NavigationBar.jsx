import React, { useContext, useState } from "react";
import { FaBars} from "react-icons/fa";
import logo from "/favicon2.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
const NavigationBar = () => {
  const {user, logOut} = useContext(AuthContext)
  const [showMenu, setShowMenu] = useState(false);
  const handleLogOut = () => {
    logOut();
    Swal.fire(
      'Successfully Logged out',
      'Please come back later',
      'success'
    )
  }
  return (
    <div>
    <div className="flex  items-center justify-between mt-[40px]">
      <div className="flex items-center">
        <img className="w-[40px] h-[70px]" src={logo} alt="" />
        <h2 className="font-bold text-[22px] md:text-2xl">Lego Landia</h2>
      </div>

      <div className="space-x-3 hidden md:block">
        <Link to='/' className="font-semibold text-[#141414] hover:text-violet-600 duration-300">Home</Link>
        <Link to='/blog'  className="font-semibold text-[#141414] hover:text-violet-600 duration-300">Blog</Link>
        <Link to='/'  className="font-semibold text-[#141414] hover:text-violet-600 duration-300">Contact</Link>
        <Link to='/alltoys'  className="font-semibold text-[#141414] hover:text-violet-600 duration-300">All Toys</Link>
      </div>
      
      <div className=" hidden md:flex items-center gap-3" >
        {!user ?
        <Link to="/login"><button className="hidden md:block bg-[#12AEE0]  text-white font-medium text-xl border px-8 py-3 hover:bg-[#164f62]  rounded-lg">Login</button></Link>
        :
        <>
        <div className="tooltip" data-tip={user?.displayName}>
        <img src={user.photoURL} className="w-[50px] h-[50px] rounded-[50%]" alt="" />
        </div>
        <button onClick={handleLogOut} className="text-sm px-3 hover:bg-[#104d63] font-bold h-[35px] text-white bg-[#12AEE0]">Sign Out</button>
        <Link to="/mytoys">
        <button className="text-sm px-3 hover:bg-[#104d63] font-bold h-[35px] text-white bg-[#12AEE0]">My Toys</button>
        </Link>
        <Link to="/addtoy">
        <button className="text-sm px-3 hover:bg-[#104d63] font-bold h-[35px] text-white bg-[#12AEE0]">Add A Toy</button>
        </Link>
        
        </>
        }
        
      </div>
      <div className="md:hidden">
      <FaBars onClick={() => setShowMenu(!showMenu)} className="text-2xl"/>
      </div>
     
    </div>
    {showMenu && <div className="flex md:hidden flex-col gap-3 items-center"> 
        
        <Link className="font-medium text-xl" to="/">Home</Link>
        <Link className="font-medium text-xl" to="/Blogs">Blogs</Link>
        <Link className="font-medium text-xl" to="/about">About</Link>
        <Link className="font-medium text-xl" to="/alltoys">All Toys</Link>
        
        {!user ?
        <Link to="/login"><button className="bg-[#12AEE0]  text-white font-medium text-xl border px-6 py-4 rounded-lg">Login</button></Link>
        :
        <>
        <img src={user.photoURL} className="w-[50px] h-[50px] rounded-[50%]" alt="" />
        <Link to="/mytoys">
        <button className="text-sm px-3 hover:bg-[#104d63] font-bold h-[35px] text-white bg-[#12AEE0]">My Toys</button>
        </Link>
        <Link to="/addtoy">
        <button className="text-sm px-3 hover:bg-[#104d63] font-bold h-[35px] text-white bg-[#12AEE0]">Add A Toy</button>
        </Link>
        <button onClick={handleLogOut} className="text-sm bg-[#12AEE0] text-white">Sign Out</button>
        </>
        }
        
    </div>}
    </div>
  );
};

export default NavigationBar;
