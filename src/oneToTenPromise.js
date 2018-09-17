// delay boundaries (in seconds)
const MIN_DELAY = 1;
const MAX_DELAY = 5;

// returns an integer in [lo, hi]
function randInt(lo, hi) {
  return Math.floor(lo + (Math.random() * ((hi + 1) - lo)));
}

function promiseToPrintNumAfterRandomDelay(i, minDelay = MIN_DELAY, maxDelay = MAX_DELAY) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // eslint-disable-next-line
      console.log(i);

      resolve();
    }, 1000 * randInt(minDelay, maxDelay));
  });
}

function oneToTenPromise() {
  let promise;

  for (let i = 1; i <= 10; i += 1) {
    if (promise instanceof Promise) {
      promise = promise.then(() => promiseToPrintNumAfterRandomDelay(i));
    } else {
      promise = promiseToPrintNumAfterRandomDelay(i);
    }
  }

  return promise;
}

oneToTenPromise();
