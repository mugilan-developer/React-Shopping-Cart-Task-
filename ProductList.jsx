import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ addToCart, cart }) => {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description for product 1' },
    { id: 2, name: 'Product 2', description: 'Description for product 2' },
    { id: 3, name: 'Product 3', description: 'Description for product 3' },
  ];

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={addToCart}
            inCart={cart.includes(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
