const calculatePerformanceMetrics = require("../functions/performanceMetrics");

describe("calculatePerformanceMetrics", () => {
  it("calculates the performance metrics correctly", () => {
    const num = [1];
    const deno = [1, 0.5, 1];
    const result = calculatePerformanceMetrics(num, deno);
    const expectedMetrics = {
      wN: 1,
      dampingRatio: 0.25,
      peakTime: 1.5707963267948966,
      maxOvershoot: 13.533528323661632,
    };
    expect(result[0]).toEqual(expectedMetrics[0]);
    expect(result[1]).toEqual(expectedMetrics[1]);
    expect(result[2]).toEqual(expectedMetrics[2]);
    expect(result[3]).toEqual(expectedMetrics[3]);
  });

  it("calculates the performance metrics correctly for a critically damped system", () => {
    const num = [1];
    const deno = [1, 4, 4];
    const result = calculatePerformanceMetrics(num, deno);
    const expectedMetrics = {
      wN: 2,
      dampingRatio: 1,
      peakTime: Infinity,
      maxOvershoot: 0,
    };
    expect(result[0]).toEqual(expectedMetrics[0]);
    expect(result[1]).toEqual(expectedMetrics[1]);
    expect(result[2]).toEqual(expectedMetrics[2]);
    expect(result[3]).toEqual(expectedMetrics[3]);
  });

  it("calculates the performance metrics correctly for an overdamped system", () => {
    const num = [1];
    const deno = [1, 4, 16];
    const result = calculatePerformanceMetrics(num, deno);
    const expectedMetrics = {
      wN: 4,
      dampingRatio: 2,
      peakTime: 0,
      maxOvershoot: 0,
    };
    expect(result[0]).toEqual(expectedMetrics[0]);
    expect(result[1]).toEqual(expectedMetrics[1]);
    expect(result[2]).toEqual(expectedMetrics[2]);
    expect(result[3]).toEqual(expectedMetrics[3]);
  });
});
