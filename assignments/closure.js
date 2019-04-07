// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function car(commute) {
  let mileage = 0;
  let commutes = 0;

  return function() {
    mileage = mileage + commute;
    commutes++;

    return `This car has traveled ${commutes} times for a total of ${mileage} miles`;
  }
}

const car1 = car(30);
const car2 = car(25);

console.log(car1());
console.log(car1());
console.log(car1());

console.log(car2());
console.log(car2());










/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counter = 1;
  return () => counter++;
};

// Example usage:

const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2



// Another counter that takes a starting at parameter:
function counterWithStart(startAt) {
  let counter = startAt;
  return () => counter++;
}


// Example usage:

const counter1 = counterWithStart(10);
const counter2 = counterWithStart(5);

console.log('Counter 1 is now:', counter1());
console.log('Counter 1 is now:', counter1());
console.log('Counter 2 is now:', counter2());
console.log('Counter 1 is now:', counter1());
console.log('Counter 2 is now:', counter2());
console.log('Counter 2 is now:', counter2());
console.log('Counter 1 is now:', counter1());




// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
