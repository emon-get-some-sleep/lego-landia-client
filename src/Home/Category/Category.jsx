import React, { useEffect, useState } from "react";
import { DynamicStar } from "react-dynamic-star";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SingleDetail from "./SingleDetail";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Category = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    AOS.init();
  }, []);

  
  // default loading will show the educational data only 
  useEffect(() => {
    fetch('https://lego-landia-server-emon-get-some-sleep.vercel.app/toys?category=educational')
    .then(res => res.json())
    .then(data => setData(data))
  }, [])

  // console.log(data);

  const fetchEducational = (query) => {
   
      fetch(`https://lego-landia-server-emon-get-some-sleep.vercel.app/toys?category=${query}`)
      .then(res => res.json())
      .then(data => setData(data))
    
  }
  // console.log(data);
  return (
    <div className="my-[80px]">
      <h3 className="text-center font-bold text-4xl my-[40px]">Categories</h3>
      <Tabs>
        <TabList  data-aos="fade-left" data-aos-duration="500" data-aos-delay="1000">
          <div className="cursor-pointer grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] bg-gradient-to-r from-[#7474BF] to-[#348AC7] p-4 text-white">
            <Tab onClick={() => fetchEducational('educational')} className="bg-[#12AEE0] hover:bg-[#0c6e8e] font-bold text-white px-8 py-3 rounded-lg">
              Educational
            </Tab>
            <Tab onClick={() => fetchEducational('recreational')}  className="bg-[#12AEE0] font-bold text-white px-8  hover:bg-[#0c6e8e] py-3 rounded-lg">
              Recrational
            </Tab>
            <Tab  onClick={() => fetchEducational('productive')}  className="bg-[#12AEE0] font-bold text-white px-8 py-3  hover:bg-[#0c6e8e] rounded-lg">
              Productive
            </Tab>
            <Tab  onClick={() => fetchEducational('exploration')}  className="bg-[#12AEE0] font-bold text-white px-8  hover:bg-[#0c6e8e] py-3 rounded-lg">
              Exploration
            </Tab>
          </div>
        </TabList>

        <TabPanel>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            
           {
            data.map(each => <SingleDetail key={each._id} each={each}></SingleDetail>)
           }
            
            
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
           
            
            
          {
            data.map(each => <SingleDetail key={each._id} each={each}></SingleDetail>)
           }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            
           
            
          {
            data.map(each => <SingleDetail key={each._id} each={each}></SingleDetail>)
           }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
           
            
            
          {
            data.map(each => <SingleDetail key={each._id} each={each}></SingleDetail>)
           }
          </div>
        </TabPanel>
        
      </Tabs>
    </div>
  );
};

export default Category;
