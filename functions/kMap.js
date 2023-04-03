function solveKarnaugh(minterms, dontCares) {
  // Define the number of variables
  const numVariables = Math.log2(minterms.length + dontCares.length);

  // Generate the Karnaugh map
  const kMap = [];
  for (let i = 0; i < Math.pow(2, numVariables); i++) {
    kMap.push([]);
    for (let j = 0; j < numVariables; j++) {
      kMap[i].push(0);
    }
  }
  minterms.forEach((minterm) => {
    kMap[mintermToRow(minterm, numVariables)][
      mintermToColumn(minterm, numVariables)
    ] = 1;
  });
  dontCares.forEach((dontCare) => {
    kMap[mintermToRow(dontCare, numVariables)][
      mintermToColumn(dontCare, numVariables)
    ] = "X";
  });

  // Generate the Boolean expression
  const primeImplicants = findPrimeImplicants(kMap);
  const essentialPrimeImplicants = findEssentialPrimeImplicants(
    primeImplicants,
    numVariables
  );
  return generateExpression(essentialPrimeImplicants);
}

// Helper function to convert a minterm to a row in the Karnaugh map
function mintermToRow(minterm, numVariables) {
  let row = 0;
  for (let i = numVariables - 1; i >= 0; i--) {
    if (minterm % 2 === 1) {
      row += Math.pow(2, i);
    }
    minterm = Math.floor(minterm / 2);
  }
  return row;
}

// Helper function to convert a minterm to a column in the Karnaugh map
function mintermToColumn(minterm, numVariables) {
  let column = 0;
  for (let i = numVariables - 1; i >= 0; i--) {
    if (minterm % 2 === 1) {
      column += Math.pow(2, numVariables - 1 - i);
    }
    minterm = Math.floor(minterm / 2);
  }
  return column;
}

module.exports = solveKarnaugh;
