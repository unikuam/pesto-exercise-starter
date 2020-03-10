function isTriangle(sideA, sideB, sideC) {
  return (sideA + sideB > sideC && sideB + sideC > sideA && sideC + sideA > sideB);
}
export {
  isTriangle,
};
