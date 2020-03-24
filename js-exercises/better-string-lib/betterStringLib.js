function BetterStringLib() {
  this.reverse = (str) => {
    return [...str.normalize('NFC')].reverse().join("").normalize('NFD');
  }
  this.equal = (str1, str2) => {
    return str1.normalize('NFC') == str2.normalize('NFC');
  }
}
export {
  BetterStringLib,
};
