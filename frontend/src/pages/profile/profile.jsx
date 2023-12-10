import React from 'react';
import { Link } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs';
import { FaAddressCard, FaOilCan } from 'react-icons/fa';
import { MdLogout, MdOutlineFavorite } from 'react-icons/md';
export const Profile = () => {
    return (
        <nav>
          <ul className=' flex flex-col p-4 text-gray-900'>
            <li className='text-xl py-4 flex'>
              <BsPerson size={20} className='mr-4 text-white bg-black rounded-full' />
              <Link to='/personal-info'>Personal Information</Link>
            </li>
            <li className='text-xl py-4 flex'>
              <MdOutlineFavorite size={20} className='mr-4 text-white bg-black rounded-full' />
              <Link to='/WishlistPage'>Wishlist</Link>
            </li>
            <li className='text-xl py-4 flex'>
              <FaAddressCard size={20} className='mr-4 text-white bg-black rounded-full' />
              <Link to='/addresses'>My Addresses</Link>
            </li>
            <li className='text-xl py-4 flex'>
              <FaOilCan size={20} className='mr-4 text-white bg-black rounded-full' />
              < Link to='/OrdersPage'>My Orders</Link>
            </li>
            <li className='text-xl py-4 flex'>
            <MdLogout size={20} className='mr-4 text-white bg-black rounded-full' />
            <Link to='/logout'>LOGOUT</Link>
            </li>
          </ul>
        </nav>
    );
      };
