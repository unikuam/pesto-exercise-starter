function duplicateLetters(...args) {
  let string = args[0];
  let unique_string_array = {};
  let is_duplicate = false;
  let number_array = [];
  for (let i = 0; i < string.length; i++) {
    unique_string_array[string[i]] = (unique_string_array[string[i]] || 0) + 1;
  }
  for (let i in unique_string_array) {
    if (unique_string_array[i] > 1) {
      is_duplicate = true;
      number_array.push(unique_string_array[i]);
    }
  }
  if (!is_duplicate) {
    return false;
  }
  return Math.max(...number_array);
}
export {
  duplicateLetters,
};
