import React from "react";
import { DynamicStar } from "react-dynamic-star";
import { FaCalculator } from "react-icons/fa";

const ViewDetails = () => {
  return (
    <div className="mt-[140px] bg-[#1CD8D2] h-[100vh] flex items-center justify-center">
      <div className="flex flex-col lg:flex-row justify-between gap-6 md:p-5">
        <div className="bg-white flex-1 rounded-lg p-[40px]">
          <img
            className=" rounded-lg shadow-lg"
            src="https://www.lego.com/cdn/cs/set/assets/blt56892bcc5f4fb152/45002.jpg?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
            alt=""
          />
          <h2 className="text-[#181D4E] mt-[30px] font-bold text-[32px] my-4">
            Tech Machines
          </h2>

          <p className="text-[#181D4E] font-semibold">Price : $20</p>
          <div className="flex text-[#181D4E] font-semibold">
            <span>Rating 4.5</span> {"  "}
            <DynamicStar
              height={15}
              width={15}
              className="border-2 inline"
              rating={4}
            />
          </div>
        </div>
        <div className="flex-1">
            <h1 className="text-[#181D4E] font-bold text-[32px]">Seller Name</h1>
            <h1 className="text-[#181D4E] font-bold text-[22px]">Seller Email</h1>
            <h1 className="text-[#FF8F00] font-bold text-[18px]"> <FaCalculator className="inline text-white mr-2" /> Available Quantity</h1>
            <p className="font-medium text-white">
            Lorem ipsum dolor sit amet consectetur. Dolor arcu eget morbi euismod sed nullam malesuada. Purus fusce faucibus commodo lectus.
            </p>
            <div className="mt-[30px] p-4 space-y-3">
            <button className='bg-[#12AEE0] py-3 w-full text-white font-bold rounded-full hover:bg-[#12ace077]'>ADD TO CART</button>
            <button className='bg-[#12AEE0] py-3 w-full font-bold text-white rounded-full hover:bg-[#12ace077]'>BUY NOW</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
