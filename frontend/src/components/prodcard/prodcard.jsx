import React from 'react';
import { ProductBox } from '../prodbox/prodbox'; 

export const Prodcard = ({ latestProducts }) => {
  console.log('Latest Products:', latestProducts); 
  return (
    <div className="columns is-multiline">
      {latestProducts.map((product) => (
        <ProductBox key={product.id} product={product} />
      ))}
    </div>
  );
};
