function removeFalsyValues(array) {
  let filteredArray = array.filter(Boolean);
  return filteredArray;
}
export {
  removeFalsyValues,
};
