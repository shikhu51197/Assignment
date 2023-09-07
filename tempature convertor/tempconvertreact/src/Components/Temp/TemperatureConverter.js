
import React, { useState } from 'react';
import '../Styles/TemperatureConverter.css';
import TemperatureResult from './TemperatureResult';

function TemperatureConverter() {
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('celsius');
  const [conversionResult, setConversionResult] = useState('');
  const [error, setError] = useState('');

  const convertToCelsius = () => {
    setError('');
    if (!temperature) {
      setError('Please enter a temperature.');
      return;
    }

    if (scale === 'celsius') {
      setError('Already in Celsius.');
    } else {
      const celsius = ((parseFloat(temperature) - 32) * 5) / 9;
      setConversionResult(`${temperature}°F is equal to ${celsius.toFixed(2)}°C`);
    }
  };

  const convertToFahrenheit = () => {
    setError('');
    if (!temperature) {
      setError('Please enter a temperature or valid Number.');
      return;
    }

    if (scale === 'fahrenheit') {
      setError('Already in Fahrenheit.');
    } else {
      const fahrenheit = (parseFloat(temperature) * 9) / 5 + 32;
      setConversionResult(`${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F`);
    }
  };

  return (
    <div className="temperature-converter">
      <h1>Temperature Converter</h1>
      <div>
        <input
          type="text"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          placeholder="Enter temperature"
        />
        <select value={scale} onChange={(e) => setScale(e.target.value)}>
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
        </select>
      </div>
      <button onClick={convertToCelsius}>Convert to Celsius</button>
      <button onClick={convertToFahrenheit}>Convert to Fahrenheit</button>
      <TemperatureResult result={conversionResult} />
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default TemperatureConverter;

