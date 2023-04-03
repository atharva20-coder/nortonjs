const dft = require("../functions/dft");

describe("dft", () => {
  test("returns an empty array for an empty input", () => {
    const signal = [];
    const result = dft(signal);
    const expected = [];
    expect(result).toEqual(expected);
  });

  test("returns an array with a single value for a single-element input", () => {
    const signal = [1];
    const result = dft(signal);
    const expected = [{ real: 1, imag: 0 }];
    expect(result).toEqual(expected);
  });
});
