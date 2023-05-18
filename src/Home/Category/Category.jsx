import React from "react";
import { DynamicStar } from "react-dynamic-star";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Category = () => {
  return (
    <div>
      <h3 className="text-center font-bold text-2xl">Categories</h3>
      <Tabs>
        <TabList>
          <div className="cursor-pointer flex justify-between bg-gradient-to-r from-[#7474BF] to-[#348AC7] p-4 text-white">
            <Tab className="bg-[#12AEE0] font-bold text-white px-8 py-3 rounded-lg">
              Educational
            </Tab>
            <Tab className="bg-[#12AEE0] font-bold text-white px-8 py-3 rounded-lg">
              Recrational
            </Tab>
            <Tab className="bg-[#12AEE0] font-bold text-white px-8 py-3 rounded-lg">
              Productive
            </Tab>
            <Tab className="bg-[#12AEE0] font-bold text-white px-8 py-3 rounded-lg">
              Exploration
            </Tab>
          </div>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-3 gap-4">
          <div className="w-[300px] p-4 rounded-lg shadow-lg bg-white flex flex-col items-center">
            <img
              className="w-1/2 rounded-lg"
              src="https://www.lego.com/cdn/cs/set/assets/blt56892bcc5f4fb152/45002.jpg?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
              alt=""
            />
            <h2 className="text-[#181D4E] font-bold text-lg">Tech Machines</h2>
            <div className="">
              <p className="text-[#646672] text-center text-lg">Price : $20</p>
              <p className="flex text-[#646672] text-center text-lg">
                <span>Rating 4.5</span> {"  "}
                <DynamicStar
                  height={15}
                  width={15}
                  className="border-2 inline"
                  rating={4}
                />
              </p>
            </div>
            <button className='bg-[#12AEE0] py-3 w-full px-5 text-white rounded-full hover:bg-[#12ace077]'>View Details</button>
          </div>
          <div className="w-[300px] p-4 rounded-lg shadow-lg bg-white flex flex-col items-center">
            <img
              className="w-1/2 rounded-lg"
              src="https://www.lego.com/cdn/cs/set/assets/blt56892bcc5f4fb152/45002.jpg?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
              alt=""
            />
            <h2 className="text-[#181D4E] font-bold text-lg">Tech Machines</h2>
            <div className="">
              <p className="text-[#646672] text-center text-lg">Price : $20</p>
              <p className="flex text-[#646672] text-center text-lg">
                <span>Rating 4.5</span> {"  "}
                <DynamicStar
                  height={15}
                  width={15}
                  className="border-2 inline"
                  rating={4}
                />
              </p>
            </div>
            <button className='bg-[#12AEE0] py-3 w-full px-5 text-white rounded-full hover:bg-[#12ace077]'>View Details</button>
          </div>
          <div className="w-[300px] p-4 rounded-lg shadow-lg bg-white flex flex-col items-center">
            <img
              className="w-1/2 rounded-lg"
              src="https://www.lego.com/cdn/cs/set/assets/blt56892bcc5f4fb152/45002.jpg?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
              alt=""
            />
            <h2 className="text-[#181D4E] font-bold text-lg">Tech Machines</h2>
            <div className="">
              <p className="text-[#646672] text-center text-lg">Price : $20</p>
              <p className="flex text-[#646672] text-center text-lg">
                <span>Rating 4.5</span> {"  "}
                <DynamicStar
                  height={15}
                  width={15}
                  className="border-2 inline"
                  rating={4}
                />
              </p>
            </div>
            <button className='bg-[#12AEE0] py-3 w-full px-5 text-white rounded-full hover:bg-[#12ace077]'>View Details</button>
          </div>
          <div className="w-[300px] p-4 rounded-lg shadow-lg bg-white flex flex-col items-center">
            <img
              className="w-1/2 rounded-lg"
              src="https://www.lego.com/cdn/cs/set/assets/blt56892bcc5f4fb152/45002.jpg?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
              alt=""
            />
            <h2 className="text-[#181D4E] font-bold text-lg">Tech Machines</h2>
            <div className="">
              <p className="text-[#646672] text-center text-lg">Price : $20</p>
              <p className="flex text-[#646672] text-center text-lg">
                <span>Rating 4.5</span> {"  "}
                <DynamicStar
                  height={15}
                  width={15}
                  className="border-2 inline"
                  rating={4}
                />
              </p>
            </div>
            <button className='bg-[#12AEE0] py-3 w-full px-5 text-white rounded-full hover:bg-[#12ace077]'>View Details</button>
          </div>
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-3 gap-4">
          <div className="w-[300px] p-4 rounded-lg shadow-lg bg-white flex flex-col items-center">
            <img
              className="w-1/2 rounded-lg"
              src="https://www.lego.com/cdn/cs/set/assets/blt56892bcc5f4fb152/45002.jpg?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
              alt=""
            />
            <h2 className="text-[#181D4E] font-bold text-lg">Tech Machines</h2>
            <div className="">
              <p className="text-[#646672] text-center text-lg">Price : $20</p>
              <p className="flex text-[#646672] text-center text-lg">
                <span>Rating 4.5</span> {"  "}
                <DynamicStar
                  height={15}
                  width={15}
                  className="border-2 inline"
                  rating={4}
                />
              </p>
            </div>
            <button className='bg-[#12AEE0] py-3 w-full px-5 text-white rounded-full hover:bg-[#12ace077]'>View Details</button>
          </div>
          <div className="w-[300px] p-4 rounded-lg shadow-lg bg-white flex flex-col items-center">
            <img
              className="w-1/2 rounded-lg"
              src="https://www.lego.com/cdn/cs/set/assets/blt56892bcc5f4fb152/45002.jpg?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
              alt=""
            />
            <h2 className="text-[#181D4E] font-bold text-lg">Tech Machines</h2>
            <div className="">
              <p className="text-[#646672] text-center text-lg">Price : $20</p>
              <p className="flex text-[#646672] text-center text-lg">
                <span>Rating 4.5</span> {"  "}
                <DynamicStar
                  height={15}
                  width={15}
                  className="border-2 inline"
                  rating={4}
                />
              </p>
            </div>
            <button className='bg-[#12AEE0] py-3 w-full px-5 text-white rounded-full hover:bg-[#12ace077]'>View Details</button>
          </div>
          <div className="w-[300px] p-4 rounded-lg shadow-lg bg-white flex flex-col items-center">
            <img
              className="w-1/2 rounded-lg"
              src="https://www.lego.com/cdn/cs/set/assets/blt56892bcc5f4fb152/45002.jpg?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
              alt=""
            />
            <h2 className="text-[#181D4E] font-bold text-lg">Tech Machines</h2>
            <div className="">
              <p className="text-[#646672] text-center text-lg">Price : $20</p>
              <p className="flex text-[#646672] text-center text-lg">
                <span>Rating 4.5</span> {"  "}
                <DynamicStar
                  height={15}
                  width={15}
                  className="border-2 inline"
                  rating={4}
                />
              </p>
            </div>
            <button className='bg-[#12AEE0] py-3 w-full px-5 text-white rounded-full hover:bg-[#12ace077]'>View Details</button>
          </div>
          <div className="w-[300px] p-4 rounded-lg shadow-lg bg-white flex flex-col items-center">
            <img
              className="w-1/2 rounded-lg"
              src="https://www.lego.com/cdn/cs/set/assets/blt56892bcc5f4fb152/45002.jpg?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
              alt=""
            />
            <h2 className="text-[#181D4E] font-bold text-lg">Tech Machines</h2>
            <div className="">
              <p className="text-[#646672] text-center text-lg">Price : $20</p>
              <p className="flex text-[#646672] text-center text-lg">
                <span>Rating 4.5</span> {"  "}
                <DynamicStar
                  height={15}
                  width={15}
                  className="border-2 inline"
                  rating={4}
                />
              </p>
            </div>
            <button className='bg-[#12AEE0] py-3 w-full px-5 text-white rounded-full hover:bg-[#12ace077]'>View Details</button>
          </div>
          </div>
        </TabPanel>
        <TabPanel>
          
        <div className="grid grid-cols-3 gap-4">
          <div className="w-[300px] p-4 rounded-lg shadow-lg bg-white flex flex-col items-center">
            <img
              className="w-1/2 rounded-lg"
              src="https://www.lego.com/cdn/cs/set/assets/blt56892bcc5f4fb152/45002.jpg?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
              alt=""
            />
            <h2 className="text-[#181D4E] font-bold text-lg">Tech Machines</h2>
            <div className="">
              <p className="text-[#646672] text-center text-lg">Price : $20</p>
              <p className="flex text-[#646672] text-center text-lg">
                <span>Rating 4.5</span> {"  "}
                <DynamicStar
                  height={15}
                  width={15}
                  className="border-2 inline"
                  rating={4}
                />
              </p>
            </div>
            <button className='bg-[#12AEE0] py-3 w-full px-5 text-white rounded-full hover:bg-[#12ace077]'>View Details</button>
          </div>
          <div className="w-[300px] p-4 rounded-lg shadow-lg bg-white flex flex-col items-center">
            <img
              className="w-1/2 rounded-lg"
              src="https://www.lego.com/cdn/cs/set/assets/blt56892bcc5f4fb152/45002.jpg?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
              alt=""
            />
            <h2 className="text-[#181D4E] font-bold text-lg">Tech Machines</h2>
            <div className="">
              <p className="text-[#646672] text-center text-lg">Price : $20</p>
              <p className="flex text-[#646672] text-center text-lg">
                <span>Rating 4.5</span> {"  "}
                <DynamicStar
                  height={15}
                  width={15}
                  className="border-2 inline"
                  rating={4}
                />
              </p>
            </div>
            <button className='bg-[#12AEE0] py-3 w-full px-5 text-white rounded-full hover:bg-[#12ace077]'>View Details</button>
          </div>
          <div className="w-[300px] p-4 rounded-lg shadow-lg bg-white flex flex-col items-center">
            <img
              className="w-1/2 rounded-lg"
              src="https://www.lego.com/cdn/cs/set/assets/blt56892bcc5f4fb152/45002.jpg?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
              alt=""
            />
            <h2 className="text-[#181D4E] font-bold text-lg">Tech Machines</h2>
            <div className="">
              <p className="text-[#646672] text-center text-lg">Price : $20</p>
              <p className="flex text-[#646672] text-center text-lg">
                <span>Rating 4.5</span> {"  "}
                <DynamicStar
                  height={15}
                  width={15}
                  className="border-2 inline"
                  rating={4}
                />
              </p>
            </div>
            <button className='bg-[#12AEE0] py-3 w-full px-5 text-white rounded-full hover:bg-[#12ace077]'>View Details</button>
          </div>
          <div className="w-[300px] p-4 rounded-lg shadow-lg bg-white flex flex-col items-center">
            <img
              className="w-1/2 rounded-lg"
              src="https://www.lego.com/cdn/cs/set/assets/blt56892bcc5f4fb152/45002.jpg?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
              alt=""
            />
            <h2 className="text-[#181D4E] font-bold text-lg">Tech Machines</h2>
            <div className="">
              <p className="text-[#646672] text-center text-lg">Price : $20</p>
              <p className="flex text-[#646672] text-center text-lg">
                <span>Rating 4.5</span> {"  "}
                <DynamicStar
                  height={15}
                  width={15}
                  className="border-2 inline"
                  rating={4}
                />
              </p>
            </div>
            <button className='bg-[#12AEE0] py-3 w-full px-5 text-white rounded-full hover:bg-[#12ace077]'>View Details</button>
          </div>
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-3 gap-4">
          <div className="w-[300px] p-4 rounded-lg shadow-lg bg-white flex flex-col items-center">
            <img
              className="w-1/2 rounded-lg"
              src="https://www.lego.com/cdn/cs/set/assets/blt56892bcc5f4fb152/45002.jpg?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
              alt=""
            />
            <h2 className="text-[#181D4E] font-bold text-lg">Tech Machines</h2>
            <div className="">
              <p className="text-[#646672] text-center text-lg">Price : $20</p>
              <p className="flex text-[#646672] text-center text-lg">
                <span>Rating 4.5</span> {"  "}
                <DynamicStar
                  height={15}
                  width={15}
                  className="border-2 inline"
                  rating={4}
                />
              </p>
            </div>
            <button className='bg-[#12AEE0] py-3 w-full px-5 text-white rounded-full hover:bg-[#12ace077]'>View Details</button>
          </div>
          <div className="w-[300px] p-4 rounded-lg shadow-lg bg-white flex flex-col items-center">
            <img
              className="w-1/2 rounded-lg"
              src="https://www.lego.com/cdn/cs/set/assets/blt56892bcc5f4fb152/45002.jpg?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
              alt=""
            />
            <h2 className="text-[#181D4E] font-bold text-lg">Tech Machines</h2>
            <div className="">
              <p className="text-[#646672] text-center text-lg">Price : $20</p>
              <p className="flex text-[#646672] text-center text-lg">
                <span>Rating 4.5</span> {"  "}
                <DynamicStar
                  height={15}
                  width={15}
                  className="border-2 inline"
                  rating={4}
                />
              </p>
            </div>
            <button className='bg-[#12AEE0] py-3 w-full px-5 text-white rounded-full hover:bg-[#12ace077]'>View Details</button>
          </div>
          <div className="w-[300px] p-4 rounded-lg shadow-lg bg-white flex flex-col items-center">
            <img
              className="w-1/2 rounded-lg"
              src="https://www.lego.com/cdn/cs/set/assets/blt56892bcc5f4fb152/45002.jpg?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
              alt=""
            />
            <h2 className="text-[#181D4E] font-bold text-lg">Tech Machines</h2>
            <div className="">
              <p className="text-[#646672] text-center text-lg">Price : $20</p>
              <p className="flex text-[#646672] text-center text-lg">
                <span>Rating 4.5</span> {"  "}
                <DynamicStar
                  height={15}
                  width={15}
                  className="border-2 inline"
                  rating={4}
                />
              </p>
            </div>
            <button className='bg-[#12AEE0] py-3 w-full px-5 text-white rounded-full hover:bg-[#12ace077]'>View Details</button>
          </div>
          <div className="w-[300px] p-4 rounded-lg shadow-lg bg-white flex flex-col items-center">
            <img
              className="w-1/2 rounded-lg"
              src="https://www.lego.com/cdn/cs/set/assets/blt56892bcc5f4fb152/45002.jpg?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
              alt=""
            />
            <h2 className="text-[#181D4E] font-bold text-lg">Tech Machines</h2>
            <div className="">
              <p className="text-[#646672] text-center text-lg">Price : $20</p>
              <p className="flex text-[#646672] text-center text-lg">
                <span>Rating 4.5</span> {"  "}
                <DynamicStar
                  height={15}
                  width={15}
                  className="border-2 inline"
                  rating={4}
                />
              </p>
            </div>
            <button className='bg-[#12AEE0] py-3 w-full px-5 text-white rounded-full hover:bg-[#12ace077]'>View Details</button>
          </div>
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-3 gap-4">
          <div className="w-[300px] p-4 rounded-lg shadow-lg bg-white flex flex-col items-center">
            <img
              className="w-1/2 rounded-lg"
              src="https://www.lego.com/cdn/cs/set/assets/blt56892bcc5f4fb152/45002.jpg?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
              alt=""
            />
            <h2 className="text-[#181D4E] font-bold text-lg">Tech Machines</h2>
            <div className="">
              <p className="text-[#646672] text-center text-lg">Price : $20</p>
              <p className="flex text-[#646672] text-center text-lg">
                <span>Rating 4.5</span> {"  "}
                <DynamicStar
                  height={15}
                  width={15}
                  className="border-2 inline"
                  rating={4}
                />
              </p>
            </div>
            <button className='bg-[#12AEE0] py-3 w-full px-5 text-white rounded-full hover:bg-[#12ace077]'>View Details</button>
          </div>
          <div className="w-[300px] p-4 rounded-lg shadow-lg bg-white flex flex-col items-center">
            <img
              className="w-1/2 rounded-lg"
              src="https://www.lego.com/cdn/cs/set/assets/blt56892bcc5f4fb152/45002.jpg?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
              alt=""
            />
            <h2 className="text-[#181D4E] font-bold text-lg">Tech Machines</h2>
            <div className="">
              <p className="text-[#646672] text-center text-lg">Price : $20</p>
              <p className="flex text-[#646672] text-center text-lg">
                <span>Rating 4.5</span> {"  "}
                <DynamicStar
                  height={15}
                  width={15}
                  className="border-2 inline"
                  rating={4}
                />
              </p>
            </div>
            <button className='bg-[#12AEE0] py-3 w-full px-5 text-white rounded-full hover:bg-[#12ace077]'>View Details</button>
          </div>
          <div className="w-[300px] p-4 rounded-lg shadow-lg bg-white flex flex-col items-center">
            <img
              className="w-1/2 rounded-lg"
              src="https://www.lego.com/cdn/cs/set/assets/blt56892bcc5f4fb152/45002.jpg?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
              alt=""
            />
            <h2 className="text-[#181D4E] font-bold text-lg">Tech Machines</h2>
            <div className="">
              <p className="text-[#646672] text-center text-lg">Price : $20</p>
              <p className="flex text-[#646672] text-center text-lg">
                <span>Rating 4.5</span> {"  "}
                <DynamicStar
                  height={15}
                  width={15}
                  className="border-2 inline"
                  rating={4}
                />
              </p>
            </div>
            <button className='bg-[#12AEE0] py-3 w-full px-5 text-white rounded-full hover:bg-[#12ace077]'>View Details</button>
          </div>
          <div className="w-[300px] p-4 rounded-lg shadow-lg bg-white flex flex-col items-center">
            <img
              className="w-1/2 rounded-lg"
              src="https://www.lego.com/cdn/cs/set/assets/blt56892bcc5f4fb152/45002.jpg?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1"
              alt=""
            />
            <h2 className="text-[#181D4E] font-bold text-lg">Tech Machines</h2>
            <div className="">
              <p className="text-[#646672] text-center text-lg">Price : $20</p>
              <p className="flex text-[#646672] text-center text-lg">
                <span>Rating 4.5</span> {"  "}
                <DynamicStar
                  height={15}
                  width={15}
                  className="border-2 inline"
                  rating={4}
                />
              </p>
            </div>
            <button className='bg-[#12AEE0] py-3 w-full px-5 text-white rounded-full hover:bg-[#12ace077]'>View Details</button>
          </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
