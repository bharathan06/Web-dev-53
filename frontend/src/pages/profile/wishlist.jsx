import React from 'react';

export const Wishlist = () => {
  const wishlistItems = [
    { id: 1, name: 'Groundnut Oil', price: 'Rs 350.00' },
    { id: 2, name: 'Cashew', price: 'Rs 850.00' },
    { id: 3, name: 'Saffron', price: 'Rs 300.00' },
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          background: 'yellow',
          display: 'inline-block',
          padding: '0.5rem 1rem',
          borderRadius: '5px',
        }}
      >
        My Wishlist
      </h1>
      {wishlistItems.length > 0 ? (
        <ul>
          {wishlistItems.map((item) => (
            <li key={item.id} className="mb-4">
              <div className="flex items-center justify-between border-b border-gray-300 pb-2">
                <div>
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p className="text-gray-600">Price: {item.price}</p>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};
