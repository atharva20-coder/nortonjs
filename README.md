ADD "test:kMap": "jest test/kMap.test.js" TO SCRIPTS in package.json FOR KMAP

# Nortonjs

## Laplace Transform Calculator
This is a simple Laplace transform calculator that can compute the Laplace transform of a function in terms of 's'.

### Usage
The laplaceTransform function takes three arguments:

`f`: The function to transform
`s`: The value of 's' in the Laplace transform
`tMax`: The maximum value of 't' in the time domain (optional, defaults to infinity)

```
import laplaceTransform from './laplaceTransform.js';

const f = t => t ** 2;
const s = 2;
const tMax = 10;

const laplace = laplaceTransform(f, s, tMax);
console.log(laplace); // L(s) = 2.6666666666666665/(s^3)
```


The f argument should be a function that takes a single input argument t and returns a number. The Laplace transform of the function will be computed over the interval [0, tMax].

The laplaceTransform function returns a string representing the Laplace transform of the function in terms of 's'.
<br>
<br>
## calculateSolarPanelAngle

This function calculates the optimal tilt angle and direction for a solar panel based on the geographic location and date.

### Usage

```js
const calculateSolarPanelAngle = require('./calculateSolarPanelAngle');

const latitude = 40.7128; // New York City
const longitude = -74.006;
const date = new Date('2023-01-01T12:00:00');

const result = calculateSolarPanelAngle(latitude, longitude, date);
console.log(result);
// { tiltAngle: 32.6113729028831, direction: 183.17967089929075 }


# Testing
To run the tests, you can use the following command

`npm test`
