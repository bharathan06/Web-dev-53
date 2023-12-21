import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingBag, FaDollarSign, FaCalendarAlt, FaTruck } from 'react-icons/fa';
import backgroundImage from '../../assets/prp.jpg';

export const Orders = () => {
  const navigate = useNavigate();

  const [orders] = useState([
    {
      id: 1,
      orderNumber: 'ORD123',
      ItemName: 'Coconut Oil',
      Price: 'Rs 199',
      date: '2024-01-01',
      status: 'Shipped',
    },
    {
      id: 2,
      orderNumber: 'ORD124',
      ItemName: 'Groundnut Oil',
      Price: 'Rs 249',
      date: '2024-01-01',
      status: 'In Transit',
    },
    {
      id: 3,
      orderNumber: 'ORD125',
      ItemName: 'Sunflower Oil',
      Price: 'Rs 149',
      date: '2024-01-01',
      status: 'Delivered',
    },
  ]);

  const handleGoHome = () => {
    navigate('/');
  };

  const pageStyle = {
    minHeight: '100vh',
    background: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.8)), url('${backgroundImage}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 0',
  };

  const orderCardStyle = {
    width: '80%',
    maxWidth: '500px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
    fontSize: '1.1rem',
    position: 'relative',
    background: 'rgba(255, 255, 255, 0.75)',
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', alignItems: 'center', marginBottom: '40px', background: '#FCF75E', display: 'inline-block', padding: '10px 20px', borderRadius: '5px', width: '200px' }}>
        <FaShoppingBag style={{ marginRight: '10px' }} /> My Orders
      </h1>
      {orders.map((order) => (
        <div key={order.id} style={orderCardStyle}>
          <h2 style={{ marginBottom: '20px' }}>
            Order Number: {order.orderNumber}
          </h2>
          <p><FaDollarSign /> Price: {order.Price}</p>
          <p><FaCalendarAlt /> Date: {order.date}</p>
          <p><FaTruck /> Status: {order.status}</p>
        </div>
      ))}
      <div className="mb-4">
        <button className="btn btn-outline btn-warning" onClick={handleGoHome}>
          GO HOME
        </button>
      </div>
    </div>
  );
};
