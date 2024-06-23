const convertToCelsius = function(fahren) {
  return Number(((fahren - 32) * (5 / 9)).toFixed(1))  ;
};

const convertToFahrenheit = function(celsius) {
  return Number((celsius * (5 / 9)  + 32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
