import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Orders = () => {
  const navigate = useNavigate();

  const [orders] = useState([
    {
      id: 1,
      orderNumber: 'ORD123',
      date: '2024-01-01',
      status: 'Shipped',
    },
    {
      id: 2,
      orderNumber: 'ORD124',
      date: '2024-01-01',
      status: 'In Transit',
    },
    {
      id: 3,
      orderNumber: 'ORD125',
      date: '2024-01-01',
      status: 'Delivered',
    },
  ]);

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>My Orders</h1>
      {orders.map((order) => (
        <div key={order.id}>
          <h2>Order Number: {order.orderNumber}</h2>
          <p>Date: {order.date}</p>
          <p>Status: {order.status}</p>
          <hr />
        </div>
      ))}

      <button
        onClick={handleGoHome}
        style={{
          backgroundColor: 'red',
          color: 'white',
          padding: '10px 20px',
          fontSize: '1rem',
          fontWeight: 'bold',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px',
        }}
      >
        Go Home
      </button>
    </div>
  );
};
