import React from 'react';
import backgroundImage from '../../assets/ttt.webp';

export const About = () => {
  const pageStyle = {
    color: 'black',
    fontSize: '1.2rem',
    minHeight: '100vh',
    padding: '50px 20px', 
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: 'white',
    fontStyle: 'Times New Roman',
  };

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',  
    justifyContent: 'space-between', 
  };

  const cardStyle = {
    width: 'calc(33.33% - 20px)', 
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    background: 'linear-gradient(rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 0.9)',
    marginBottom: '20px',
    color: 'black',
  };

  const backgroundImageStyle = {
    background: ` url(${backgroundImage}) center/cover`,
    backgroundImage: ` url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const faqContainerStyle = {
    marginTop: '50px',
    background: '#ffffff',
    padding: '50px 20px',
  };

  const faqStyle = {
    marginBottom: '20px',
    width: '100%', 
  };
  

  return (
    <div>
      <div style={{ ...pageStyle, ...backgroundImageStyle }}>
        <h1 style={headingStyle}>ABOUT ORVA</h1>

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

      <div style={faqContainerStyle}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: 'black' }}>
          Frequently Asked Questions
        </h2>
        
        <div style={faqStyle} className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="faq-accordion" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            What products do we offer at ORVA?
          </div>
          <div className="collapse-content">
            <p>
              ORVA offers a curated selection of premium cooking oils and organic products.
            </p>
          </div>
        </div>
        
        <div style={faqStyle} className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            How can I contact ORVA's customer service?
          </div>
          <div className="collapse-content">
            <p>
              You can reach our customer service team through the Contact Us page on our website.
            </p>
          </div>
        </div>

        <div style={faqStyle} className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            What is Wood Cold Pressed Oils?
          </div>
          <div className="collapse-content">
            <p>
              In ancient times, Cooking Oil was obtained through the Vagai wood or Ghani method, commonly known as wood pressing. This approach, considered the optimal cold-pressing technique, involves extracting oil without external heat addition (minimal heat) or the use of chemicals. Seeds are cold-pressed (below 25°C) to preserve nutrients, followed by a 1-2 day sedimentation and sieve filtration. The resulting oil is directly bottled, bypassing commercial processes like chemical refining and deodorization. This method preserves the genuine flavor, aroma, antioxidants, and nutrients of the oil without altering its properties, making it ideal for both cooking and skincare. Orva Oils and Traditionals oils are also "First pressed," indicating that seeds/nuts undergo a single crushing and pressing, making them an excellent choice for those seeking the best cold-pressed oils nearby.
            </p>
          </div>
        </div>

        <div style={faqStyle} className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            What is the difference between Wood Cold Pressed Oils and Normal Oils?
          </div>
          <div className="collapse-content">
            <p>
              The primary difference between wood-pressed oil and regular oil lies in the extraction methods. Regular refined oils are obtained through processes involving solvents, high-speed grinding generating heat up to 400°C, chemical bleaching, deodorization, and hydrogenation for stability, resulting in the production of trans fats, which are detrimental to heart health.

              On the other hand, cold-pressed or wood-pressed oils are extracted by pressing and grinding seeds below 25°C. This method avoids chemical refining, ensuring a slow but entirely natural process. The resulting oil retains its natural flavor, aroma, and nutritional value, making it a healthier alternative.
            </p>
          </div>
        </div>

        <div style={faqStyle} className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            What are the uses of Orva Groundnut Wood Cold Pressed Oils?
          </div>
          <div className="collapse-content">
            <p>
              Orva Groundnut Wood Cold Pressed Oils can be used for any type of cooking, including deep frying and seasoning.
            </p>
          </div>
        </div>

        <div style={faqStyle} className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            Which Oils can be used for Cooking?
          </div>
          <div className="collapse-content">
            <p>
              Orva Groundnut Wood Cold Pressed Oils
              Orva Sesame Wood Cold Pressed Oils
              Orva Coconut Wood Cold Pressed Oils
              Orva Sunflower Wood Cold Pressed Oils
              Orva Castor Oils
            </p>
          </div>
        </div>

        <div style={faqStyle} className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-xl font-medium">
            Which Oil can be used for Hair Growth?
          </div>
          <div className="collapse-content">
            <p>
              Orva Coconut Wood Cold Pressed Oils/Orva Essential Hair Oil (which is made from Orva Wood cold-pressed oil) can be used for Hair growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
