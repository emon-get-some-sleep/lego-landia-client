import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const MySingleToys = ({toy, toys, setToys}) => {
    const {_id, picture, availableQuantity, rating, price, toyName, description, sellerEmail, sellerName, subCategory} = toy;
    const navigate = useNavigate();
    const updateRoute = (id) => {
        navigate(`/update/${id}`)
    }
    const handleDelete = id => {
      Swal.fire({
        title: 'Are you sure you want to delete this?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://lego-landia-server-emon-get-some-sleep.vercel.app/delete/${id}`, {
          method: 'DELETE',
          
        })
        .then(res => res.json())
        .then(data => {
          // console.log(data);
          if(data.deletedCount > 0){
            Swal.fire(
              'Deleted!',
              'This Toy has been deleted successfully',
              'success'
            )
            const remainingToys = toys.filter(toy => toy._id !== id);
            setToys(remainingToys);
          }
        })
        }
      })
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
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
        </th>
      </tr>
    );
};

export default MySingleToys;