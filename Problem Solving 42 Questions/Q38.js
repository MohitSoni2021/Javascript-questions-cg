function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * (9 / 5)) + 32;
    return fahrenheit;
}

const celsiusInput = 0;
const fahrenheitOutput = celsiusToFahrenheit(celsiusInput);
console.log(`Celsius: ${celsiusInput}, Fahrenheit: ${fahrenheitOutput}`); 
