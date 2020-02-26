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