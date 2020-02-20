function dist(p, q) {
  const dx = q.x - p.x;
  const dy = q.y - p.y;
  return Math.sqrt(dx * dx + dy * dy);
}

const p1 = {x: 1, y: 1};
const p2 = {x: 4, y: 5};
const d = dist(p1, p2);

console.log(d)


console.log(square(5));

function square(x) {
  return x * x;
}

function add1(x) {
  return x = x + 1;
}

var a = 3;
var b = add1(a);

console.log(`a = ${a}, b = ${b}`);


function add1(p) {
  p.x = p.x + 1;
  p.y = p.y + 1;
  return p;
}

var a = {x:3, y:4};
var b = add1(a);

console.log(a, b);



