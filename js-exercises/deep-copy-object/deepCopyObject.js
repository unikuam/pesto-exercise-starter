const deepCopyObject = objToCopy => {
  if (objToCopy === null || typeof objToCopy !== 'object') {
    return objToCopy;
  }
  var newStorage = {};
  for (var key in objToCopy) {
    newStorage[key] = deepCopyObject(objToCopy[key]);
  }
  return newStorage;
};
export {
  deepCopyObject
};
