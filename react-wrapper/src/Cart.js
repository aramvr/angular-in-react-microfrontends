import React from 'react';

const Cart = ({ items }) => {
  return (
    <div className="cart">
      <span>Items: {items}</span>
    </div>
  );
};

export default Cart;
