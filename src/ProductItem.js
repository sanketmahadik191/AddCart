// ProductItem.js
import React from 'react';

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add</button>
    </div>
  );
};

export default ProductItem;
