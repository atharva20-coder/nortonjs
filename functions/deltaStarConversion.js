// Function to convert star to delta
function deltaToStar(resistance) {
  const deno = resistance[0] + resistance[1] + resistance[2];
  const starR1 = (resistance[0] * resistance[1]) / deno;
  const starR2 = (resistance[1] * resistance[2]) / deno;
  const starR3 = (resistance[2] * resistance[1]) / deno;

  return { starR1, starR2, starR3 };
}

module.exports = deltaToStar;

//0 ->R12
//1 ->R13
//2 ->R23
