import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'bulma-toast';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import backgroundImage from '../../assets/login_bg.png';
import { Login } from '../login/login'

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

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

  const buttonStyle = 'w-full text-center py-3 rounded bg-yellow-400 <text-black></text-black> hover:bg-yellow-600 focus:outline-none my-1';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    if (formData.username === '') {
      setErrors((prevErrors) => [...prevErrors, 'The username is missing']);
    }

    if (formData.password === '') {
      setErrors((prevErrors) => [...prevErrors, 'The password is too short']);
    }

    if (formData.password !== formData.confirmPassword) {
      setErrors((prevErrors) => [...prevErrors, "The passwords don't match"]);
    }

    if (!errors.length) {
      try {
        const response = await axios.post('/api/v1/users/', {
          username: formData.username,
          password: formData.password,
        });

        toast({
          message: 'Account created, please log in!',
          type: 'is-success',
          dismissible: true,
          pauseOnHover: true,
          duration: 2000,
          position: 'bottom-right',
        });

        navigate('/login');
      } catch (error) {
        if (error.response) {
          for (const property in error.response.data) {
            setErrors((prevErrors) => [
              ...prevErrors,
              `${property}: ${error.response.data[property]}`,
            ]);
          }
          console.log(JSON.stringify(error.response.data));
        } else if (error.message) {
          setErrors((prevErrors) => [
            ...prevErrors,
            'Something went wrong. Please try again',
          ]);
          console.log(JSON.stringify(error));
        }
      }
    }
  };

  return (
    <div style={pageStyle}>
      <div className={formContainerStyle}>
        <h1 className={headingStyle}>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label className={labelStyle}>
            <FaUser className={iconStyle} />
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className={inputStyle}
            required
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />

          <label className={labelStyle}>
            <FaEnvelope className={iconStyle} />
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className={inputStyle}
            required
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />

          <label className={labelStyle}>
            <FaLock className={iconStyle} />
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm your password"
            className={inputStyle}
            required
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          />

          <div className="notification is-danger" style={{ marginBottom: '20px' }}>
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>

          <button type="submit" className={buttonStyle}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export { Signup };
