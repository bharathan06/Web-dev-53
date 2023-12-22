import React from 'react';

export const ProductBox = ({ product }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={product.image} alt={product.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <p>Price: ₹{product.price}</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};


