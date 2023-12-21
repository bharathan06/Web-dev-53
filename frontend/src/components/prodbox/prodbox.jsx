import React from 'react';
import './prodbox.css';

export const ProductBox = ({ product }) => {
  console.log('Product:', product);
  console.log('Image URL:', `http://localhost:8000${product.image}`);

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        {/* Update the image source */}
        <img 
          src={`http://localhost:8000${product.image}`} 
          alt={product.name} 
        />
      </figure>
      <div className="card-body">
        <div className="card-content">
          <h2 className="card-title">{product.name}</h2>
          <p className="description">{product.description}</p>
        </div>
        <div className="card-actions">
          <p>Price: ₹{product.price}</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
