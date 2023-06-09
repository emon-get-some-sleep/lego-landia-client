import React, { useEffect } from "react";
import LazyLoad from "react-lazy-load";
import AOS from 'aos';
import 'aos/dist/aos.css';
const SingleGallary = ({ each }) => {
  const { img, title, description } = each;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div  data-aos="fade-left" data-aos-duration="500" data-aos-delay="1000"  className="card-container w-full sm:w-[320px] h-[500px] overflow-hidden rounded-[20px] border-[8px]  relative">
      <LazyLoad height={762}>
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={img}
          alt=""
        />
      </LazyLoad>
      <div
        id="card-description"
        className="card-description w-full h-full top-0 -right-[100%] duration-1000 absolute bg-[#181d4e25] backdrop-blur-sm rounded-2xl p-4 flex flex-col justify-center"
      >
        <h3 className="text-white font-semibold mx-auto text-[24px] md:text-4xl  my-5">
          {title}
        </h3>
        <p className="text-white  text-sm md:text-base font-medium">
          {description}
        </p>
        <button className="bg-[#12AEE0] w-full md:w-1/2 py-3 px-5 text-white rounded-lg mt-3 hover:bg-[#12ace077]">
          View Details
        </button>
      </div>
    </div>
  );
};

export default SingleGallary;
