function zTransform(sequence) {
  const n = sequence.length;
  const z = { real: 0, imag: 1 };
  let result = { real: 0, imag: 0 };
  for (let i = 0; i < n; i++) {
    const a = sequence[i];
    const b = {
      real: Math.cos((-2 * Math.PI * i) / n),
      imag: Math.sin((-2 * Math.PI * i) / n),
    };
    const c = {
      real: a.real * b.real - a.imag * b.imag,
      imag: a.real * b.imag + a.imag * b.real,
    };
    const d = {
      real: z.real * b.real - z.imag * b.imag,
      imag: z.real * b.imag + z.imag * b.real,
    };
    result.real += c.real * d.real - c.imag * d.imag;
    result.imag += c.real * d.imag + c.imag * d.real;
  }
  return result;
}

module.exports = zTransform;
