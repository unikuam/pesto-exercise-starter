function diffArray(arrayA, arrayB) {
  let mergedArray = arrayA.concat(arrayB);
  let duplicateCountObj = {};
  let diffArray = [];
  for (let value of mergedArray) {
    duplicateCountObj[value] = (duplicateCountObj[value] || 0) + 1;
  }
  for (let value in duplicateCountObj) {
    if (duplicateCountObj[value] <= 1) {
      diffArray.push(value);
    }
  }
  return diffArray;
}
export {
  diffArray,
};
