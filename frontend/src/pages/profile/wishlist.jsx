import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import backgroundImage from '../../assets/uuu.jpeg'; 

export const Wishlist = () => {
  const { addToCart } = useContext(ShopContext);

  const wishlistItems = [
    { id: 1, name: 'Coconut Oil', price: 'Rs 199.00' },
    { id: 2, name: 'Groundnut Oil', price: 'Rs 249.00' },
    { id: 3, name: 'Sunflower Oil', price: 'Rs 199.00' },
  ];

  const handleAddToCart = (productId) => {
    addToCart(productId);
  };

  const pageStyle = {
    color: '#000',
    minHeight: '100vh',
    padding: '50px 0',
    textAlign: 'center',
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.9)), url(${backgroundImage}`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div style={pageStyle}>
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          background: 'rgba(255, 255, 224, 0.9)', 
          display: 'inline-block',
          padding: '0.5rem 1rem',
          borderRadius: '5px',
        }}
      >
        My Wishlist
      </h1>
      {wishlistItems.length > 0 ? (
        <ul className="menu bg-base-200 w-full max-w-2xl mx-auto rounded-box">
          {wishlistItems.map((item) => (
            <li key={item.id}>
              <a>
                <div className="flex items-center justify-between border-b border-gray-300 pb-2">
                  <div>
                    <h2 className="text-lg font-bold">{item.name}</h2>
                    <p className="text-gray-600">Price: {item.price}</p>
                  </div>
                  <button
                    className="btn"
                    style={{ background: '#FFFFE0', color: 'black', marginLeft: '400px' }}
                    onClick={() => handleAddToCart(item.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3a2 2 0 012-2h14a2 2 0 012 2m5 5V21a1 1 0 01-1 1H5a1 1 0 01-1-1V6h14zm-9 5a3 3 0 100-6 3 3 0 000 6z" />
                    </svg>
                    Add To Cart
                  </button>
                </div>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};
