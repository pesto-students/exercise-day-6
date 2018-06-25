// When we call timeout, we need to get the greeting (Hello Pesto) asynchronously
// 1 (*)
// Would the following code work? If not, check out this function's test cases
// and correct the function.
const timeout = name => new Promise(() => {
  setTimeout(() => `Hello ${name}`, 300);
});

// 2 (*)
function sayHi(name) {
  const greeting = `Hey ${name}`;
  return greeting;
}

const getName = value => new Promise(() => value);

function greet(name) {
  const result = getName(name).then(sayHi);
  return result;
}

// 3 (*)
// Pass the tests for the following function
const rejectPromise = () => new Promise((resolve) => {
  const errorObject = 'REJECTED!';
  return setTimeout(() => resolve(errorObject), 3000);
});


// 4 (*)
function allPromises(arr) {
  return Promise.all(arr);
}

// 5 (*)
const sequentialPromise = arr => new Promise(() => {
  arr.reduce(
    (acc, cur) => {
      const ans = Promise.resolve(cur).then(data => data);
      return [...acc, ans];
    },
    [],
  );
});

// 6 (*)
// Implement a queue using ES6 class. See test cases for Queue
class Queue {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  queue(num) {
    this.items.push(num);
    this.count = this.items.length;
  }
  dequeue() {
    this.items.pop();
    this.count = this.items.length;
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
}

Person.prototype.addDobDigits = function addDobDigits() {
  return this.dateOfBirth.match(/\d/g).reduce((acc, item) => Number(acc) + Number(item));
};

module.exports = {
  timeout,
  greet,
  rejectPromise,
  allPromises,
  Queue,
  Person,
  sequentialPromise,
};
