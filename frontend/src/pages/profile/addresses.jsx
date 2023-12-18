import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

  const formContainerStyle = {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    background: '#fff',
    marginTop: '20px',
  };

  const headingStyle = {
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
    <div style={formContainerStyle}>
      <h1 style={headingStyle}>Add Address</h1>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>Home Number</label>
        <input
          type="text"
          name="homeNumber"
          placeholder="G-47"
          style={inputStyle}
          value={address.homeNumber}
          onChange={handleChange}
        />

        <label style={labelStyle}>Floor and Block</label>
        <input
          type="text"
          name="floorandblock"
          placeholder="Floor 1, Block A"
          style={inputStyle}
          value={address.floorandblock}
          onChange={handleChange}
        />

        <label style={labelStyle}>Colony Name</label>
        <input
          type="text"
          name="colony"
          placeholder="Colony Name"
          style={inputStyle}
          value={address.colony}
          onChange={handleChange}
        />

        <label style={labelStyle}>Apartment/House Name</label>
        <input
          type="text"
          name="apartmenthouseName"
          placeholder="Apartment/House Name"
          style={inputStyle}
          value={address.apartmenthouseName}
          onChange={handleChange}
        />

        <label style={labelStyle}>Area</label>
        <input
          type="text"
          name="area"
          placeholder="Area"
          style={inputStyle}
          value={address.area}
          onChange={handleChange}
        />

        <label style={labelStyle}>City</label>
        <input
          type="text"
          name="city"
          placeholder="City"
          style={inputStyle}
          value={address.city}
          onChange={handleChange}
        />

        <label style={labelStyle}>State</label>
        <input
          type="text"
          name="state"
          placeholder="State"
          style={inputStyle}
          value={address.state}
          onChange={handleChange}
        />

        <label style={labelStyle}>Pincode</label>
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          style={inputStyle}
          value={address.pincode}
          onChange={handleChange}
        />

        <button className="btn btn-outline btn-warning" style={buttonStyle}>
          SAVE
        </button>
      </form>
    </div>
  );
};
