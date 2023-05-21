import React, { useEffect } from "react";
import LazyLoad from "react-lazy-load";
import Swal from "sweetalert2";
import AOS from 'aos';
import 'aos/dist/aos.css';
const EachBlog = ({blog}) => {
    const {image, title, article} = blog;
    const handleBookmark = () => {
        Swal.fire(
            'ADDED TO BOOKMARK',
            'Happy Reading',
            'success'
          )
    }

    useEffect(() => {
      AOS.init();
    }, [])
  return (
    <div className="p-2 my-3">
      <div  data-aos="fade-right" data-aos-duration="500" data-aos-delay="500" >
        <LazyLoad>
        <img
          className=" rounded-tr-[40px] md:rounded-tr-[100px] mb-[18px]"
          src={image}
          alt=""
        />
        </LazyLoad>
      </div>
      <h1  data-aos="fade-left" data-aos-duration="500" data-aos-delay="500"  className="font-bold text-[30px] sm:text[45px] md:text-[40px] my-4">
        {title}{" "}
      </h1>
      <p  data-aos="slide-up" data-aos-duration="500" data-aos-delay="1000"  className="font-medium text-sm md:text-[20px] leading-[35px] md:p-[15px] w-full md:w-[70%] md:mt-[50px] text-gray-500">
      {article}
      </p>
      <button
        onClick={handleBookmark}
        className="border-[#12AEE0] text-sm md:text-xl border px-8 py-3 hover:bg-[#164f62] hover:text-white font-semibold  rounded-lg"
      >
        ADD TO BOOKMARK
      </button>
    </div>
  );
};

export default EachBlog;
