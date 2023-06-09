import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MySingleToys from "./MySingleToys";
import { Helmet } from "react-helmet-async";


const MyToys = () => {
    const [toys, setToys] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
      fetch(`https://lego-landia-server-emon-get-some-sleep.vercel.app/mytoys?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setToys(data))
    }, [user])
    // useEffect(() => {
    //   async() => {
    //     const res = await fetch(`https://lego-landia-server-emon-get-some-sleep.vercel.app/mytoys?email=${user?.email}`);
    //     const data = await res.json();
    //     setToys(data);
    //   }
    // }, [user])
    // console.log(toys);
    
  return (
    <div>
      <Helmet>
        <title>Lego Landia | My Toys</title>
      </Helmet>
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

              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {
            toys.map((toy, index) => <MySingleToys toys={toys} setToys={setToys} key={index} toy={toy}></MySingleToys>)
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
