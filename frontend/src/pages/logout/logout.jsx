import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
   
    console.log('Logging out...');

    navigate('/');
  };

  return (
    <nav>
      <ul className='flex flex-col items-center p-4 text-gray-900'>
        <li className='text-xl py-4 flex items-center'>
         
          <button
            onClick={handleLogout}
            className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'
          >
            LOGOUT
          </button>
        </li>
      </ul>
    </nav>
  );
};

