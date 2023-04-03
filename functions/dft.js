function dft(signal) {
  const N = signal.length;
  const result = new Array(N);
  for (let k = 0; k < N; k++) {
    let sumReal = 0;
    let sumImag = 0;
    for (let n = 0; n < N; n++) {
      const angle = (2 * Math.PI * k * n) / N;
      sumReal += signal[n] * Math.cos(angle);
      sumImag -= signal[n] * Math.sin(angle);
    }
    result[k] = { real: sumReal, imag: sumImag };
  }
  return result;
}

module.exports = dft;
