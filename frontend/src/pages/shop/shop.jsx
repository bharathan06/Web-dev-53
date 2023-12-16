import React, { useState, useEffect } from 'react';
import { Product } from './product';
import './shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/v1/latest-products/');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products">
      {products.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </div>
  );
};

export { Shop };
