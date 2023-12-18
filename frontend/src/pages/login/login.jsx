import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const data = { username: '', password: '' };
  const [user, setUser] = useState(data);
  const history = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history('/');
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '55vh',
    width: '40%',
    margin: 'auto', 
    marginBottom: '30px',
    border: '2px solid black', 
    borderRadius: '10px',
    padding: '50px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    background: 'rgba(255, 255, 255, 0.8)', 
  };
  

  const formStyle = {
    width: '300px',
    textAlign: 'center',
    marginTop: '-20px',
  };

  const headingStyle = {
    fontWeight: 'bold',
    fontSize: '24px',
    marginBottom: '20px',
    color: 'black',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    marginBottom: '10px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    background: '#FFD700',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>LOGIN</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="username" style={{ fontWeight: 'bold', fontSize: '18px' }}>
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="Enter your username"
            className="input input-bordered input-success w-full max-w-xs"
            style={{ ...inputStyle, width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ fontWeight: 'bold', fontSize: '18px' }}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="input input-bordered input-success w-full max-w-xs"
            style={{ ...inputStyle, width: '100%' }}
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Login
        </button>
        <p style={{ marginBottom: '10px', marginTop: '10px' }}>
          <Link to="/forgot-password" style={{ textDecoration: 'none' }}>
            Forgot Password?
          </Link>
        </p>
        <p>
          Don't have an account?{' '}
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <button className="btn btn-outline btn-warning">Sign Up!</button>
          </Link>
        </p>
      </form>
    </div>
  );
};
