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