import React from 'react';
import { Link } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs';
import { FaAddressCard, FaOilCan } from 'react-icons/fa';
import { MdOutlineFavorite } from 'react-icons/md';

export const Profile = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="card-container">
        <ProfileItem icon={<BsPerson size={20} />} to='/personal-info'>
       <li><Link to="/personal-info">Personal Information</Link></li>
        </ProfileItem>
        <ProfileItem icon={<MdOutlineFavorite size={20} />} to='/wishlist'>
          <li><Link to="/wishlist">Wishlist</Link></li>
        </ProfileItem>
        <ProfileItem icon={<FaAddressCard size={20} />} to='/addresses.jsx'>
          <li><Link to="/addresses">My Addresses</Link></li>
        </ProfileItem>
        <ProfileItem icon={<FaOilCan size={20} />} to='/orders'>
        <li><Link to="/orders">My Orders</Link></li>
        </ProfileItem>
      </div>
    </div>
  );
};

const ProfileItem = ({ icon, to, children }) => {
  return (
    <div className="card p-6 m-4 text-center">
      <div className='mb-4 text-white bg-black rounded-full inline-flex items-center justify-center p-2'>
        {icon}
      </div>
      <Link to={to} className="text-xl">{children}</Link>
    </div>
  );
};
