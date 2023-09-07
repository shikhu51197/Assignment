import React, { useState } from "react";
import "./App.css";
import CryptoCard from "./components/crypto/CryptoCard";
import Cart from "./components/crypto/Cart";
import cryptoData from "./components/crypto/cryptoData";

function App() {
  const [cart, setCart] = useState([]);

  const handleBuy = (crypto, quantity) => {
    const existingItem = cart.find((item) => item.id === crypto.id);
    if (existingItem) {
      const updatedItem = { ...existingItem, quantity: existingItem.quantity + quantity };
      const updatedCart = cart.map((item) => (item.id === crypto.id ? updatedItem : item));
      setCart(updatedCart);
    } else {
      const newItem = { ...crypto, quantity };
      setCart([...cart, newItem]);
    }
  };

  const handleRemove = (itemToRemove) => {
    const updatedCart = cart.filter((item) => item.id !== itemToRemove.id);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <h1>Crypto Purchase Interface</h1>
      <div className="crypto-list">
        {cryptoData.map((crypto) => (
          <CryptoCard key={crypto.id} crypto={crypto} onBuy={handleBuy} />
        ))}
      </div>
      {/* <div className="cartdiv"> */}
      <Cart cart={cart} onRemove={handleRemove} /></div>
    // </div>
  );
}

export default App;
