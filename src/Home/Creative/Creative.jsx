import React, { useEffect } from "react";
import LazyLoad from "react-lazy-load";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Creative = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 mt-[120px]">
      <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="500" >
        <LazyLoad>
        <img
          className="w-full lg:w-[80%] rounded-lg"
          src="https://junotoys.themerex.net/wp-content/uploads/2021/09/post17-copyright-650x572.jpg"
          alt=""
        />
        </LazyLoad>
      </div>
      <div  data-aos="fade-left" data-aos-duration="500" data-aos-delay="500" >
        <p className="text-[#181D4E] font-bold mb-3">creative approach</p>
        <h2 className="text-[#181D4E] text-[44px] font-bold mb-3">
          We provide an exciting Lego experience that sparks imagination and
          creativity in kids.
        </h2>
        <div  data-aos="slide-up" data-aos-duration="500" data-aos-delay="500"  className="">
          <LazyLoad>
          <img
            className="w-full lg:w-[80%] rounded-lg"
            src="https://plus.unsplash.com/premium_photo-1661636585302-75c478636318?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
          </LazyLoad>
        </div>
      </div>
    </div>
  );
};

export default Creative;
