import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Prodcard } from '../../components/prodcard/prodcard';
import orvaImage from '../../assets/orva.png';

export const Home = () => {
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/v1/latest-products/');
        console.log('Fetched Data:', response.data);
        
        if (Array.isArray(response.data)) {
          setLatestProducts(response.data);
        } else {
          console.error('Response data is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <div>
      {/* Hero section */}
      <div className="hero min-h-screen" style={{
        backgroundImage: `url(${orvaImage})`,
        backgroundSize: '400px 400px', 
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        
        }}>        
      <div className=""></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            {/* <button className="btn btn-primary bg-yellow-500 border-yellow-500 text-gray-700 shadow-inner hover:bg-yellow-400 hover:border-none align-bottom ">Shop Now</button> */}
          </div>
        </div>
      </div>

      {/* Latest products section */}
      <div>
        <Prodcard latestProducts={latestProducts} />
      </div>
    </div>
  );
};
