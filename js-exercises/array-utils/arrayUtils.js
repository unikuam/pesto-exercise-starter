//For each function implementation
function forEach(array, invokedFunction) {
  if (typeof invokedFunction != 'function') {
    throw new Error('Function provided in Foreach parameter is not present in defined scope. Provided function should be callable.');
    return;
  }
  let keys = Object.keys(array);
  for (let i = 0; i < keys.length; i++) {
    if (array.hasOwnProperty(keys[i])) {
      invokedFunction(array[keys[i]], keys[i], array);
    }
  }
}

//Map function implementation
function map(array, invokedFunction) {
  if (typeof invokedFunction != 'function') {
    throw new Error('Function provided in Map parameter is not present in defined scope. Provided function should be callable.');
    return;
  }
  let keys = Object.keys(array);
  let mappedArray = [];
  for (let i = 0; i < keys.length; i++) {
    if (array.hasOwnProperty(keys[i])) {
      mappedArray.push(invokedFunction(array[keys[i]]));
    }
  }
  return mappedArray;
}

//Filter function implementation
function filter(array, invokedFunction) {
  if (typeof invokedFunction != 'function') {
    throw new Error('Function provided in filter parameter is not present in defined scope. Provided function should be callable.');
    return;
  }
  let keys = Object.keys(array);
  let filteredArray = [];
  for (let i = 0; i < keys.length; i++) {
    if (array.hasOwnProperty(keys[i])) {
      filteredArray.push(array[keys[i]]);
    }
  }
  return filteredArray;
}

//Reduce function implementation
function reduce(array, invokedFunction, initialValue) {
  if (typeof invokedFunction != 'function') {
    throw new Error('Function provided in reduce parameter is not present in defined scope. Provided function should be callable.');
    return;
  }
  let keys = Object.keys(array);
  let startKey = 0;
  let prevReturnedValue = '';
  if (typeof initialValue != 'undefined') {
    prevReturnedValue = initialValue;
  } else {
    prevReturnedValue = array[keys[0]];
    startKey = 1;
  }
  for (let i = startKey; i < keys.length; i++) {
    if (array.hasOwnProperty(keys[i])) {
      prevReturnedValue = invokedFunction(prevReturnedValue, array[keys[i]], keys[i], array);
    }
  }
  return prevReturnedValue;
}

export {
  forEach,
  map,
  filter,
  reduce,
}
