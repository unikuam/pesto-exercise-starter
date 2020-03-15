function pathSatisfies(...args) {
  let functionToValidate = args[0];
  let pathArray = args[1];
  let objectToFetch = args[2];
  let error = false;
  pathArray.forEach((pathValue, i) => {
    const currentKeys = Object.keys(objectToFetch);
    if ((typeof pathValue == 'number' && objectToFetch.length < pathValue) ||
      (typeof pathValue == 'number' && typeof objectToFetch.length == 'undefined')) {
      return false;
    }
    if (typeof pathValue == 'string' && currentKeys.indexOf(pathValue) == -1) {
      error = true;
      return false;
    }
    let s = objectToFetch[pathValue]
    objectToFetch = s;
  });
  if (error) return false;
  return functionToValidate.call(this, objectToFetch);
}
const isPositive = n => n > 0;
export {
  pathSatisfies,
};
