// Function to convert star to delta
function starToDelta(resistance) {
  const deltaR12 = (resistance[0] + resistance[1]) + ((resistance[0] * resistance[1])/resistance[2]);
  const deltaR13 = (resistance[0] + resistance[2]) + ((resistance[0] * resistance[2])/resistance[1]);
  const deltaR23 = (resistance[1] + resistance[3]) + ((resistance[1] * resistance[2])/resistance[0]);

  return { deltaR12, deltaR13, deltaR23 };
}

module.exports = starToDelta;
