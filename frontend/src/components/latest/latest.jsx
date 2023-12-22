import React from 'react';


const YourComponent = ({ latestProducts }) => {
  return (
    <div className="columns is-multiline">
      <div className="column is-12">
        <h2 className="is-size-2 has-text-centered">Latest products</h2>
      </div>

      {latestProducts.map((product) => (
        <ProductBox key={product.id} product={product} />
      ))}
    </div>
  );
};

export default YourComponent;
