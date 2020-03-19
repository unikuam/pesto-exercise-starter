const INCREMENT_NUMBER = 1;

function getNumberOfZerosToBePaddedAndIncrementedNumber(numberPart) {
  if (!numberPart.length) numberPart = [0];
  numberPart.reverse();
  let numberOfZerosToBePadded = getNumberOfZerosToBePadded(numberPart);
  return getZerosAndIncrementedNumber(numberOfZerosToBePadded, numberPart);
}

function getZerosAndIncrementedNumber(numberOfZerosToBePadded, numberPart) {
  let numberPartToString = numberPart.join("");
  let increamentedNumber = parseInt(numberPartToString) + INCREMENT_NUMBER;
  let stringObj = {
    numberPartToString,
    increamentedNumber,
    numberOfZerosToBePadded
  }
  let updatedNumberOfZerosToBePadded = getUpdatedNumberOfZeroBasedOnIncrementedNumber(stringObj);
  return {
    updatedNumberOfZerosToBePadded,
    increamentedNumber
  };
}

function getUpdatedNumberOfZeroBasedOnIncrementedNumber(stringObj) {
  let numberOfZerosToBePadded = '';
  if (stringObj.increamentedNumber.toString().length == stringObj.numberPartToString.length) {
    numberOfZerosToBePadded = 0;
  } else if (stringObj.numberPartToString.length > stringObj.increamentedNumber.toString().length) {
    numberOfZerosToBePadded = stringObj.numberPartToString.length - stringObj.increamentedNumber.toString().length;
  }
  return numberOfZerosToBePadded;
}

function getNumberOfZerosToBePadded(numberPart) {
  let numberOfZerosToBePadded = 0;
  let paddingZeroEndsAt = 0;
  for (let number of numberPart) {
    if (parseInt(number) == 0 && paddingZeroEndsAt == 0) numberOfZerosToBePadded++;
    else paddingZeroEndsAt = 1;
  }
  return numberOfZerosToBePadded;
}

function padZerosToNumberPart(zerosToBePadded, number) {
  let numberString = '';
  while (zerosToBePadded > 0) {
    numberString = '0' + numberString;
    zerosToBePadded--;
  }
  return numberString + number;
}

export {
  getNumberOfZerosToBePaddedAndIncrementedNumber,
  padZerosToNumberPart
}
