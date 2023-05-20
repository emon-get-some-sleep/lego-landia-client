import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <div className="banner mt-[70px] rounded-sm flex justify-start items-center mb-[120px]">
                <div className='md:w-1/2 md:pl-[30px]'>
                    <h2 className='font-bold text-[30px] md:text-[70px] text-white md:text-[#181D4E] leading-[65px]'>Pick Your Best Toys For Your Kid</h2>
                    <p className='md:text-[#5E6071] leading-[28px] text-lg mt-5 mb-[33px]'>The best offers for regular customers, including free <br /> shipping on your childrens' birthdays!</p>
                    <button className='bg-[#12AEE0] py-5 px-10 text-white rounded-full hover:bg-[#12ace077]'>Discover now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;