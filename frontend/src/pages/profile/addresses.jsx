import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

export const Addresses = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    homeNumber: '',
    floor: '',
    block: '',
    colony: '',
    apartmentName: '',
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
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          background: 'yellow',
          display: 'inline-block',
          padding: '0.5rem 1rem',
          borderRadius: '5px',
        }}
      >
        Add Address
      </h1>
      <form onSubmit={handleSubmit}>
    <div>
        <label>
          Home Number:
          <input
            type="text"
            name="homeNumber"
            value={address.homeNumber}
            onChange={handleChange}
            style={{ marginBottom: '10px' }}
          />
        </label>
        </div>


        <div>
        <label>
          Floor and Block:
          <input
            type="text"
            name="floorandblock"
            value={address.floorandblock}
            onChange={handleChange}
            style={{ marginBottom: '10px' }}
          />
        </label>
        </div>


        <div>
        <label>
          Colony Name:
          <input
            type="text"
            name="colony"
            value={address.colony}
            onChange={handleChange}
            style={{ marginBottom: '10px' }}
          />
        </label>
        </div>


        <div>
        <label>
          Apartment/House Name:
          <input
            type="text"
            name="apartmenthouseName"
            value={address.apartmenthouseName}
            onChange={handleChange}
            style={{ marginBottom: '10px' }}
          />
        </label>
        </div>


        <div>
        <label>
          Area:
          <input
            type="text"
            name="area"
            value={address. area}
            onChange={handleChange}
            style={{ marginBottom: '10px' }}
          />
        </label>
        </div>


        <div>
        <label>
          City :
          <input
            type="text"
            name="city"
            value={address.city}
            onChange={handleChange}
            style={{ marginBottom: '10px' }}
          />
        </label>
        </div>


        <div>
        <label>
          State:
          <input
            type="text"
            name="state"
            value={address.state}
            onChange={handleChange}
            style={{ marginBottom: '10px' }}
          />
        </label>
        </div>


        <div>
        <label>
          Pincode:
          <input
            type="text"
            name="pincode"
            value={address.pincode}
            onChange={handleChange}
            style={{ marginBottom: '8px' }}
          />
        </label>
        </div>


        <br />
        <button type="submit" style={{ background: 'red', color: 'white', padding: '0.5rem 1rem', borderRadius: '5px', marginRight: '8px' }}>
          Save Address
        </button>

        <button
    type="button"
    onClick={() => navigate('/')}
    style={{ background: 'blue', color: 'white', padding: '0.5rem 1rem', borderRadius: '5px' }}
  >
    Go Home
  </button>
      </form>
    </div>
  );
};
