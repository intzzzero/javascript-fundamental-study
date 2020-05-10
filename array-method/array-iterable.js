// 반복 메서드 : 배열의 모든 요소를 순회하며 특정한 작업을 수행하거나
// 특정 조건을 만족하는 요소를 가져올 때 사용하는 메서드
// 대부분 함수를 인수로 받는 고차함수

const fruits = ['apple', 'banana', 'melon', 'peach', 'blueberry'];

// forEach : 인수로 받은 함수를 요소 하나 하나마다 실행한다.
fruits.forEach((fruit) => console.log(`I Love ${fruit}`));
fruits.forEach((fruit, index) => {
  console.log(`${fruit} is ${index + 1}th fruit.`);
});

// map : 인수로 받은 함수를 요소별로 한 번씩 실행하며, 
// 함수가 반환한 값으로 새로운 배열을 생성한다.
// map 메서드의 인수로 넘기는 함수는 반드시 값을 반환해야 한다.
const myFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(myFruits); // ["APPLE", "BANANA", "MELON", "PEACH", "BLUEBERRY"]

const numbers = [1, 4, 9, 16, 25];
const sqrt = numbers.map(Math.sqrt);
console.log(sqrt); // [1, 2, 3, 4, 5]

const persons = [
  {name: 'Tom', age: 17},
  {name: 'James', age: 19},
  {name: 'Sam', age: 15}
];
const names = persons.map(person => person.name);
const ages = persons.map(person => person.age);
console.log(`names: ${names} / ages: ${ages}`);
// names: Tom,James,Sam / ages: 17,19,15

console.log(persons.map(person => person.name).map(name => name.length));
// [3, 5, 3]


// filter : 조건에 충족하는 요소만 걸러 새로운 배열로 반환
const includeM = fruits.filter((fruit) => fruit.includes('m'));
console.log(includeM); // ["melon"]

const longerThan5Length = fruits.filter(fruit => fruit.length > 5);
console.log(longerThan5Length); // ["banana", "blueberry"]