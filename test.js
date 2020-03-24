// test 1
function dist(p, q) {
  const dx = q.x - p.x;
  const dy = q.y - p.y;
  return Math.sqrt(dx * dx + dy * dy);
}

const p1 = {x: 1, y: 1};
const p2 = {x: 4, y: 5};
const d = dist(p1, p2);

console.log(d)

// test 2
console.log(square(5));

function square(x) {
  return x * x;
}

// test 3
function add1(x) {
  return x = x + 1;
}

var a = 3;
var b = add1(a);

console.log(`a = ${a}, b = ${b}`);

// test 4
function add1(p) {
  p.x = p.x + 1;
  p.y = p.y + 1;
  return p;
}

var a = {x:3, y:4};
var b = add1(a);

console.log(a, b);

// test 5
var a = 'global';

function f() {
  var b = 'local';
  console.log(a); // global
  return b;
}

f();
console.log(b); // ReferenceError: b is not defined

// test 6
function f() {
  console.log(a); // undefined
  var a = 'local';
  console.log(a); // local
  return a;
}

f();

// test 7
let a = 1;
a = 2;

console.log(a); // 2

let a = 3; // SyntaxError: Identifier 'a' has already been declared

// test 8
var a = 'global';
function d() {
  var a = 'local';
  console.log(a);
  return a;
}
d();
console.log(a);

// test 9
var circle = {
  center: { x:1.0, y:2.0 }, // 원의 중심
  radius: 2.5, // 원의 반지름
  area: function () { // 원의 넓이를 구하는 메서드
    return Math.PI * this.radius * this.radius;
  }
};

circle.translate = function(a, b) { // 새로운 메서드를 추가하여 원을 이동
  this.center.x = this.center.x + a;
  this.center.y = this.center.y + b;
};

circle.translate(1, 2);
circle.center; // {x: 2, y: 4}

// test 10
function Card(suit, rank) {
  this.suit = suit;
  this.rank = rank;
}

const card = new Card('Heart', 'A');
console.log(card); // Card { suit: 'Heart', rank: 'A' }

// test 11
class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }
}

const card = new Card('King', 'K');
console.log(card);

// test 12
function Animal (name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(this.name + ' make a noise.');
}

class Dog extends Animal {
  speak() {
    super.speak();
    console.log(this.name + ' bark.');
  }
}

const d = new Dog('Charls');
d.speak();
const s = new Animal('King');
s.speak();

// test 13
function Circle(center, radius) {
  this.center = center;
  this.radius = radius;
  this.area = function() {
    return Math.PI * this.radius * this.radius;
  };
}

const p = {x:0, y:0};
const c = new Circle(p, 2.0);
console.log("넓이 = " + c.area()); // 넓이 = 12.566370614359172

// test 14
const now = new Date();
const then = new Date(1988, 4, 7);
const elapsed = now - then;
const hours = Math.round(((elapsed / 1000) / 60) / 60, 0);
const days = Math.round(hours / 24, 0);
console.log(days + '일 살았습니다.');

// test 15
const beer = ['cass', 'hite', 'terra'];

const iLike = beer.map(item => 'I like ' + item);
console.log(iLike);

// test 16
console.log(a); // undefined
var a = 3;
console.log(a); // 3

// test 17
const a = ['A', 'B', 'C'];
a[4] = 'E';
console.log(a);

// test 18
const a = 1;
const b = 2;
const c = a !== b ? 'hello' : 'world';
console.log(c); // hello

// test 19
const randomString = 'microsoft';
const newString = randomString.replace('soft', 'hard');
console.log(randomString);
console.log(newString);

// test 20
for (let i = 1, sum = 0; i <= 10; i++) {
  sum += i;
  console.log(sum);
}

// test 21
function sumArray(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return sum;
}

const a = [3, 5, 1, 2, 6, 7];
console.log(sumArray(a)); // 24

// test 22
var a = [2, 5, 7, 12, 16, 32, 49], b = [4, 9, 14, 17, 22, 30, 32, 41];
loop: for (var i = 0; i < a.length; i++) {
  for (var j = 0; j < b.length; j++) {
    if (a[i] == b[j]) break loop;
  }
}

console.log(`a[${i}] = b[${j}]`);

// test 23
const a = [2, 5, -1, 7, -3, 6, 9, 15, 27];
for (var i = 0, sum = 0; i < a.length; i++) {
  if (a[i] < 0) continue;
  sum += a[i];
}

console.log(sum);

// test 24
function norm(x) {
  var sum2 = sumSquare();
  return Math.sqrt(sum2);
  function sumSquare() {
    sum = 0;
    for (var i = 0; i < x.length; i++) sum += x[i] * x[i];
    return sum;
  }
}

var a = [2, 1, 3, 5, 7];
var n = norm(a);

// test 25
function myConcat(separator) {
  var s = '';
  for (var i = 1; i < arguments.length; i++) {
    s += arguments[i];
    if (i < arguments.length - 1) s += separator;
  }
  return s;
}

console.log(myConcat('/', 'apple', 'orange', 'peach'));

// test 26
function say(greetings, honorifics) {
  console.log(greetings + '' + honorifics + this.name);
}

const tom = { name: 'Tom Sawyer' };
const becky = { name: 'Becky Thatcher' };
say.apply(tom, ['Hello! ', 'Mr.']); // Hello! Mr.Tom Sawyer
say.call(becky, 'Hi ', 'Ms.'); // Hi Ms.Becky Thatcher

// test 27
// arrow function
const square = (x) => {return x*x}; // 함수 표현식
const f = (x, y, z) => {...}; // 인수가 여럿이라면 쉼표로 구분
const square = x => {return x*x}; // 인수가 하나라면 괄호 생략 가능
const f = () => {...}; // 인수가 없을 때에는 빈 괄호 필수
const square = x => x*x; // 함수 바디에 return문만 있으면 return 생략 가능
const f = (a, b) => ({x:a, y:b}); // 반환값이 객체 리터럴이라면 괄호 필수
(x => x*x)(3); // 즉시실행함수(IIFE)로 화살표 함수 사용 가능