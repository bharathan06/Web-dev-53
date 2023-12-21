import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

  return (
    <div style={{ textAlign: 'center' }}>
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          background: '#FCF75E',
          display: 'inline-block',
          padding: '0.5rem 1rem',
          borderRadius: '5px',
        }}
      >
        My Orders
      </h1>
      {orders.map((order) => (
        <ul key={order.id} className="menu bg-base-200 w-56 rounded-box mx-auto mb-4">
          <li>
            <a>
              Order Number: {order.orderNumber} <br />
              Price: {order.Price} <br />
              Item Name: {order.ItemName} <br />
              Date: {order.date} <br />
              Status: {order.status}
            </a>
          </li>
        </ul>
      ))}
      <div className="mb-4">
        <button className="btn btn-outline btn-warning" onClick={handleGoHome}>
          GO HOME
        </button>
      </div>
    </div>
  );
};
