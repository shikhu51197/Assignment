// Get elements from the DOM
const temperatureInput = document.getElementById("temperature");
const scaleSelect = document.getElementById("scale");
const convertToCelsiusBtn = document.getElementById("convertToCelsius");
const convertToFahrenheitBtn = document.getElementById("convertToFahrenheit");
const resultDiv = document.getElementById("result");

// Conversion functions
function convertToCelsius() {
    const temperature = parseFloat(temperatureInput.value);
    if (isNaN(temperature)) {
        showError("Please enter a valid number.");
        return;
    }

    if (scaleSelect.value === "celsius") {
        showError("Already in Celsius.");
    } else {
        const celsius = (temperature - 32) * 5/9;
        showResult(`${temperature}°F is equal to ${celsius.toFixed(2)}°C`);
    }
}

function convertToFahrenheit() {
    const temperature = parseFloat(temperatureInput.value);
    if (isNaN(temperature)) {
        showError("Please enter a valid number.");
        return;
    }

    if (scaleSelect.value === "fahrenheit") {
        showError("Already in Fahrenheit.");
    } else {
        const fahrenheit = (temperature * 9/5) + 32;
        showResult(`${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F`);
    }
}

// Display result or error
function showResult(message) {
    resultDiv.style.color = "#333";
    resultDiv.textContent = message;
}

function showError(message) {
    resultDiv.style.color = "red";
    resultDiv.textContent = message;
}

// Event listeners for conversion buttons
convertToCelsiusBtn.addEventListener("click", convertToCelsius);
convertToFahrenheitBtn.addEventListener("click", convertToFahrenheit);
