import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    setCart((prevCart) => [...prevCart, productId]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((id) => id !== productId));
  };

  const products = [
    { id: 1, name: 'Product 1', description: 'Description for product 1' },
    { id: 2, name: 'Product 2', description: 'Description for product 2' },
    { id: 3, name: 'Product 3', description: 'Description for product 3' },
  ];

  return (
    <div>
      <Cart cart={cart} products={products} removeFromCart={removeFromCart} />
      <ProductList addToCart={addToCart} cart={cart} />
    </div>
  );
};

export default App;
