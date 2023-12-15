import React from 'react';

export const About = () => {
  const headingStyle = {
    color: '#ff5733', 
    fontFamily: ' Times New Roman, Times, serif', 
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'center', 
  };

  const paragraphStyle = {
    color: '#666',
    fontFamily: 'Arial, sans-serif', 
    fontSize: '1rem', 
    lineHeight: '1.5', 
    marginBottom: '20px', 
    textAlign: 'center',
  };

  return (
    <div className="about-us-container">
      <h1 style ={headingStyle}>About ORVA</h1>
      <p style={paragraphStyle}>
        Welcome to ORVA, where shopping meets health, quality, and well-being. We are passionate about providing you with the best online shopping experience and top-notch products.
      </p>

      <h1 style={headingStyle}>Our Story</h1>
      <p style={paragraphStyle}>
        At Orva, our journey began with a simple idea: to create an online marketplace that offers a wide range of products that people and their body loves, from the daily-grocery needs to high-quality Oils and everything in between. We believe that shopping should be a seamless and enjoyable experience, and that's what we set out to achieve.
      </p>

      <h1 style={headingStyle}>Our Mission</h1>
      <p style={paragraphStyle}>
        Our mission is to connect people with the products they need and love, all while delivering exceptional customer service. We strive to make online shopping accessible, affordable, and enjoyable for everyone. We're dedicated to providing you with the best selection, quality, and value while ensuring a safe and secure shopping environment.
      </p>

      <h1 style={headingStyle}>Our Team</h1>
      <p style={paragraphStyle}>
        Behind the scenes at ORVA is a dedicated team of University Students who are passionate about what they do. From customer service to product curation, each member of our team plays a crucial role in delivering an exceptional shopping experience.
      </p>

      <h1 style={headingStyle}>Join Us on Our Journey</h1>
      <p style={paragraphStyle}>
        Thank you for choosing ORVA for your nutrition needs. We invite you to explore our ever-growing selection of products, discover everything your gut likes, and enjoy a shopping experience that's tailored to you.
        <br></br>
        Your support and trust mean the world to us, and we look forward to serving you for many years to come. If you have any questions, feedback, or suggestions, please don't hesitate to reach out to us. We love hearing from our customers and are constantly striving to improve our services.
        <br></br>
        Rest Assured, Happy Shopping!
      </p>
    </div>
  );
};
