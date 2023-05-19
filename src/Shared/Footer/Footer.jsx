import React from 'react';
import { Link } from 'react-router-dom';
import { FaBeer, FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#182352] flex items-center py-5 justify-center flex-col h-[60vh] mt-[60px]'>
            <div>
            <h2 className='text-[44px] text-white font-bold'>Lego Landia</h2>
            </div>
            <div className='flex items-center gap-4 mt-8'>
                <Link className='text-[#F5F6F7] hover:underline hover:text-gray-400' to='/'>Home</Link>
                <Link className='text-[#F5F6F7] hover:underline hover:text-gray-400' to='/services'>Services</Link>
                <Link className='text-[#F5F6F7] hover:underline hover:text-gray-400' to='/about'>About Us</Link>
                <Link className='text-[#F5F6F7] hover:underline hover:text-gray-400' to='/shop'>Shop</Link>
                <Link className='text-[#F5F6F7] hover:underline hover:text-gray-400' to='/contacts'>Contacts</Link>
            </div>
            <div className='flex items-center gap-4 mt-8'>
                <Link className='border rounded-full p-2'>
                    <FaFacebookF className='text-white' />
                </Link>
                <Link className='border rounded-full p-2'>
                    <FaTwitter className='text-white' />
                </Link>
                <Link className='border rounded-full p-2'>
                    <FaLinkedinIn className='text-white' />
                </Link>
                <Link className='border rounded-full p-2'>
                    <FaInstagram className='text-white' />
                </Link>
            </div>
            <div className='mt-auto mb-3 border-t-[.5px] w-[80%] mx-auto'>
                <span></span>
                <p className='text-[10px] text-center pt-[20px] text-[#D0D3DC]'>Lego Landia © 2023. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;