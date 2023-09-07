import React from 'react';
import '../Styles/TemperatureResult.css';

function TemperatureResult({ result }) {
  return (
    <div className="temperature-result">
      <p>{result}</p>
    </div>
  );
}

export default TemperatureResult;
