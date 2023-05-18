import React from "react";
import "./Testimonial.css";
import { FaBeer, FaQuoteRight } from "react-icons/fa";
const Testimonial = () => {
  return (
    <div className="child-bg flex items-center justify-center p-[100px]">
    <div className="  grid grid-cols-3 gap-5">
      <div className="col-span-1">
        <h2 className="text-sm font-bold text-[#F5F6F7]">Testiomonial</h2>
        <h1 className="text-[35px] my-[21px] font-bold text-white">
          What Our Clients Say About Us
        </h1>
        <p className="text-[17px] text-[#D0D3DC] text-left">
          We appreciate your kind and honest feedback and invite you to our
          amazing store.
        </p>
        <button className="bg-[#12AEE0] mt-6 py-3 px-5 text-white rounded-lg hover:bg-[#12ace077]">
          About Us
        </button>
      </div>
      <div className="col-span-1 p-4 hover:-translate-y-[10px] duration-300 bg-white flex items-center justify-center flex-col  rounded-2xl">
        <span className="flex justify-center">
          {" "}
          <FaQuoteRight className="text-[#2BB24C] text-6xl  text-center" />{" "}
        </span>
        <p className="text-[#181D4E] my-[24px] w-1/2 text-left text-lg leading-[34px]">
          What a great store for the entire family! My kids love this place
          because of the toys!
        </p>
        <div className="flex items-center gap-4">
            <img className="w-[40px] h-[40px] rounded-[50%]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
            <div>
            <p className="font-bold text-[#181D4E]">Elia Williams</p>
            <p className="text-[#646672]">CEO, Business Co.</p>
            </div>
        </div>
      </div>
      <div className="bg-white col-span-1 hover:-translate-y-[10px] duration-300  flex items-center justify-center flex-col  rounded-2xl p-4">
        <span className="flex justify-center">
          {" "}
          <FaQuoteRight className="text-[#2BB24C] text-6xl  text-center" />{" "}
        </span>
        <p className="text-[#181D4E] my-[24px] w-1/2 text-left text-lg leading-[34px]">
          What a great store for the entire family! My kids love this place
          because of the toys!
        </p>
        <div className="flex items-center gap-4">
            <img className="w-[40px] h-[40px] rounded-[50%]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
            <div>
            <p className="font-bold text-[#181D4E]">Elia Williams</p>
            <p className="text-[#646672]">CEO, Business Co.</p>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Testimonial;
