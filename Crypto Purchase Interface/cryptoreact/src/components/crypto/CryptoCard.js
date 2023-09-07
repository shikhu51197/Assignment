import React, { useState } from "react";
import "../Styles/CryptoCard.css";

const CryptoCard = ({ crypto, onBuy }) => {
  const [quantity, setQuantity] = useState(0);

  const handleBuyClick = () => {
    if (quantity > 0) {
      onBuy(crypto, quantity);
      setQuantity(0);
    }
  };

  return (
    <div className="crypto-card">
      <h2>{crypto.name}</h2>
      <p>Price: ${crypto.price}</p>
      <div>
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
        />
        <button onClick={handleBuyClick}>Buy</button>
      </div>
    </div>
  );
};

export default CryptoCard;
