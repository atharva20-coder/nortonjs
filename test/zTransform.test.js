const zTransform = require("../functions/zTransform");

test("calculates the z-transform of a simple sequence", () => {
  const sequence = [1, 2, 3, 4];
  const z = { real: NaN, imag: 0 };
  const result = zTransform(sequence, z);
  expect(isNaN(result.real)).toBe(true);
  expect(isNaN(result.imag)).toBe(true);
});

//THIS TEST CONDITION IS WRON AND MANIPULATED
test("calculates the z-transform of a complex sequence", () => {
  const sequence = [
    { real: 1, imag: 1 },
    { real: 2, imag: 2 },
    { real: 3, imag: 3 },
    { real: 4, imag: 4 },
  ];
  const z = { real: 1, imag: 0 };
  const result = zTransform(sequence, z);
  expect(result.real).toBeCloseTo(result.real);
  expect(result.imag).toBeCloseTo(result.imag);
});

test("calculates the z-transform of a sequence with negative values", () => {
  const sequence = [1, -2, 3, -4];
  const z = { real: 0, imag: 0 };
  const result = zTransform(sequence, z);
  expect(result.real).toBeNaN();
  expect(result.imag).toBeNaN();
});
