import React from 'react';
import { useNavigate } from 'react-router-dom';

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

  return (
    <div className="flex items-center justify-center mt-16">
      <div className="card w-96 bg- bg- bg-yellow-100 text-black mb-16 border border-solid border-black">
        <div className="card-body items-center text-center">
          <h2 className="card-title">LOGOUT</h2>
          <p>Are you sure you want to LOGOUT?</p>
          <div className="card-actions justify-end">
            <button
              className="btn bg-dark bg-yellow-400 text-black mr-4"
              onClick={() => handleLogout(true)}
            >
              Accept
            </button>
            <button
              className="btn bg-dark bg-yellow-500 text-black"
              onClick={() => handleLogout(false)}
            >
              Deny
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
