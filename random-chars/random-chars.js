// // 수열 표시
// digits = '';
// for (let i = 0; i < 10; i++) {
//   digits += i;
// }
// console.log(digits);

// // 랜덤 문자열
// randomChars = '';
// for (let i = 0; i < 8; i++) {
//   randomChars += String.fromCharCode(Math.floor(Math.random() * 26) + 'a'.charCodeAt(0));
// }
// console.log(randomChars);

// 정리
function joinStrings(n, f) {
  let s = '';
  for (let i = 0; i < n; i++) {
    s += f(i);
  }
  return s;
}

const digits = joinStrings(10, function(i) {return i;});
const randomChars = joinStrings(8, function(i) {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 'a'.charCodeAt(0));
});
console.log(digits);
console.log(randomChars);