import React from "react";
import Swal from "sweetalert2";

const EachBlog = ({blog}) => {
    const {image, title, article} = blog;
    const handleBookmark = () => {
        Swal.fire(
            'ADDED TO BOOKMARK',
            'Happy Reading',
            'success'
          )
    }
  return (
    <div className="p-2 my-3">
      <div>
        <img
          className=" rounded-tr-[40px] md:rounded-tr-[100px] mb-[18px]"
          src={image}
          alt=""
        />
      </div>
      <h1 className="font-bold text-[30px] sm:text[45px] md:text-[40px] my-4">
        {title}{" "}
      </h1>
      <p className="font-medium text-sm md:text-[20px] leading-[35px] md:p-[15px] w-full md:w-[70%] md:mt-[50px] text-gray-500">
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
