const convertToCelsius = function(fahrenheit) {
  return (((fahrenheit - 32) / 1.8).toFixed(1)-0);
  
};

const convertToFahrenheit = function(celsius) {
  return (((celsius * 1.8) + 32).toFixed(1)-0);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
