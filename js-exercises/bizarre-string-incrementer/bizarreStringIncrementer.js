import {
  getNumberOfZerosToBePaddedAndIncrementedNumber,
  padZerosToNumberPart
} from './processStringIncrement';

function bizarreStringIncrementer(string) {
  let stringArray = string.split("");
  stringArray.reverse();
  let numberPart = [];
  let stringPart = [];
  //separte number & string part
  for (let char of stringArray) {
    if (!isNaN(char) && char != null && char != 'undefined' && !stringPart.length) numberPart.push(char);
    else stringPart.push(char);
  }
  //get numbers of zeros to be padded & incremented number
  let stringZerosAndIncrementObj = getNumberOfZerosToBePaddedAndIncrementedNumber(numberPart);
  return stringPart.reverse().join("") + padZerosToNumberPart(stringZerosAndIncrementObj.updatedNumberOfZerosToBePadded,
    stringZerosAndIncrementObj.increamentedNumber);
}

export {
  bizarreStringIncrementer
}
