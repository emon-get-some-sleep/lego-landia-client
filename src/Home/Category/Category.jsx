import React, { useEffect, useState } from "react";
import { DynamicStar } from "react-dynamic-star";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SingleDetail from "./SingleDetail";

const Category = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:5000/toys?category=educational')
    .then(res => res.json())
    .then(data => setData(data))
  }, [])

  // console.log(data);

  const fetchEducational = (query) => {
   
      fetch(`http://localhost:5000/toys?category=${query}`)
      .then(res => res.json())
      .then(data => setData(data))
    
  }
  // console.log(data);
  return (
    <div>
      <h3 className="text-center font-bold text-2xl">Categories</h3>
      <Tabs>
        <TabList>
          <div className="cursor-pointer flex justify-between bg-gradient-to-r from-[#7474BF] to-[#348AC7] p-4 text-white">
            <Tab onClick={() => fetchEducational('educational')} className="bg-[#12AEE0] font-bold text-white px-8 py-3 rounded-lg">
              Educational
            </Tab>
            <Tab onClick={() => fetchEducational('recreational')}  className="bg-[#12AEE0] font-bold text-white px-8 py-3 rounded-lg">
              Recrational
            </Tab>
            <Tab  onClick={() => fetchEducational('productive')}  className="bg-[#12AEE0] font-bold text-white px-8 py-3 rounded-lg">
              Productive
            </Tab>
            <Tab  onClick={() => fetchEducational('exploration')}  className="bg-[#12AEE0] font-bold text-white px-8 py-3 rounded-lg">
              Exploration
            </Tab>
          </div>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-3 gap-4">
            
           {
            data.map(each => <SingleDetail key={each._id} each={each}></SingleDetail>)
           }
            
            
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-4">
           
            
            
          {
            data.map(each => <SingleDetail key={each._id} each={each}></SingleDetail>)
           }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-4">
            
           
            
          {
            data.map(each => <SingleDetail key={each._id} each={each}></SingleDetail>)
           }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-4">
           
            
            
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
