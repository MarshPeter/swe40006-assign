const validNumbers = (numA, numB) => {
  const validA = isNaN(numA);
  const validB = isNaN(numB);

  if (validA && validB) return "Both inputs need to be a valid number.";
  if (validA) return "First input needs to be a valid number.";
  if (validB) return "Second input needs to be a valid number.";

  return "";
}

export const add = (numA, numB) => {
  const areValidNumbers = validNumbers(numA, numB);
  return areValidNumbers === "" ? numA + numB : areValidNumbers;
};

export const subtract = (numA, numB) => {
  const areValidNumbers = validNumbers(numA, numB);
  return areValidNumbers === "" ? numA - numB : areValidNumbers;
};

export const multiply = (numA, numB) => {
  const areValidNumbers = validNumbers(numA, numB);
  return areValidNumbers === "" ? numA * numB: areValidNumbers;
};
