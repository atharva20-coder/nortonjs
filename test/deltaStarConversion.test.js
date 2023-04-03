const deltaToStar = require("../functions/deltaStarConversion");

test("should convert a star circuit to a delta circuit", () => {
  const resistance = [6, 12, 18];
  const result = deltaToStar(resistance);
  const expectedMetrics = {
    deltaR1: 10,
    deltaR2: 20,
    deltaR3: 30,
  };

  expect(result[0]).toEqual(expectedMetrics[0]);
  expect(result[1]).toEqual(expectedMetrics[1]);
  expect(result[2]).toEqual(expectedMetrics[2]);
});
