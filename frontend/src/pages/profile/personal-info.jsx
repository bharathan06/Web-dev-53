import React, { useState } from 'react';

export const PersonalInfo = () => {
  const [formData, setFormData] = useState({
    username: '',
    age: '',
    gender: '',
    email: '',
    phoneNumber: '',
  });

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
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Personal Information</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-input mt-1 block w-full rounded-md border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Age</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="form-input mt-1 block w-full rounded-md border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Gender</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="form-input mt-1 block w-full rounded-md border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input mt-1 block w-full rounded-md border-gray-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="form-input mt-1 block w-full rounded-md border-gray-300"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save
        </button>
      </form>
    </div>
  );
};


