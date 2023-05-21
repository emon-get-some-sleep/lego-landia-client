import React, { useEffect } from 'react';
import './Banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div>
            <div className="banner mt-[70px] rounded-sm flex justify-start items-center mb-[120px]">
                <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="1000" className='md:w-1/2 md:pl-[30px]'>
                    <h2 className='font-bold text-[30px] md:text-[70px] text-white md:text-[#181D4E] leading-[65px]'>Pick Your Best Lego Sets For Your Kid</h2>
                    <p className='md:text-[#5E6071] leading-[28px] text-lg mt-5 mb-[33px]'>Discover an incredible selection of top-notch toys <br /> that are perfect for your child's enjoyment and development.</p>
                    <button className='bg-[#12AEE0] py-5 px-10 text-white rounded-full hover:bg-[#12ace077]'>Discover now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;