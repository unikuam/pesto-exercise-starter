function sumFibs(fibNum) {
  let fibFirst = 1;
  let fibSecond = 1;
  let fibSum = fibFirst + fibSecond;
  let nextTerm = 0;
  do {
    nextTerm = fibFirst + fibSecond;
    if (nextTerm % 2 != 0)
      fibSum = fibSum + nextTerm;
    fibFirst = fibSecond;
    fibSecond = nextTerm;
  } while (nextTerm <= fibNum);
  return (fibSum - nextTerm);
}
export {
  sumFibs,
};
