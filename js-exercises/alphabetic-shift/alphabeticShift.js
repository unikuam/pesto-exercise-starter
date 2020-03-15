const alphabeticShift = inputString => {
  if (!inputString || typeof inputString != 'string') {
    throw new TypeError(`Expected String got ${typeof inputString}`);
    return false;
  }
  let shiftedString = '';
  for (let i = 0; i < inputString.length; i++) {
    let charUnicode = inputString.charCodeAt(i);
    charUnicode++;
    if (charUnicode == 91) charUnicode = 65;
    if (charUnicode == 123) charUnicode = 97;
    shiftedString += String.fromCharCode(charUnicode);
  }
  return shiftedString;
};
export {
  alphabeticShift
};
