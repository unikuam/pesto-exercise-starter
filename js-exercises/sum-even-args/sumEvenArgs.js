const sumEvenArgs = (...args) => {
  let slicedArray = args.slice();
  let sumEven = slicedArray.reduce(function(accum, currentVal) {
    if (currentVal % 2 == 0)
      return accum + currentVal;
    else
      return accum;
  }, 0);
  return sumEven;
};
export { sumEvenArgs };
