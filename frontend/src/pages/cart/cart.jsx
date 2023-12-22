import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item';
import './cart.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, getTotalCartAmount, removeFromCart, updateCartItemCount, addToCart } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/latest-products/');
        const apiProducts = response.data;
        setProducts(apiProducts);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProducts();
  }, []); // Run the effect only once when the component mounts

  return (
    <div className="cart">
      <h1>Your Cart Currently Has:</h1>
      <div></div>
      <div className="cartItems">
        {products.map((product) => {
          const quantity = cartItems[product.id];
          if (quantity > 0) {
            return <CartItem key={product.id} data={product} quantity={quantity} />;
          }
          return null;
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ₹ {totalAmount} </p>
          <button onClick={() => navigate('/')}>Continue </button>
          <button>Checkout</button>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export { Cart };
