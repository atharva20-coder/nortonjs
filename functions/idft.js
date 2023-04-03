function idft(frequencyDomain) {
  const N = frequencyDomain.length;
  const result = new Array(N);
  for (let n = 0; n < N; n++) {
    let sumReal = 0;
    let sumImag = 0;
    for (let k = 0; k < N; k++) {
      const angle = (2 * Math.PI * k * n) / N;
      sumReal +=
        frequencyDomain[k].real * Math.cos(angle) -
        frequencyDomain[k].imag * Math.sin(angle);
      sumImag +=
        frequencyDomain[k].real * Math.sin(angle) +
        frequencyDomain[k].imag * Math.cos(angle);
    }
    result[n] = sumReal / N;
  }
  return result;
}

module.exports = idft;
