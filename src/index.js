// When we call timeout, we need to get the greeting (Hello Pesto) asynchronously
// 1 (*)
// Would the following code work? If not, check out this function's test cases
// and correct the function.
function timeout(name) {
  return new Promise(resolve => setTimeout(() => resolve(`Hello ${name}`), 300));
}

// 2 (*)
function sayHi(name) {
  const greeting = `Hey ${name}`;
  return greeting;
}

function getName(value) {
  return new Promise(resolve => resolve(value));
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

// 4 (*)
function allPromises(promises = []) {
  return Promise.all(promises);
}

// 5 (*)
function sequentialPromise(promises) {
  let result = promises[0]();
  let i = 1;
  while (i < promises.length) {
    result = result.then(promises[i]);
    i += 1;
  }
  return result;
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
    if (this.count === 0) throw new Error('Cannot dequeue from empty queue!');
    this.items.pop();
    this.count -= 1;
  }
}

// 7 (*)
// Convert the function below to ES6 class (*)
// function Person(firstName, lastName, dateOfBirth) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dateOfBirth = dateOfBirth;
// }

// Person.prototype.addDobDigits = function addDobDigits() {
//   return this.dateOfBirth.match(/\d/g).reduce((acc, item) => Number(acc) + Number(item));
// };

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
