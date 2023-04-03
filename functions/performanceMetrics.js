function calculatePerformanceMetrics(numerator, denominator) {
  // Calculate natural frequency
  const wN = Math.sqrt(numerator);

  // Damping ratio
  const dampingRatio = denominator[1] / (2 * wN);

  //Peak Time
  const peakTime = Math.PI / (wN * Math.sqrt(1 - dampingRatio ** 2));

  // Calculate maximum overshoot
  const maxOvershoot =
    Math.exp(-(Math.PI * dampingRatio) / Math.sqrt(1 - dampingRatio ** 2)) *
    100;

  return { wN, dampingRatio, peakTime, maxOvershoot };
}

module.exports = calculatePerformanceMetrics;
