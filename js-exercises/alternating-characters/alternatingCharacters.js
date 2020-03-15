function alternatingCharacters(arr) {
  return arr.filter(filterOutNonString).map(alterationCalculations);
}

function alterationCalculations(sequence) {
  let sequenceArray = sequence.split("");
  let sequenceStack = [];
  for (let character = 0; character < (sequenceArray.length - 1); character++) {
    sequenceStack.push(sequenceArray[character]);
    if (sequenceStack[sequenceStack.length - 1] != sequenceArray[character + 1]) {
      sequenceStack.pop();
    }
  }
  return sequenceStack.length;
}

function filterOutNonString(sequence) {
  return typeof sequence == 'string';
}

export {
  alternatingCharacters
};
