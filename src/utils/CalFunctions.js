const bothValidNumbers = (numA, numB) => {
  const validA = isNaN(numA);
  const validB = isNaN(numB);

  if (validA && validB) return "Both inputs need to be a valid number.";
  if (validA) return "First input needs to be a valid number.";
  if (validB) return "Second input needs to be a valid number.";

  return "";
}

export const add = (numA, numB) => {
  const validResult = bothValidNumbers(numA, numB);
  return validResult === "" ? numA + numB : validResult;
};

export const subtract = (numA, numB) => {
  return numA - numB;
};

export const multiply = (numA, numB) => {
  return numA * numB;
};
