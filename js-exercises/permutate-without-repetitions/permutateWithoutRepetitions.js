/**
 * @param {*[]} permutationOptions
 * @return {*[]}
 */
function permutateWithoutRepetitions(permutationOptions) {
  if (!permutationOptions || !Array.isArray(permutationOptions)) {
    throw new TypeError(`Expected array got ${typeof permutationOptions}`);
    return false;
  }
  let string = permutationOptions.join("");
  let permutations = permutate(string);
  return Array.isArray(permutations) ? permutations.map(sequence => sequence.split("")) : [permutations.split("")];
}

function permutate(string) {
  if (!string || typeof string != 'string') {
    throw new TypeError(`Expected string got ${typeof string}`);
    return false;
  }
  if (string.length < 2) {
    return string;
  }
  let permutations = [];
  let permutationString = '';
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    // if (string.indexOf(char) != i) continue;
    let remainingString = string.slice(0, i) + string.slice(i + 1, string.length);
    for (let subPermutation of permutate(remainingString)) {
      permutations.push(char + subPermutation);
    }
  }
  return permutations;
}
export {
  permutateWithoutRepetitions
};
