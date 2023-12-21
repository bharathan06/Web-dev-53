import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductBox } from '../../components/prodbox/prodbox';
import orvaImage from '../../assets/orva.png';
import '../home/home.css';

export const Home = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLatestProducts = async () => {
      try {
        const response = await axios.get('/api/v1/latest-products/');
        console.log('Fetched Data:', response.data);
        setLatestProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    const getCategoryProducts = async () => {
      try {
        const response = await axios.get('/api/v1/products-by-category/electronics'); 
        console.log('Fetched Category Products:', response.data);
        setCategoryProducts(response.data);
      } catch (error) {
        console.error('Error fetching category products:', error);
        setErrorCategoryProducts('Error fetching category products. Please try again later.');
      } finally {
        setLoadingCategoryProducts(false);
      }
    };


    getLatestProducts();
    getCategoryProducts();
  }, []);



  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (latestProducts.length === 0) {
    return <p>No latest products found.</p>;
  }

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

      {/* Latest products carousel section */}
      <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black align-middle">Latest Products</h1>
      <div className="latest-products-section overflow-y-auto max-h-100 "> {/* Set a fixed height and make it scrollable */}
        
        <br />
        <br />
        <br />
        <div className="carousel rounded-box" style={{ height: '500px'}}>
          {latestProducts.map((product) => (
            <div key={product.id} className="carousel-item">
              <ProductBox product={product} />
            </div>
          ))}
        </div>
      </div>
      <br/>
      <br/>
      <br/>

      <div className="category-products-section overflow-y-auto max-h-100 ">
        <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black align-middle">Category Products</h1>
        <div className="carousel rounded-box" style={{ height: '500px' }}>
          {categoryProducts.map((product) => (
            <div key={product.id} className="carousel-item">
              <ProductBox product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
