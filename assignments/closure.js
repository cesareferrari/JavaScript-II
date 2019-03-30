// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function car(commute) {
  let mileage = 0;
  let commutes = 0;

  return function() {
    mileage = mileage + commute;
    commutes++;

    return `This car has traveled ${commutes} times and has a total mileage of ${mileage} miles`;
  }
}

const car1 = car(30);

console.log(car1());
console.log(car1());
console.log(car1());







function counterCreator(startAt) {
  let counter = startAt;

  return function() {
    return counter++;
  }
}

const counter1 = counterCreator(10);
const counter2 = counterCreator(5);


console.log('Counter 1 is now:', counter1());
console.log('Counter 1 is now:', counter1());
console.log('Counter 2 is now:', counter2());
console.log('Counter 1 is now:', counter1());
console.log('Counter 2 is now:', counter2());
console.log('Counter 2 is now:', counter2());
console.log('Counter 1 is now:', counter1());





/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
