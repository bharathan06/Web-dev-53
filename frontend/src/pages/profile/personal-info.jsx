import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/mmm.jpeg';
import { FaUser, FaBirthdayCake, FaVenusMars, FaEnvelope, FaPhone } from 'react-icons/fa';

export const PersonalInfo = () => {
  const [formData, setFormData] = useState({
    username: '',
    age: '',
    gender: '',
    email: '',
    phoneNumber: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    navigate('/profile');
  };

  const pageStyle = {
    color: '#000',
    minHeight: '100vh',
    padding: '50px 0',
    textAlign: 'center',
    backgroundImage: ` url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const formContainerStyle = {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    background: 'rgba(255, 255, 255, 0.8)',
  };

  const headingStyle = {
    color: '#333',
    fontFamily: 'Times New Roman, Times, serif',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center', 
  };

  const iconStyle = {
    marginRight: '10px',
    fontSize: '1rem',
    verticalAlign: 'middle',
  };

  const labelStyle = {
    display: 'flex',          
    alignItems: 'center',    
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
    background: '#FCF75E', 
    color: 'black',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  };

  return (
    <div style={pageStyle}>
      <div style={formContainerStyle}>
        <h1 style={headingStyle}>Personal Information</h1>
        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>
            <FaUser style={iconStyle} /> Username
          </label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            style={inputStyle}
          />

          <label style={labelStyle}>
            <FaBirthdayCake style={iconStyle} /> Age
          </label>
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            style={inputStyle}
          />

          <label style={labelStyle}>
            <FaVenusMars style={iconStyle} /> Gender
          </label>
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={formData.gender}
            onChange={handleChange}
            style={inputStyle}
          />

          <label style={labelStyle}>
            <FaEnvelope style={iconStyle} /> Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />

          <label style={labelStyle}>
            <FaPhone style={iconStyle} /> Phone Number
          </label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="+91-1234567890"
            value={formData.phoneNumber}
            onChange={handleChange}
            style={inputStyle}
          />

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button type="submit" style={buttonStyle}>
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
