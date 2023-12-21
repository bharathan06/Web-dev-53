import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import backgroundImage from '../../assets/yu.jpg';
import profileImage from '../../assets/hehe.jpeg'; 

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
  const wrapperStyle = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.9)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '58vh',
    width: '35%',
    margin: 'auto',
    marginTop: '80px',
    marginBottom: '30px',
    padding: '50px',
    position: 'center', 
    border: '2px solid black',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    background: 'rgba(255, 255, 255, 0.8)',
  };
  
    

  const profileImageStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginBottom: '20px',
    position: 'absolute',  
    top: '140px',           
    left: '50%',
    transform: 'translateX(-50%)', 
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
    color: 'Black',
  };

  const labelStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    fontWeight: 'bold',
    fontSize: '18px',
    textAlign: 'left',
    color: 'black',
  };

  const inputOvalStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '20px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    paddingLeft: '40px'
  };

  const labelIconStyle = {
    marginRight: '10px',
    verticalAlign: 'middle',
  };

  const rememberMeStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    color: 'black',  
  };

  const signUpLinkStyle = {
    textDecoration: 'none',
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: '18px',
    marginLeft: '5px',
  };

  return (
    <div style={wrapperStyle}>
      <div style={containerStyle}>
        <img src={profileImage} alt="Profile" style={profileImageStyle} />
        <h2 style={headingStyle}>LOGIN</h2>
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="username" style={labelStyle}>
              <FaUser style={labelIconStyle} /> Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={user.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="input input-bordered input-success w-full max-w-xs"
              style={inputOvalStyle}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={labelStyle}>
              <FaLock style={labelIconStyle} /> Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="input input-bordered input-success w-full max-w-xs"
              style={inputOvalStyle}
            />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', boxSizing: 'border-box', background: '#FFD700', color: 'black', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Login
          </button>
          <div style={rememberMeStyle}>
  <input type="checkbox" id="rememberMe" name="rememberMe" style={{ marginRight: '10px' }} />
  <label htmlFor="rememberMe">Remember Me</label>
</div>
          <p style={{ marginBottom: '10px', marginTop: '10px' }}>
            <Link to="/forgot-password" style={{ textDecoration: 'none' }}>
              Forgot Password?
            </Link>
          </p>
          <p>
            Don't have an account?{' '}
            <Link to="/signup" style={signUpLinkStyle}>
              Sign Up!
            </Link>
          </p>
        </form>
      </div>
      </div>
  );
};
