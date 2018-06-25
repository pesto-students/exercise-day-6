// When we call timeout, we need to get the greeting (Hello Pesto) asynchronously
// 1 (*)
// Would the following code work? If not, check out this function's test cases
// and correct the function.
function timeout(name) {
  return new Promise(() => {
    setTimeout(() => `Hello ${name}`, 300);
  });
}

// 2 (*)
function sayHi(name) {
  return Promise.resolve(`Hey ${name}`);
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
    const errorObject = 'Rejected';
    setTimeout(() => reject(errorObject), 300);
  });
  return promise.catch(() => 'REJECTED!');
}

// 4 (*)
function allPromises(arr) {
  return Promise.all(arr);
}

// 5 (*)
function sequentialPromise() {

}

// 6 (*)
// Implement a queue using ES6 class. See test cases for Queue
class Queue {
  constructor(items = [], count = 0) {
    this.items = items;
    this.count = count;
  }

  queue(element) {
    this.items.push(element);
    this.count += 1;
  }

  dequeue() {
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
