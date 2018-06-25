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

function promiseAllProps(object) {
  const keys = Object.keys(object);
  const values = Object.values(object);

  return Promise.all(values).then(results =>
    keys.reduce((fulfilledObject, key, index) => {
      fulfilledObject[key] = results[index]; // eslint-disable-line
      return fulfilledObject;
    }, {}));
}

module.exports = promiseAllProps;
