// Cart.js
import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, onRemoveFromCart }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No products added to the cart</p>
      ) : (
        <>
          {cart.map(item => (
            <CartItem key={item.product.id} item={item} onRemoveFromCart={onRemoveFromCart} />
          ))}
          <p className='totalPrice'>Total Price: ${cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
