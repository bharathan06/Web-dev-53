import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Prodcard } from '../../components/prodcard/prodcard';
import orvaImage from '../../assets/orva.png';

export const Home = () => {
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    const getLatestProducts = async () => {
      try {
        const response = await axios.get('/api/v1/latest-products/');
        console.log('Fetched Data:', response.data);
        setLatestProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    getLatestProducts();
  }, []);

  return (
    <div>
      {/* Hero section */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${orvaImage})`,
          backgroundSize: '400px 400px',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className=""></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            {/* Add your hero content here */}
          </div>
        </div>
      </div>

      {/* Latest products section */}
      <h1 class="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black align-middle">Latest Products</h1>
      <br/>
      <br/>
      <br/>
      {latestProducts.map((product) => (
        <div key={product.id}>
          <Prodcard latestProducts={latestProducts} />
        </div>
      ))}
    </div>
  );
};
