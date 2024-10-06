import React from 'react';
import Product from './Product'; // Import your Product component

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <div key={index} className="product-cell">
          <img src={product.image} alt={product.name} />
          <div className="product-details">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
