import React from 'react';
import { useNavigate } from 'react-router-dom';

const MySingleToys = ({toy}) => {
    const {_id, picture, availableQuantity, rating, price, toyName, description, sellerEmail, sellerName, subCategory} = toy;
    const navigate = useNavigate();
    const updateRoute = (id) => {
        navigate(`/update/${id}`)
    }
    return (
        <tr>
        <th data-label="S.No">
          {sellerName}
        </th>
        <td>
          {toyName}
        </td>
        <td>
          $ {price}
        </td>
        <td>{subCategory}</td>
        <td>
          {availableQuantity}
        </td>
        <th>
          <button onClick={() => updateRoute(_id)} className="btn btn-ghost btn-xs">Update</button>
        </th>
        <th>
          <button onClick={() => updateRoute()} className="btn btn-ghost btn-xs">Delete</button>
        </th>
      </tr>
    );
};

export default MySingleToys;