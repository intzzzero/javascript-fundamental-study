// private member를 만드는 이유
// 1. 외부로부터의 접근 제한
// 2. 전역 스코프의 변수 최소화

/*
function init() {
  let name = 'codeAmeba';
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const newInit = init();
newInit();
*/

function makeAdder(x) {
  let y = 1;
  return function(z) {
    y = 100;
    return x + y + z;
  };
}

const add5 = makeAdder(5)(2);
const add10 = makeAdder(10)(2);

console.log(add5);
console.log(add10-5);

console.log(add5 === add10-5);
