// Like Promise.all but for object properties instead of iterated values. Returns a promise that
// is fulfilled when all the properties of the object are fulfilled. The promise's fulfillment
// value is an object with fulfilled values at respective keys to the original object. If any
// promise in the object rejects, the returned promise is rejected.

// promiseAllProps({
//     foo: Promise.resolve('foo'),
//     bar: Promise.resolve('bar')
// }).then(function(result) {
//     console.log(result.foo, result.bar);
// });

function promiseAllProps(obj) {
  const keys = Object.keys(obj);
  const promises = [];
  for (let i = 0; i < keys.length; i += 1) {
    promises.push(obj[keys[i]]);
  }

  const ret = {};
  return Promise.all(promises).then((results) => {
    for (let i = 0; i < results.length; i += 1) ret[keys[i]] = results[i];

    return ret;
  });
}

module.exports = promiseAllProps;
