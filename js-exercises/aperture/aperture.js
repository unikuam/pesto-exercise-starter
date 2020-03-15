function aperture(tuple, array) {
  if (array.length < tuple) return [];
  if (tuple == 0) return array;
  let aperture = [];
  for (let i = 0; i < (array.length - (tuple - 1)); i++) {
    aperture.push(array.slice(i, i + tuple));
  }
  return aperture;
}
const sevenLs = [1, 2, 3, 4, 5, 6, 7];
export {
  aperture
};
