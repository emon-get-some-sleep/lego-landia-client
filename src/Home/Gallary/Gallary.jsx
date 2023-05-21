import React, { useEffect, useState } from "react";
import "./Gallary.css";
import SingleGallary from "./SingleGallary";

const Gallary = () => {
    const [gallary, setGallary] = useState([]);
    useEffect(() => {
      fetch('https://lego-landia-server-emon-get-some-sleep.vercel.app/gallary')
      .then(res => res.json())
      .then(data => setGallary(data))
    }, [])

  return (
    <div className="flex items-center justify-center flex-col ">
      <h1 className="text-center text-[#181D4E] text-sm font-bold mb-3">Gallary</h1>
      <h1 className="text-center text-[#181D4E] text-[26px] md:text-[49px] font-bold mb-3">Our Gallary is Filled With Toys That Every Kid Will Absolutely Love</h1>
      <div className="grid mt-[40px] px-3 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
       {
        gallary.map(each => <SingleGallary key={each._id} each={each}></SingleGallary>)
       }
      </div>
    </div>
  );
};

export default Gallary;
