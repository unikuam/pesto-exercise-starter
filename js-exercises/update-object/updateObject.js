function updateObject(...args) {
  let arrayToUpdate = args[2];
  return arrayToUpdate.replaceAt(args[0], args[1]);
}

Array.prototype.replaceAt = function(position, replaceWith) {
  if (!(this.length - 1 >= Math.abs(position) || (position < 0 && this.length >= Math.abs(position)))) return this;
  return position < 0 ?
    this.slice(0, this.length + position).concat([replaceWith], this.slice(this.length + position + 1, this.length)) :
    this.slice(0, position).concat([replaceWith], this.slice(position + 1, this.length));
}
export {
  updateObject,
};
