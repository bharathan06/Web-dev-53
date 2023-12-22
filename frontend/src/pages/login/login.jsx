import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'bulma-toast';
import { FaUser, FaLock } from 'react-icons/fa';
import backgroundImage from '../../assets/login_bg.png';
import { useAuth } from '../../authcontext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState([]);

  const pageStyle = {
    minHeight: '100vh',
    background: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.4)), url('${backgroundImage}')`,
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(20px)', 
    backgroundRepeat: 'no-repeat',
  };
  

  const formContainerStyle = 'container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 bg-white bg-opacity-70 px-6 py-8 rounded shadow-md text-black w-full';

  const headingStyle = 'mb-8 text-3xl text-center';

  const labelStyle = 'flex items-center m-2 text-grey-darker';

  const iconStyle = 'mr-2';

  const inputStyle = 'block border border-grey-light w-80 p-3 rounded mb-4';

  const buttonStyle = 'w-full text-center py-3 rounded bg-yellow-400 hover:bg-yellow-600 focus:outline-none my-1';

  const rememberMeStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    color: 'black',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: '18px',
    marginLeft: '5px',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    try {
      // Simulating a login request with Axios
      const response = await axios.post('/api/v1/login', {
        username: user.username,
        password: user.password,
      });

      // Display success message with Bulma toast
      toast({
        message: 'Login successful!',
        type: 'is-success',
        dismissible: true,
        pauseOnHover: true,
        duration: 2000,
        position: 'bottom-right',
      });

      // Navigate to the home page after successful login
      navigate('/');
    } catch (error) {
      // Handle login errors
      if (error.response) {
        setErrors(['Invalid username or password']);
      } else {
        setErrors(['Something went wrong. Please try again']);
      }
    }
  };

  return (
    <div style={pageStyle}>
      <div className={formContainerStyle}>
        <h1 className={headingStyle}>Login</h1>
        <form onSubmit={handleSubmit}>
          <label className={labelStyle}>
            <FaUser className={iconStyle} />
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            className={inputStyle}
            required
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />

          <label className={labelStyle}>
            <FaLock className={iconStyle} />
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className={inputStyle}
            required
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />

          <div style={rememberMeStyle}>
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              style={{ marginRight: '10px' }}
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>

          <div className="notification is-danger" style={{ marginBottom: '20px' }}>
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>

          <button type="submit" className={buttonStyle} onClick={handleSubmit}>
            Login
          </button>

          <div style={{ marginTop: '10px' }}>
            <Link to="/forgot-password" style={linkStyle}>
              Forgot Password?
            </Link>
          </div>

          <p style={{ marginTop: '10px' }}>
            Don't have an account?{' '}
            <Link to="/signup" style={linkStyle}>
              Sign Up!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export { Login };
