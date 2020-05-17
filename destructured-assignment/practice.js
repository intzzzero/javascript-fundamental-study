// 구조 분해 할당

// 배열
let users = ['codeAmeba', 'codeMonkey'];
let [firstUser, secondUser] = users;
console.log(users);
console.log(firstUser);

// 객체
let member = {
  name: 'codeAmeba',
  position: 'Front-end',
  skills: ['HTML', 'CSS', 'JavaScript'],
}

// let { name, age: howOld = 32, location: whereAreYou = 'Seoul' } = member;
// console.log(howOld);

let option = {
  title: 'menu',

};

let {width: w = 100, height: h = 200, title} = option;
console.log(title, w, h);


var array, first, second;
array = [first, second] = [1, 2, 3, 4];
console.log('first : ' + first, 'second : ' + second, 'array : ' + array); // first : 1 second : 2 array : 1,2,3,4

// ...(spread operator)를 통해 남는 값을 모두 rest에 배열로 할당
var [a, b, ...rest] = [1, 2, 3, 4];
console.log(a, b, rest);

// iterable object destructuring
function* createNumber(from, to) {
  while (from <= to) yield from++;
}
var [a, b, c, d, e] = createNumber(10, 15);
console.log(a, b, c, d, e);