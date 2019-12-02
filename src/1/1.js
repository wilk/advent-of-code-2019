const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.resolve(__dirname, 'data.txt'), 'utf-8');
const masses = input.split('\n');

const recurringFuel = (mass, totalFuel = 0) => {
  const fuel = Math.floor(mass / 3) - 2;
  if (fuel > 0) {
    totalFuel += fuel;
    return recurringFuel(fuel, totalFuel);
  } else return totalFuel;
};

const calculateFuel = masses => {
  return masses.reduce((acc, mass) => {
    acc += recurringFuel(mass);
    return acc;
  }, 0);
};

console.log(calculateFuel(masses));
