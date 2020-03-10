function sumPrimes(number) {
  let primeSum = 0;
  for (let i = 2; i <= number; i++) {
    if (isPrime(i)) {
      primeSum += i;
    }
  }
  return primeSum;
}

function isPrime(number) {
  let sqrtnum = Math.floor(Math.sqrt(number));
  for (let i = 2; i <= sqrtnum; i++) {
    if (number % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}
export {
  sumPrimes,
};
