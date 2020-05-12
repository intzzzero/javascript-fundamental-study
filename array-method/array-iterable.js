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
	{ name: 'Tom', age: 17 },
	{ name: 'James', age: 19 },
	{ name: 'Sam', age: 15 }
];
const names = persons.map((person) => person.name);
const ages = persons.map((person) => person.age);
console.log(`names: ${names} / ages: ${ages}`);
// names: Tom,James,Sam / ages: 17,19,15

console.log(persons.map((person) => person.name).map((name) => name.length));
// [3, 5, 3]

// filter : 조건에 충족하는 요소만 걸러 새로운 배열로 반환
const includeM = fruits.filter((fruit) => fruit.includes('m'));
console.log(includeM); // ["melon"]

const longerThan5Length = fruits.filter((fruit) => fruit.length > 5);
console.log(longerThan5Length); // ["banana", "blueberry"]

// reduce : 배열을 기반으로 하나의 값을 도출할 때 사용함.
// reduce의 인수로 넘기는 함수의 첫 번째 인수는 accumulator(누산기)라고 할 수 있으며,
// 함수의 결과가 누적되어 저장되고 마지막 함수까지 호출되면 이 값이 reduce의 반환값이 된다.
const myNums = [1, 5, 3, 7, 9, 2];
const result = myNums.reduce((sum, current) => sum + current, 0);
console.log(result); // 27

// reduce에 전달된 함수는 위와 같이 두 개의 인수를 받는 게 일반적이다.
// 끝의 0은 reduce의 마지막 인수로 초깃값을 뜻하며 sum에 할당된다. 초깃값은 생략 가능하다.

let arr = [1, 4, 6, 9];
let newResult = arr.reduce((sum, current) => sum + current);
console.log(newResult); // 20

let emptyArr = [];
let newResult = emptyArr.reduce((sum, current) => sum + current);
console.log(newResult); // TypeError: Reduce of empty array with no initial value

let a = [3, 6, 7, 2];

// 모든 배열 요소의 곱
console.log(a.reduce((pre, val) => pre * val)); // 252

// 배열 요소 중 가장 큰 값
console.log(a.reduce((pre, val) => (pre > val ? pre : val))); // 7

let names = ['Tom', 'Jane', 'Sam'];

// 문자열 연결
console.log(names.reduce((pre, val) => pre + ' ' + val)); // Tom Jane Sam
