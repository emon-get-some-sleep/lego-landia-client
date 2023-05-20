import React from "react";

const AddToy = () => {
    // "picture": "https://www.lego.com/cdn/cs/set/assets/blt2f3b7ee4dca83409/31090.jpg?format=webply&fit=bounds&quality=100&width=320&height=320&dpr=1",
    // "toyName": "Coding Robots",
    // "sellerName": "CodeBricks",
    // "sellerEmail": "info@codebricks.com",
    // "price": 59.99,
    // "rating": 4.4,
    // "availableQuantity": 10,
    // "description": "Learn coding and robotics with the Coding Robots set, allowing kids to program and control their own robot creations.",
    // "subCategory": "educational"
    const handleAddingToys = (event) => {
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
        const newToy = {toyName, sellerName, sellerEmail, price, availableQuantity, description, picture, rating,subCategory};
        console.log(newToy);
        fetch('http://localhost:5000/newtoy', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
    }
  return (
    <div className="h-auto py-[40px] flex items-center justify-center bg-[#2BC0E4]">

      <div className="w-[500px] ">
        <h2 className="font-bold text-center text-[32px] text-white my-[50px]">ADD A PRODUCT</h2>
        <form onSubmit={handleAddingToys} className="">
          <div className="relative my-[20px]">
            <label className="absolute  -top-[60%] font-bold text-lg">
              Name
            </label>
            <input
              className="h-[50px] pl-3 w-full border-none outline-none font-semibold rounded-lg"
              type="text"
              placeholder="Toy Name"
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
              name="email"
              required
            />
          </div>
          <div className="relative my-[50px] flex gap-3">
            <div className="flex-1">
            <label className="absolute  -top-[60%] font-bold text-lg">
              Available Quantity
            </label>
            <input
              className="h-[50px] pl-3 w-full border-none outline-none font-semibold rounded-lg"
              type="text"
              placeholder="Quantity"
              name="quantity"
              required
            />
            </div>
            <select name="subcategory" className="rounded-lg px-2 font-semibold" required>
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
              required
            />
          </div>
          <div>
          <input
              className="w-full h-[40px] rounded-[40px] bg-white border-none outline-none font-bold cursor-pointer"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToy;