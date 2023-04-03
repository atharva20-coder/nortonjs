const starToDelta = require("../functions/starDeltaConversion");

test("should convert a star circuit to a delta circuit", () => {
  const resistance = [10, 20, 30];
  const result = starToDelta(resistance);
  const expectedMetrics = {
    deltaR1: 6,
    deltaR2: 12,
    deltaR3: 18,
  };

  expect(result[0]).toEqual(expectedMetrics[0]);
  expect(result[1]).toEqual(expectedMetrics[1]);
  expect(result[2]).toEqual(expectedMetrics[2]);
});
