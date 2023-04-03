const calculateTwosComplement = require("../functions/twosComplement");

// Test positive binary number

// Test negative binary number
test("calculateTwosComplement: negative binary number", () => {
  const binary = "111011";
  const expected = "000101";
  expect(calculateTwosComplement(binary)).toBe(expected);
});

// Test binary number with leading zeros
test("calculateTwosComplement: binary number with leading zeros", () => {
  const binary = "0010101";
  const expected = "1101011";
  expect(calculateTwosComplement(binary)).toBe(expected);
});

// Test binary number with all zeros
test("calculateTwosComplement: binary number with all zeros", () => {
  const binary = "000000";
  const expected = "000000";
  expect(calculateTwosComplement(binary)).toBe(expected);
});

// Test binary number with all ones
test("calculateTwosComplement: binary number with all ones", () => {
  const binary = "111111";
  const expected = "000001";
  expect(calculateTwosComplement(binary)).toBe(expected);
});
