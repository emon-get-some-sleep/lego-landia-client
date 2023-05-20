import React, { useEffect, useState } from "react";
import TableData from "./TableData";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/alltoys')
    .then(res => res.json())
    .then(data => setToys(data))
  }, [])
  // console.log(toys);
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead className="text-green-500">
            <tr className="">
            
              <th className="">Seller</th>
              <th>Toy Name</th>
              <th>Price</th>
              <th>Sub-category</th>
              <th>Available Quantity</th>
              
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

           {
            toys.map((toy, index) => <TableData key={index} toy={toy}></TableData>)
           }
           
            
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default AllToys;
