// nested function
function sayHiBye(firstName, lastName) {
  function getFullName() {
    return firstName + ' ' + lastName;
  }
  console.log('Hello, ' + getFullName());
  console.log('Bye, ' + getFullName());
}

sayHiBye('John', 'Johnson');


function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}

let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());