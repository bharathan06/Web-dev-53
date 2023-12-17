import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const navigate = useNavigate();

  const formContainerStyle = {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    background: '#fff',
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
    background: '#FFFDD0', 
    color: 'black',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/');
  };

  return (
    <div style={formContainerStyle}>
      <h1 style={headingStyle}>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          style={inputStyle}
          required
        />

        <label style={labelStyle}>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          style={inputStyle}
          required
        />

        <label style={labelStyle}>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          style={inputStyle}
          required
        />

        <label style={labelStyle}>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm your password"
          style={inputStyle}
          required
        />

        <button type="submit" style={buttonStyle }>
          Sign Up
        </button>
      </form>
    </div>
  );
};
