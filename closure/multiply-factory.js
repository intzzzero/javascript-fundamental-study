function makeMultiplier(x) {
  return function(y) {
    return x * y;
  };
}

var multi2 = makeMultiplier(2);
var multi15 = makeMultiplier(15);

console.log(multi2(3)); // 6
console.log(multi15(3)); // 45