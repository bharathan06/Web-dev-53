import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaBuilding, FaCity, FaMapMarkedAlt, FaMapPin, FaSave } from 'react-icons/fa';
import backgroundImage from '../../assets/oii.jpg';

export const Addresses = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    homeNumber: '',
    floorandblock: '',
    colony: '',
    apartmenthouseName: '',
    area: '',
    city: '',
    state: '',
    pincode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  const pageStyle = {
    minHeight: '100vh',
    background: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 1.5)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  const formContainerStyle = {
    width: '90%', // Adjusted for responsiveness
    maxWidth: '500px',
    margin: 'auto',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
    background: 'rgba(255, 255, 255, 0.6)',
    marginTop: '20px',
    height: 'auto',
  };

  const headingStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333',
    fontFamily: 'Times New Roman, Times, serif',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const labelStyle = {
    display: 'block',
    margin: '10px 0',
    color: '#555',
    fontSize: '1rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    marginBottom: '20px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    background: '#FFD700',
    color: 'black',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={pageStyle}>
      <div style={formContainerStyle}>
        <h1 style={headingStyle}><FaMapMarkedAlt style={{ marginRight: '10px' }} /> Add Address</h1>
        <form onSubmit={handleSubmit}>
          <label style={labelStyle}><FaHome /> Home Number</label>
          <input
            type="text"
            name="homeNumber"
            placeholder="G-47"
            style={inputStyle}
            value={address.homeNumber}
            onChange={handleChange}
          />
          <label style={labelStyle}><FaBuilding /> Floor and Block</label>
          <input
            type="text"
            name="floorandblock"
            placeholder="Floor 1, Block A"
            style={inputStyle}
            value={address.floorandblock}
            onChange={handleChange}
          />
          <label style={labelStyle}><FaCity /> City</label>
          <input
            type="text"
            name="city"
            placeholder="City"
            style={inputStyle}
            value={address.city}
            onChange={handleChange}
          />
          <label style={labelStyle}><FaMapPin /> Pincode</label>
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            style={inputStyle}
            value={address.pincode}
            onChange={handleChange}
          />
          <button className="btn btn-outline btn-warning" style={buttonStyle}>
            <FaSave /> SAVE
          </button>
        </form>
      </div>
    </div>
  );
};
