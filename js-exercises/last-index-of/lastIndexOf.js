function lastIndexOf(...args) {
  let searchedValue = args[0];
  let list = args[1];
  for (let i = list.length; i >= 0; i--) {
    if (list[i] === searchedValue) {
      return i;
    }
  }
  return -1;
}
export {
  lastIndexOf,
};
