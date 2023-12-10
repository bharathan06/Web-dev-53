import React, { useState } from 'react';

export const OrdersPage = () => {
  const [orders] = useState([
    {
      id: 1,
      orderNumber: 'ORD123',
      date: '2024-01-01',
      status: 'Shipped',
     
    },
    
  ]);

  return (
    <div>
      <h1>My Orders</h1>
      {orders.map((order) => (
        <div key={order.id}>
          <h2>Order Number: {order.orderNumber}</h2>
          <p>Date: {order.date}</p>
          <p>Status: {order.status}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};