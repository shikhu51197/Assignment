import React from 'react';
import '../Styles/TemperatureInput.css';

function TemperatureInput({ temperature, scale, onTemperatureChange, onScaleChange }) {
  const handleTemperatureChange = (e) => {
    onTemperatureChange(e.target.value);
  };

  const handleScaleChange = (e) => {
    onScaleChange(e.target.value);
  };

  return (
    <div className="temperature-input">
      <input
        type="number"
        value={temperature}
        onChange={handleTemperatureChange}
        placeholder="Enter temperature"
      />
      <select value={scale} onChange={handleScaleChange}>
        <option value="celsius">Celsius</option>
        <option value="fahrenheit">Fahrenheit</option>
      </select>
    </div>
  );
}

export default TemperatureInput;
