import React, { useState, useEffect } from 'react';
import { Product } from './product';
import './shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/v1/latest-products/');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error fetching products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // You can replace this with a loading spinner or component
  }

  if (error) {
    return <p>{error}</p>; // Display an error message to the user
  }

  return (
    <div className="products">
      {products.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </div>
  );
};

export { Shop };
