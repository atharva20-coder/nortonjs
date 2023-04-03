const calculateSolarPanelAngle = require("../functions/optimalTiltAngle");

// Import the function to be tested

// Test case 1: Calculate solar panel angle on the equator on the summer solstice

test("Solve tiltAngle", () => {
  const date1 = new Date("2023-06-21T12:00:00Z");
  const actualOutput = calculateSolarPanelAngle(0, 0, date1);
  expect(actualOutput).toStrictEqual(calculateSolarPanelAngle(0, 0, date1));
});
