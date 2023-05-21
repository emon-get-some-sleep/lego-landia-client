import React, { useEffect, useState } from "react";
import TableData from "./TableData";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  // console.log(toys);

  const searchResult = (event) => {
    event.preventDefault();
    
    const form = event.target;
    const searchText = form.search.value;
    fetch(`http://localhost:5000/findtoys/${searchText}`)
    .then((res) => res.json())
    .then((data) => setToys(data));
  };
  return (
    <div>
      <div className="flex items-center w-full justify-center bg-slate-500">
        <form onSubmit={searchResult} className="w-full">
          <div className="relative w-full flex flex-col items-center my-[40px]">
            <label className="absolute  -top-[60%] font-bold text-lg">
              Search Product By Name
            </label>
            <div className="w-full flex items-center justify-center gap-3">
              <input
                className="h-[50px] pl-3 w-1/2  border-none outline-none font-semibold rounded-lg"
                type="text"
                placeholder="Search"
                name="search"
                required
              />
              {/* <button className="bg-[#12AEE0] text-sm h-[50px] md:text-xl border px-8 py-3 hover:bg-[#164f62] hover:text-white font-semibold  rounded-lg">
                Search
              </button> */}
              <input
              className="bg-[#12AEE0] text-sm h-[50px] md:text-xl border px-8 py-3 hover:bg-[#164f62] hover:text-white font-semibold  rounded-lg"
              type="submit"
              value="Search"
            />
            </div>
          </div>
        </form>
      </div>
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

            {toys.map((toy, index) => (
              <TableData key={index} toy={toy}></TableData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
