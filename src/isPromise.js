function isPromise(p) {
  if (p instanceof Promise) return true;
  return false;
}


module.exports = isPromise;
