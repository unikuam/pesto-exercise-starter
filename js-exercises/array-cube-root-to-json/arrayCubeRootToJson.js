const arrayCubeRootToJson = arr => {
  if (!Array.isArray(arr)) {
    throw new TypeError(`Expected Array got ${typeof arr}`);
    return false;
  }
  if (!arr.every(validateArray)) {
    throw new TypeError(`Expected Number type values in array but found boolean or object or string type.`);
    return false;
  }
  let jsonCubeRoot = {};
  arr.forEach((number, i) => {
    jsonCubeRoot[number] = Math.cbrt(number);
  });
  return jsonCubeRoot;
};

function validateArray(arrayElement) {
  if (!arrayElement) return false;
  return (typeof arrayElement == 'number' || !isNaN(arrayElement));
}
export {
  arrayCubeRootToJson
};
