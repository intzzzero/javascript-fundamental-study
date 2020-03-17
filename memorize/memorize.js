// function memorize(f) {
//   let cache = {};
//   return function(x) {
//     if (cache[x] === undefined) {
//       cache[x] = f(x);
//     }
//     return cache[x];
//   };
// }

// 인수를 여러 개 받을 수 있는 메모이제이션
function memorize(f) {
  let cache = {};
  return function() {
    let key = '';
    for (let i = 0; i < arguments.length; i++) {
      key += arguments[i] + ',';
    }
    if (cache[key] === undefined) {
      cache[key] = f.apply(null, arguments);
    }
    return cache[key];
  };
}

function isPrime(n) {
  if (n < 2) return false;
  const m = Math.sqrt(n);
  for (let i = 2; i <= m; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true;
}

const isPrime_memo = memorize(isPrime);
const N = 1000;
for (let i = 2; i <= N; i++) {
  isPrime_memo(i);
}
for (let i = 2; i+2 <= N; i++) {
  if (isPrime_memo(i) && isPrime_memo(i+2)) {
    console.log(i + ',' + (i+2));
  }
}