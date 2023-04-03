function calculateTwosComplement(binary) {
  // Calculate the number of bits
  const numBits = binary.length;

  // Find the position of the least significant bit of the ones complement
  let position = numBits - 1;
  while (binary[position] !== "1" && position >= 0) {
    position--;
  }

  // If the number is positive, return the binary number as is
  if (position === -1) {
    return binary;
  }

  // Calculate the ones complement
  let onesComplement = "";
  for (let i = 0; i < numBits; i++) {
    onesComplement += binary[i] === "0" ? "1" : "0";
  }

  // Calculate the twos complement
  let twosComplement = "";
  for (let i = 0; i < numBits; i++) {
    if (i < position) {
      twosComplement += onesComplement[i];
    } else {
      twosComplement += binary[i];
    }
  }

  return twosComplement;
}

module.exports = calculateTwosComplement;
