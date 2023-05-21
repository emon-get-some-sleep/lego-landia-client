import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate('');
    const toyInfo = useLoaderData();
    const {_id, picture, availableQuantity, rating, price, toyName, description, sellerEmail, sellerName, subCategory} = toyInfo;
    // console.log(subCategory);
    const handleUpdatingToys = (event) => {
        event.preventDefault();

        const form = event.target;
        const toyName = form.name.value;
        const sellerName = form.name.value;
        const picture = form.photo.value;
        const sellerEmail = form.email.value;
        const price = form.price.value;
        const availableQuantity = form.quantity.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const subCategory = form.subcategory.value;
        const newToy = {toyName, sellerName, sellerEmail, price, availableQuantity, description, picture, rating, subCategory};
        // console.log(newToy);
        fetch(`http://localhost:5000/update/${_id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => {
          // console.log(data);
          if(data.modifiedCount > 0){
            Swal.fire(
              'Updated Successfully!',
              'Thank You',
              'success'
            )
            navigate('/mytoys')
          }
        })
    }
    return (
        <div className="h-auto  md:py-[40px] flex items-center justify-center bg-[#757F9A]">

      <div className="w-full md:w-[500px] ">
        <h2 className="font-bold text-center text-base md:text-[32px] text-white my-[50px]">UPDATE THE PRODUCT</h2>
        <form onSubmit={handleUpdatingToys} className="">
          <div className="relative my-[20px]">
            <label className="absolute  -top-[60%] font-bold text-lg">
              Name
            </label>
            <input
              className="h-[50px] pl-3 w-full border-none outline-none font-semibold rounded-lg"
              type="text"
              placeholder="Toy Name"
              defaultValue={toyName}
              name="name" required
            />
          </div>
          <div className="relative my-[50px]">
            <label className="absolute  -top-[60%] font-bold text-lg">
              PhotURL
            </label>
            <input
              className="h-[50px] pl-3 w-full border-none outline-none font-semibold rounded-lg"
              type="text"
              placeholder="Photo URL"
              name="photo"
              required
              defaultValue={picture}
            />
          </div>
          <div className="relative my-[50px]">
            <label className="absolute  -top-[60%] font-bold text-lg">
              Seller Name
            </label>
            <input
              className="h-[50px] pl-3 w-full border-none outline-none font-semibold rounded-lg"
              type="text"
              placeholder="Seller Name"
              name="seller"
              defaultValue={user?.displayName}
              required
            />
          </div>
          <div className="relative my-[50px] flex gap-3">
            <div className="flex-1">
            <label className="absolute  -top-[60%] font-bold text-lg">
              Price
            </label>
            <input
              className="h-[50px] pl-3 w-full border-none outline-none font-semibold rounded-lg"
              type="text"
              placeholder="Price"
              name="price"
              required
              defaultValue={price}
            />
            </div>
            <div className="flex-1">
            <label className="absolute  -top-[60%] font-bold text-lg">
              Rating
            </label>
            <input
              className="h-[50px] pl-3 w-full border-none outline-none font-semibold rounded-lg"
              type="text"
              placeholder="Rating"
              name="rating"
              defaultValue={rating}
              required
            />
            </div>
          </div>
          <div className="relative my-[50px]">
            <label className="absolute  -top-[60%] font-bold text-lg">
              Seller Email
            </label>
            <input
              className="h-[50px] pl-3 w-full border-none outline-none font-semibold rounded-lg"
              type="email"
              placeholder="Seller Email"
              
              defaultValue={user?.email}
              name="email"
              required
            />
          </div>
          <div className="relative my-[50px] flex  gap-3">
            <div className="flex-1">
            <label className="absolute  -top-[60%] font-bold text-lg">
              Available Quantity
            </label>
            <input
              className="h-[50px] pl-3 w-full border-none outline-none font-semibold rounded-lg"
              type="text"
              placeholder="Quantity"
              name="quantity"
              defaultValue={availableQuantity}
              required
            />
            </div>
            <select defaultValue={subCategory}  name="subcategory" className="rounded-lg flex-1 px-2 font-semibold" required>
              <option defaultValue="" disabled>
                Select Sub Category
              </option>
              <option className="font-semibold py-2" value="educational">Educational</option>
              <option className="font-semibold py-2" value="recreational">Recreational</option>
              <option className="font-semibold py-2" value="productive">Productive</option>
              <option className="font-semibold py-2" value="exploration">Exploration</option>
            </select>
          </div>
          <div className="relative mt-[50px] mb-[20px]">
            <label className="absolute  -top-[15%] font-bold text-lg">
              Description
            </label>
            <textarea
              className="h-[200px] p-4 w-full border-none outline-none font-semibold rounded-lg"
              type="text"
              placeholder="Toy Description"
              name="description"
              defaultValue={description}
              required
            />
          </div>
          <div>
          <input
              className="w-full h-[40px] rounded-lg my-4 bg-white border-none outline-none font-bold cursor-pointer"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
    );
};

export default UpdateToy;