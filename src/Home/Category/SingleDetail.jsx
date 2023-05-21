import React, { useEffect } from 'react';
import { DynamicStar } from 'react-dynamic-star';
import LazyLoad from 'react-lazy-load';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const SingleDetail = ({each}) => {
    const {_id, picture, availableQuantity, rating, price, toyName
    } = each;
    const navigate = useNavigate();
    const viewDetails = id => {
      navigate(`/viewdetails/${id}`);
    }
    useEffect(() => {
      AOS.init();
    }, []);
    return (
        <div  data-aos="fade-left" data-aos-duration="500" data-aos-delay="500" className="w-full sm:w-[300px] p-4 rounded-lg shadow-lg bg-white flex flex-col items-center">
              <LazyLoad>
              <img
                className="w-full my-3 sm:w-[400px] h-[200px] rounded-lg"
                src={picture}
                alt=""
              />
              </LazyLoad>
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