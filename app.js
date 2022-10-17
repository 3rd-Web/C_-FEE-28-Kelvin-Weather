const kelvin = 293; // today's forecast

// const kelvin = 0; // 0 kelvin is equal to -460 Fahrenheit

const celsius = kelvin - 273; // Celsius is 273 degrees < Kelvin
console.log(`Today's forcast in Celsius is ${celsius}°c`);

/* 

let fahrenheit = celsius * (9 / 5) + 32; // fahrenheit conversion
console.log(fahrenheit);

fahrenheit = Math.floor(fahrenheit); // method to round down temperatue to whole number
console.log(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`); //step 9 string interpolation 

*/

// Celsius to the Newton Scale

let newton = celsius * (33 / 100);
console.log(`Today's forecast from Celsius to Newton is ${newton}`);

newton = Math.floor(newton);
console.log(`Adjusted to round down is ${newton}.`);
