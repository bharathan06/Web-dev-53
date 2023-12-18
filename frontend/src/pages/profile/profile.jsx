import React from 'react';
import { Link } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs';
import { FaAddressCard, FaOilCan } from 'react-icons/fa';
import { MdOutlineFavorite } from 'react-icons/md';

export const Profile = () => {
  const cardsData = [
    {
      id: 1,
      title: 'Personal Information',
      icon: <BsPerson size={30} />,
      to: '/personal-info',
    },
    {
      id: 2,
      title: 'Wishlist',
      icon: <MdOutlineFavorite size={30} />,
      to: '/wishlist',
    },
    {
      id: 3,
      title: 'My Addresses',
      icon: <FaAddressCard size={30} />,
      to: '/addresses',
    },
    {
      id: 4,
      title: 'My Orders',
      icon: <FaOilCan size={30} />,
      to: '/orders',
    },
  ];

  const ProfileItem = ({ icon, to, title }) => {
    const cardStyle = {
      width: '300px',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
      background: '#FCF75E',
      marginBottom: '20px',
      marginRight: '40px',
      color: 'black',
    };

    const cardContentStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    };

    const cardIconStyle = {
      fontSize: '30px',
      marginBottom: '10px',
    };

    const cardLinkStyle = {
      textDecoration: 'none',
      color: 'black',
      fontWeight: 'bold',
      cursor: 'pointer',
    };

    return (
      <div style={cardStyle}>
        <div style={cardContentStyle}>
          <div style={cardIconStyle}>{icon}</div>
          <h2>{title}</h2>
          <Link to={to} style={cardLinkStyle}>
            View Details
          </Link>
        </div>
      </div>
    );
  };

  const pageStyle = {
    color: '#000',
    minHeight: '100vh',
    padding: '50px 0',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const cardContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: '20px',
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Profile</h1>

      <div style={cardContainerStyle}>
        <div style={rowStyle}>
          {cardsData.slice(0, 2).map((card) => (
            <div key={card.id}>
              <ProfileItem {...card} />
            </div>
          ))}
        </div>
        <div style={rowStyle}>
          {cardsData.slice(2).map((card) => (
            <div key={card.id}>
              <ProfileItem {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
