// When we call timeout, we need to get the greeting (Hello Pesto) asynchronously
// 1 (*)
// Would the following code work? If not, check out this function's test cases
// and correct the function.
function timeout(name) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Hello ${name}`), 300);
  });
}

// 2 (*)
function sayHi(name) {
  const greeting = `Hey ${name}`;
  return greeting;
}

function getName(value) {
  return Promise.resolve(value);
}

function greet(name) {
  const result = getName(name).then(sayHi);
  return result;
}

// 3 (*)
// Pass the tests for the following function
function rejectPromise() {
  const promise = new Promise((resolve, reject) => {
    const errorObject = 'REJECTED!';
    setTimeout(() => reject(errorObject), 300);
  });

  return promise.catch(err => err);
}

// rejectPromise().then(val => console.log(val));
// 4 (*)
function allPromises(promArr = []) {
  const newProm = promArr.map(prom => Promise.resolve(prom));
  return Promise.all(newProm);
}

// 5 (*)
function sequentialPromise(promArr) {
  return promArr.reduce((acc, prom) => acc.then(prom), Promise.resolve());
}

// 6 (*)
// Implement a queue using ES6 class. See test cases for Queue
class Queue {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  queue(item) {
    this.items.push(item);
    this.count += 1;
  }
  dequeue() {
    this.items.pop();
    this.count -= 1;
  }
}

// 7 (*)
// Convert the function below to ES6 class (*)
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }
  addDobDigits() {
    return this.dateOfBirth.match(/\d/g).reduce((acc, item) => Number(acc) + Number(item));
  }
}

module.exports = {
  timeout,
  greet,
  rejectPromise,
  allPromises,
  Queue,
  Person,
  sequentialPromise,
};
