import React from 'react';
import { ProductBox } from '../prodbox/prodbox';

export const Prodcard = ({ latestProducts }) => {
  console.log('Latest Products:', latestProducts);

  if (!latestProducts) {
    return <p>Loading...</p>;
  }

  return (
    <div className="columns is-multiline">
      {latestProducts.map((product) => (
        <ProductBox key={product.id} product={product} />
      ))}
    </div>
  );
};
