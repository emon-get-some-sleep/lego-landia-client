import React from 'react';

const TableData = ({toy}) => {
    const {_id, picture, availableQuantity, rating, price, toyName, description, sellerEmail, sellerName, subCategory} = toy;
    return (
        <tr>
        <th>
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
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    );
};

export default TableData;