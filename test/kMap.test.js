const solveKarnaugh = require("../functions/kMap");

// Test case 1: Simple 2-variable example with minterms and don't cares
let minterms1 = [0, 1, 2, 5];
let dontCares1 = [3];
let expected1 = "A'B' + A'C' + AB";
let result1 = solveKarnaugh(minterms1, dontCares1);
if (result1 === expected1) {
  console.log("Test case 1 passed");
} else {
  console.error("Test case 1 failed");
}

// Test case 2: 3-variable example with minterms and don't cares
let minterms2 = [0, 2, 4, 5, 6];
let dontCares2 = [1, 7];
let expected2 = "A'B'C + AB'C + BC'";
let result2 = solveKarnaugh(minterms2, dontCares2);
if (result2 === expected2) {
  console.log("Test case 2 passed");
} else {
  console.error("Test case 2 failed");
}

// Test case 3: 4-variable example with no don't cares
let minterms3 = [0, 2, 5, 6, 9, 10, 11, 12, 13, 15];
let expected3 = "A'B'CD' + A'BC'D' + AB'C'D + ABCD'";
let result3 = solveKarnaugh(minterms3, []);
if (result3 === expected3) {
  console.log("Test case 3 passed");
} else {
  console.error("Test case 3 failed");
}

// Test case 4: 5-variable example with all don't cares
let minterms4 = [3, 6, 10, 11, 13, 15];
let dontCares4 = [0, 1, 2, 4, 5, 7, 8, 9, 12, 14];
let expected4 = "X";
let result4 = solveKarnaugh(minterms4, dontCares4);
if (result4 === expected4) {
  console.log("Test case 4 passed");
} else {
  console.error("Test case 4 failed");
}

// Test case 5: 6-variable example with minterms and don't cares
let minterms5 = [1, 3, 5, 7, 8, 9, 10, 11, 14, 15];
let dontCares5 = [0, 2, 4, 6, 12, 13];
let expected5 = "A'BC' + A'D' + B'C'D + BC'D' + C'D'";
let result5 = solveKarnaugh(minterms5, dontCares5);
if (result5 === expected5) {
  console.log("Test case 5 passed");
} else {
  console.error("Test case 5 failed");
}
