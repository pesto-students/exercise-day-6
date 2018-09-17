function isPromise(item) {
  return Promise.resolve(item) === item;
}

module.exports = isPromise;
