document.getElementById("convertBtn").addEventListener("click", function() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const resultElement = document.getElementById("result");
  
    if (isNaN(inputTemp)) {
      resultElement.textContent = "Please enter a valid temperature.";
      return;
    }
  
    let result;
    if (fromUnit === "celsius") {
      result = (inputTemp * 9/5) + 32;
      resultElement.textContent = `${inputTemp}°C is ${result.toFixed(2)}°F`;
    } else if (fromUnit === "fahrenheit") {
      result = (inputTemp - 32) * 5/9;
      resultElement.textContent = `${inputTemp}°F is ${result.toFixed(2)}°C`;
    }
  });
  
  
  