import React from 'react';
import { MdLogout } from 'react-icons/md';
export const Logout = () => {
    return (
        <nav>
          <ul className=' flex flex-col p-4 text-gray-900'>
            <li className='text-xl py-4 flex'>
              <MdLogout size={20} className='mr-4 text-white bg-black rounded-full' />
              <Link to='/logout.jsx'>LOGOUT</Link>
            </li>
          </ul>
        </nav>
    );
      };


