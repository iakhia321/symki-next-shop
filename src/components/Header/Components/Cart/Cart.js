import React from 'react';
import './Cart.sass';

const Cart = ({ items, onClose }) => {
  return (
    <div className={`cart-container ${items.length > 0 ? 'cart-open' : ''}`}>
      <button className="close-button" onClick={onClose}>
        Close cart
      </button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;