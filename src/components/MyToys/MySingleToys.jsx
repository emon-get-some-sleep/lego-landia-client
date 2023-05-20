import React from 'react';
import { useNavigate } from 'react-router-dom';

const MySingleToys = ({toy}) => {
    const {_id, picture, availableQuantity, rating, price, toyName, description, sellerEmail, sellerName, subCategory} = toy;
    const navigate = useNavigate();
    const showDetail = id => {
        navigate(`/viewdetails/${id}`)
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
          <button onClick={() => showDetail(_id)} className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    );
};

export default MySingleToys;