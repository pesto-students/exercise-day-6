function isPromise(arg) {
  return Promise.resolve(arg) === arg;
}

module.exports = isPromise;
