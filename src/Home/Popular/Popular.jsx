import React from "react";
import LazyLoad from "react-lazy-load";

const Popular = () => {
  return (
    <div className="mt-[120px] py-6 mb-[80px] bg-[#F5F6F7]">
      <h2 className="font-bold text-[#181D4E] text-sm text-center">
        Lego Landia Toys & Games
      </h2>
      <h1 className="font-bold text-[#181D4E] mb-[40px] text-[56px] text-center">
        Popular in Store
      </h1>
      <div className="grid grid-cols-1 pb-[25px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div className="flex hover:-translate-y-[10px] duration-300 items-center flex-col">
          <div className="bg-white rounded-lg">
            <LazyLoad>
              <img
                className="w-[150px] h-[150px] p-[30px] rounded-lg shadow-lg"
                src="https://www.lego.com/cdn/cs/set/assets/blt92f7face5cfdb894/71374.jpg?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
                alt=""
              />
            </LazyLoad>
          </div>
          <p className="text-[#181D4E] font-bold text-lg">Mini Game Pod</p>
          <p className="text-sm text-[#646672] mt-3">$ 400.00</p>
        </div>
        <div className="flex hover:-translate-y-[10px] duration-300 items-center flex-col">
          <div className="bg-white rounded-lg">
            <LazyLoad>
              <img
                className="w-[150px] h-[150px] p-[30px] rounded-lg shadow-lg"
                src="https://www.lego.com/cdn/cs/set/assets/blt86423e4ec25d4312/10276.jpg?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
                alt=""
              />
            </LazyLoad>
          </div>
          <p className="text-[#181D4E] font-bold text-lg">Collosseum</p>
          <p className="text-sm text-[#646672] mt-3">$ 250.00</p>
        </div>
        <div className="flex hover:-translate-y-[10px] duration-300 items-center flex-col">
          <div className="bg-white rounded-lg">
            <LazyLoad>
              <img
                className="w-[150px] h-[150px] p-[30px] rounded-lg shadow-lg"
                src="https://www.lego.com/cdn/cs/set/assets/bltb5d48295186d71c6/76251.png?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
                alt=""
              />
            </LazyLoad>
          </div>
          <p className="text-[#181D4E] font-bold text-lg">Star Lord's Helmet</p>
          <p className="text-sm text-[#646672] mt-3">$ 190.00</p>
        </div>
        <div className="flex hover:-translate-y-[10px] duration-300 items-center flex-col">
          <div className="bg-white rounded-lg">
            <LazyLoad>
              <img
                className="w-[150px] h-[150px] p-[30px] rounded-lg shadow-lg"
                src="https://www.lego.com/cdn/cs/set/assets/blt2b163a472ef2e61f/21338.png?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
                alt=""
              />
            </LazyLoad>
          </div>
          <p className="text-[#181D4E] font-bold text-lg">Cabin in the wood</p>
          <p className="text-sm text-[#646672] mt-3">$ 900.00</p>
        </div>
        <div className="flex hover:-translate-y-[10px] duration-300 items-center flex-col">
          <div className="bg-white rounded-lg">
            <LazyLoad>
              <img
                className="w-[150px] h-[150px] p-[30px] rounded-lg shadow-lg"
                src="https://www.lego.com/cdn/cs/set/assets/blt46a07a9b068b46c2/40174.jpg?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
                alt=""
              />
            </LazyLoad>
          </div>
          <p className="text-[#181D4E] font-bold text-lg">
            Lego Iconic chess set
          </p>
          <p className="text-sm text-[#646672] mt-3">$ 200.00</p>
        </div>
        <div className="flex hover:-translate-y-[10px] duration-300 items-center flex-col">
          <div className="bg-white rounded-lg">
            <LazyLoad>
              <img
                className="w-[150px] h-[150px] p-[30px] rounded-lg shadow-lg"
                src="https://www.lego.com/cdn/cs/set/assets/bltb94632aeb971eb91/10294.jpg?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
                alt=""
              />
            </LazyLoad>
          </div>
          <p className="text-[#181D4E] font-bold text-lg">Lego Titanic</p>
          <p className="text-sm text-[#646672] mt-3">$ 50.00</p>
        </div>
        <div className="flex hover:-translate-y-[10px] duration-300 items-center flex-col">
          <div className="bg-white rounded-lg">
            <LazyLoad>
              <img
                className="w-[150px] h-[150px] p-[30px] rounded-lg shadow-lg"
                src="https://www.lego.com/cdn/cs/set/assets/blt7f97c7c78bc8aee9/71459.png?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
                alt=""
              />
            </LazyLoad>
          </div>
          <p className="text-[#181D4E] font-bold text-lg">
            Lego Dream Creatures
          </p>
          <p className="text-sm text-[#646672] mt-3">$ 200.00</p>
        </div>
        <div className="flex hover:-translate-y-[10px] duration-300 items-center flex-col">
          <div className="bg-white rounded-lg">
            <LazyLoad>
              <img
                className="w-[150px] h-[150px] p-[30px] rounded-lg shadow-lg"
                src="https://www.lego.com/cdn/cs/set/assets/blte0d3845b7b2a728c/71795.png?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
                alt=""
              />
            </LazyLoad>
          </div>
          <p className="text-[#181D4E] font-bold text-lg">Lego Temple</p>
          <p className="text-sm text-[#646672] mt-3">$ 300.00</p>
        </div>
      </div>
    </div>
  );
};

export default Popular;
