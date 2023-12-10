import React, { useState } from 'react';

 const  PersonalInfoPage = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: 'Ram',
    lastName: 'Krishnan',
    email: ' ramkrishnan@xmail.com',
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', userInfo);
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Personal Information</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={userInfo.firstName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={userInfo.lastName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};
export default PersonalInfoPage;