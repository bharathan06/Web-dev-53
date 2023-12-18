import React from 'react';
import backgroundImage from '../../assets/cooking.png';

export const About = () => {
  const pageStyle = {
    background: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${backgroundImage}) center/cover`,
    color: 'black',
    minHeight: '100vh',
    padding: '50px 0',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: 'black',
    fontStyle: 'Times New Roman',
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: '20px',
    color: 'yellow',
  };

  const cardStyle = {
    width: '300px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    background: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '20px',
    color: 'black',
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>About</h1>

      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>ORVA E-Commerce</h2>
          <p>
            Welcome to ORVA, where shopping meets health, quality, and well-being. This is your one-stop destination for premium cooking oils and organic products. We are dedicated to providing high-quality, healthy options for your culinary needs.
          </p>
        </div>

        <div style={cardStyle}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Our Team</h2>
          <p>
            Meet the passionate team behind ORVA. Behind the scenes at ORVA is a dedicated team of University Students who are passionate about what they do. From customer service to product curation, each member of our team plays a crucial role in delivering an exceptional shopping experience.
          </p>
        </div>

        <div style={cardStyle}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Our Mission</h2>
          <p>
            At ORVA, our mission is to promote healthy living through a carefully selected range of products. We believe in making wholesome choices accessible and enjoyable for everyone. We love to connect people with the products they need and love, all while delivering exceptional customer service. We strive to make online shopping accessible, affordable, and enjoyable for everyone. We're dedicated to providing you with the best selection, quality, and value while ensuring a safe and secure shopping environment.
          </p>
        </div>
      </div>
    </div>
  );
};
