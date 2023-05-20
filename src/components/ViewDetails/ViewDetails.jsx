import React from "react";
import { DynamicStar } from "react-dynamic-star";
import { FaCalculator } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const legoData = useLoaderData();
  // console.log(legoData);
  const {_id, picture, availableQuantity, rating, price, toyName, description, sellerEmail, sellerName, } = legoData;
  return (
    <div className="mt-[140px] bg-[#1CD8D2] min-h-[100vh] flex items-center justify-center">
      <div className="flex flex-col lg:flex-row justify-between gap-6 md:p-5">
        <div className="bg-white flex-1 rounded-lg p-[40px]">
          <img
            className=" rounded-lg shadow-lg"
            src={picture}
            alt=""
          />
          <h2 className="text-[#181D4E] mt-[30px] font-bold text-[22px] md:text-[32px] my-4">
            {toyName}
          </h2>

          <p className="text-[#181D4E] font-semibold">Price : $ {price}</p>
          <div className="flex text-[#181D4E] font-semibold">
            <span>Rating 4.5</span> {"  "}
            <DynamicStar
              height={15}
              width={15}
              className="border-2 inline"
              rating={rating}
            />
          </div>
        </div>
        <div className="flex-1 space-y-3">
            <h1 className="text-[#181D4E] font-bold text-[20px] md:text-[32px]">{sellerName}</h1>
            <h1 className="text-[#181D4E] font-bold text-[20px] md:text-[22px]">{sellerEmail}</h1>
            <h1 className="text-white font-bold text-sm md:text-[18px]"> <FaCalculator className="inline text-white mr-2" /> Available Quantity : {availableQuantity}</h1>
            <p className="font-medium text-sm md:text-base text-white">
             {description}
            </p>
            <div className="mt-[30px] p-4 space-y-3">
            <button className='bg-[#12AEE0] py-3 text-sm md:text-base w-full text-white font-bold rounded-full hover:bg-[#12ace077]'>ADD TO CART</button>
            <button className='bg-[#12AEE0] py-3 text-sm md:text-base w-full font-bold text-white rounded-full hover:bg-[#12ace077]'>BUY NOW</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
