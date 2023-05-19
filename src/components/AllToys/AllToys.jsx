import React from "react";

const AllToys = () => {
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              {/* <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th> */}
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Price</th>
              <th>Sub-category</th>
              <th>Available Quantity</th>
              
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                Emon Hoque
              </th>
              <td>
                Technician Machine
              </td>
              <td>
                $ 20
              </td>
              <td>Educational</td>
              <td>
                30
              </td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
           
            
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default AllToys;
