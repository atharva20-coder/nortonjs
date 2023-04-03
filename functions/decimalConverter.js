function convertNumber(num, baseFrom, baseTo) {
  if (baseFrom === 10 && baseTo === 2) {
    return parseInt(num).toString(2);
  } else if (baseFrom === 10 && baseTo === 8) {
    return parseInt(num).toString(8);
  } else if (baseFrom === 10 && baseTo === 16) {
    return parseInt(num).toString(16).toUpperCase();
  } else if (baseFrom === 2 && baseTo === 10) {
    return parseInt(num, 2);
  } else if (baseFrom === 8 && baseTo === 10) {
    return parseInt(num, 8);
  } else if (baseFrom === 16 && baseTo === 10) {
    return parseInt(num, 16);
  } else {
    throw new Error("Invalid input or output base");
  }
}

module.exports = convertNumber;
