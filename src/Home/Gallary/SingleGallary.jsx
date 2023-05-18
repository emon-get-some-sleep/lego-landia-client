import React from 'react';

const SingleGallary = () => {
    return (
        <div className='card-container w-[320px] h-[500px] overflow-hidden rounded-[20px] border-[8px] border-blue-600 relative'>
            <img className='w-full h-full object-cover rounded-2xl' src="https://dispatch.barnesandnoble.com/content/dam/ccr/h/worldoflego/01012023/25631_LEGO_PCS_1-3_City_01-01.jpg" alt="" />
            <div id="card-description" className="card-description w-full h-full top-0 -right-[100%] duration-1000 absolute bg-[#181d4e25] backdrop-blur-sm rounded-2xl p-4 flex flex-col justify-center">
                <h3 className='text-white font-semibold mx-auto text-4xl  my-5'>Lego City : Miniature</h3>
                <p className='text-white font-medium'>Construct your very own city with us. A fun way to learn city architecture</p>
                <button className='bg-[#12AEE0] w-1/2 py-3 px-5 text-white rounded-lg mt-3 hover:bg-[#12ace077]'>View Details</button>

            </div>
        </div>
    );
};

export default SingleGallary;