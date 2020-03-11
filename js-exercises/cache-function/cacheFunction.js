function cacheFunction(foo) {
  var cache = {};
  return function() {
    let cacheArgs = JSON.stringify(arguments);
    if (cache[cacheArgs]) {
      return cache[cacheArgs];
    } else {
      let result = foo.apply(this, arguments);
      cache[cacheArgs] = result;
      return result;
    }
  }
}
export {
  cacheFunction,
};
