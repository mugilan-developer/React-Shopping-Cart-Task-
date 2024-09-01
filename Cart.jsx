import React from 'react';

const Cart = ({ cart, products, removeFromCart }) => {
  const cartItems = products.filter(product => cart.includes(product.id));

  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      <ul className="list-group">
        {cartItems.map((item) => (
          <li key={item.id} className="list-group-item">
            {item.name}
            <button
              className="btn btn-danger btn-sm float-right"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
