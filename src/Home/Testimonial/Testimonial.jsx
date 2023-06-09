import React, { useEffect } from "react";
import "./Testimonial.css";
import { FaBeer, FaQuoteRight } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Testimonial = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="child-bg flex items-center justify-center p-[50px] md:p-[100px]">
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div  data-aos="fade-left" data-aos-duration="500" data-aos-delay="1000" className="w-full md:col-span-1">
          <h2 className="text-sm font-bold text-[#F5F6F7]">Testiomonial</h2>
          <h1 className=" text-base md:text-[35px] my-[21px] leading-10 font-bold text-white">
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
        <div className="md:col-span-1 p-4 hover:-translate-y-[10px] duration-300 bg-white flex md:items-center justify-center flex-col  rounded-2xl">
          <span className="flex justify-center">
            {" "}
            <FaQuoteRight className="text-[#2BB24C] text-base md:text-6xl  text-center" />{" "}
          </span>
          <p className="text-[#181D4E] my-[24px] w-full md:w-1/2 text-left text-sm md:text-lg md:leading-[34px]">
            What a great store for the entire family! My kids love this place
            because of the toys!
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <LazyLoad>
              <img
                className="w-[40px] h-[40px] rounded-[50%]"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
            </LazyLoad>
            <div>
              <p className="font-bold text-sm md:text-base text-[#181D4E]">
                Elia Williams
              </p>
              <p className="text-[#646672] text-sm md:text-base">
                CEO, Business Co.
              </p>
            </div>
          </div>
        </div>
        <div  data-aos="fade-right" data-aos-duration="500" data-aos-delay="1000"  className="md:col-span-1 p-4 hover:-translate-y-[10px] duration-300 bg-white flex md:items-center justify-center flex-col  rounded-2xl">
          <span className="flex justify-center">
            {" "}
            <FaQuoteRight className="text-[#2BB24C] text-base md:text-6xl  text-center" />{" "}
          </span>
          <p className="text-[#181D4E] my-[24px] w-full md:w-1/2 text-left text-sm md:text-lg md:leading-[34px]">
            This store is perfect for the whole family! It's a fantastic place
            that children adore, thanks to the wide selection of toys available.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <LazyLoad>
              <img
                className="w-[40px] h-[40px] rounded-[50%]"
                src="https://i.dailymail.co.uk/i/pix/2016/02/16/14/314904EC00000578-0-image-a-18_1455633650354.jpg"
                alt=""
              />
            </LazyLoad>
            <div>
              <p className="font-bold text-sm md:text-base text-[#181D4E]">
                Emilia Page
              </p>
              <p className="text-[#646672] text-sm md:text-base">
                Writer, Underthing press.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
