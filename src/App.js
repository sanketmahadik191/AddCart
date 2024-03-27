import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import "./App.css"

const Products = [
  { id: 1, name: 'Product-1', price: 100 },
  { id: 2, name: 'Product-2', price: 200 },
  { id: 3, name: 'Product-3', price: 300 },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.product.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => item.product.id === product.id ? {...item, quantity: item.quantity + 1} : item));
    } else {
      setCart([...cart, { product: product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const existingItem = cart.find(item => item.product.id === product.id);
    if (existingItem.quantity === 1) {
      setCart(cart.filter(item => item.product.id !== product.id));
    } else {
      setCart(cart.map(item => item.product.id === product.id ? {...item, quantity: item.quantity - 1} : item));
    }
  };

  return (
    <div className="App">
      <ProductList products={Products} onAddToCart={addToCart} />
      <Cart cart={cart} onRemoveFromCart={removeFromCart} />
    </div>
  );
}

export default App;
