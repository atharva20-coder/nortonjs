// Function to convert star to delta
function starToDelta(resistance) {
  const deno = resistance[0] + resistance[1] + resistance[2];
  const deltaR1 = (resistance[0] * resistance[1]) / deno;
  const deltaR2 = (resistance[1] * resistance[2]) / deno;
  const deltaR3 = (resistance[2] * resistance[0]) / deno;

  return { deltaR1, deltaR2, deltaR3 };
}

module.exports = starToDelta;
