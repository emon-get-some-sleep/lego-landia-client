import React from 'react';
import { DynamicStar } from 'react-dynamic-star';
import { useNavigate } from 'react-router-dom';

const SingleDetail = ({each}) => {
    const {_id, picture, availableQuantity, rating, price, toyName
    } = each;
    const navigate = useNavigate();
    const viewDetails = id => {
      navigate(`/viewdetails/${id}`);
    }
    return (
        <div className="w-full sm:w-[300px] p-4 rounded-lg shadow-lg bg-white flex flex-col items-center">
              <img
                className="w-full my-3 sm:w-[400px] h-[200px] rounded-lg"
                src={picture}
                alt=""
              />
              <h2 className="text-[#181D4E] mb-2 font-bold text-lg">
                {toyName}
              </h2>
              <div className="">
                <p className="text-[#646672] mb-3 text-center text-lg">
                  Price : $ {price}
                </p>
                <div className="flex text-[#646672] gap-2 shadow-sm text-center text-lg">
                  <span>Rating 4.5</span> {"  "}
                  <DynamicStar
                    height={15}
                    width={15}
                    className="border-2 inline"
                    rating={rating}
                  />
                </div>
              </div>
              <button onClick={() => viewDetails(_id)} className="bg-[#12AEE0] mt-2 py-3 w-full px-5 text-white rounded-full hover:bg-[#12ace077]">
                View Details
              </button>
            </div>
    );
};

export default SingleDetail;