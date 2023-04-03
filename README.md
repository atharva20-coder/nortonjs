ADD "test:kMap": "jest test/kMap.test.js" TO SCRIPTS in package.json FOR KMAP

#Nortonjs

##Laplace Transform Calculator
This is a simple Laplace transform calculator that can compute the Laplace transform of a function in terms of 's'.

###Usage
The laplaceTransform function takes three arguments:

`f`: The function to transform
`s`: The value of 's' in the Laplace transform
`tMax`: The maximum value of 't' in the time domain (optional, defaults to infinity)

`import laplaceTransform from './laplaceTransform.js';

const f = t => t ** 2;
const s = 2;
const tMax = 10;

const laplace = laplaceTransform(f, s, tMax);
console.log(laplace); // L(s) = 2.6666666666666665/(s^3)
`

The f argument should be a function that takes a single input argument t and returns a number. The Laplace transform of the function will be computed over the interval [0, tMax].

The laplaceTransform function returns a string representing the Laplace transform of the function in terms of 's'.

#Testing
To run the tests, you can use the following command

`npm test`
