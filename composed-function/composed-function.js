// 인수 하나만 받을 때
// function compose(f, g) {
//   return function(x) {
//     return f(g(x));
//   };
// }

// 인수 여러 개 받을 때
function compose(f, g) {
  return function() {
    return f.call(this, g.apply(this, arguments));
  };
}

const square = function(x) {
  return x * x;
};

const add1 = function(x) {
  return x + 1;
};

const h = compose(square, add1);
console.log(h(2)); // 9