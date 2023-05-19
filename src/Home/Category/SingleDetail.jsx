import React from 'react';
import { DynamicStar } from 'react-dynamic-star';

const SingleDetail = ({each}) => {
    const {picture, availableQuantity, rating, price, toyName
    } = each;
    return (
        <div className="w-[300px] p-4 rounded-lg shadow-lg bg-white flex flex-col items-center">
              <img
                className="w-1/2 rounded-lg"
                src={picture}
                alt=""
              />
              <h2 className="text-[#181D4E] font-bold text-lg">
                {toyName}
              </h2>
              <div className="">
                <p className="text-[#646672] text-center text-lg">
                  Price : $ {price}
                </p>
                <p className="flex text-[#646672] text-center text-lg">
                  <span>Rating 4.5</span> {"  "}
                  <DynamicStar
                    height={15}
                    width={15}
                    className="border-2 inline"
                    rating={rating}
                  />
                </p>
              </div>
              <button className="bg-[#12AEE0] py-3 w-full px-5 text-white rounded-full hover:bg-[#12ace077]">
                View Details
              </button>
            </div>
    );
};

export default SingleDetail;