const allPromises = args => {
  if (args === undefined) {
    return Promise.resolve();
  }

  let array = [];
  let argsEntries = args.entries();
  for (let index of argsEntries) {
    if (argsEntries[index] instanceof Promise) argsEntries[index].then(result => (array[index] = result));
    else array[index] = argsEntries[index];
  }

  return new Promise(resolve => resolve(array));
};

export {
  allPromises
};
