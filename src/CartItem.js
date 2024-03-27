// CartItem.js
import React from 'react';

const CartItem = ({ item, onRemoveFromCart }) => {
  return (
    <div className="cart-item">
      <h3>{item.product.name}</h3>
      <p>Price: ${item.product.price} <span className='gapP'></span>Quantity: {item.quantity}</p>

      <button onClick={() => onRemoveFromCart(item.product)}>Remove</button>
    </div>
  );
};

export default CartItem;
