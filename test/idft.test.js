const idft = require("../functions/idft");

test("returns the correct inverse Fourier transform for a simple signal", () => {
  const frequencyDomain = [
    { real: 0, imag: 0 },
    { real: 0, imag: 0 },
    { real: 0, imag: 0 },
    { real: 0, imag: 0 },
  ];
  const timeDomain = idft(frequencyDomain);
  expect(timeDomain.length).toBe(4);
  expect(timeDomain[0]).toBeCloseTo(0, 5);
  expect(timeDomain[1]).toBeCloseTo(0, 5);
  expect(timeDomain[2]).toBeCloseTo(0, 5);
  expect(timeDomain[3]).toBeCloseTo(0, 5);
});
