import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import backgroundImage from '../../assets/ghg.jpeg';

export const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = (accepted) => {
    console.log('Logging out...');

    if (accepted) {
      navigate('/');
    } else {
      navigate('/profile');
    }
  };

  const pageStyle = {
    minHeight: '100vh',
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.6)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={pageStyle}>
      <div className="card w-96 bg-yellow-100 text-black mb-16 border border-solid border-black">
        <div className="card-body items-center text-center">
          <h2 className="card-title">LOGOUT</h2>
          <p>Are you sure you want to LOGOUT?</p>
          <div className="card-actions justify-end flex items-center">
            <button
              className="btn bg-amber-300 text-black mr-4 flex items-center"
              onClick={() => handleLogout(true)}
            >
              <FaSignOutAlt className="mr-2" /> Accept
            </button>
            <button
              className="btn bg-red-400 text-black flex items-center"
              onClick={() => handleLogout(false)}
            >
              <FaSignOutAlt className="mr-2" /> Deny
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
