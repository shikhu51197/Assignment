import React from "react";
import "../Styles/Cart.css";

const Cart = ({ cart, onRemove }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - Quantity: {item.quantity} - Total: ${item.price * item.quantity}{" "}
              <button onClick={() => onRemove(item)}>Remove</button>
            </li>
          ))}
          <li className="cart-total">Total: ${calculateTotal()}</li>
        </ul>
      )}
    </div>
  );
};

export default Cart;
