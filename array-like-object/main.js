// 유사 배열 객체(Array-like object)
// 배열은 아니지만 배열로 처리할 수 있는 객체로써 다음과 같은 특징이 있다.
// 1.  0 이상의 정수 값을 프로퍼티 이름으로 갖는다.
// 2. length 프로퍼티가 있으며, 요소를 추가하거나 삭제하면 length 프로퍼티 값이 바뀐다.
//    또한 length 프로퍼티 값을 줄이면 그에 따라 배열 크기가 줄어든다.
// 3. Array.prototype의 메서드를 상속받아 사용할 수 있다.
//    또한 instanceof 연산자로 평가하면 Array 생성자 함수로 생성된 객체로 표시된다.

// 유사 배열 객체 생성
// 유사 배열 객체를 생성하여 값을 대입
const a = {};
for (let i = 0; i < 10; i++) {
  a[i] = i;
};

a.length = 10;
// 유사 배열 객체의 요소 합을 구함
let sum = 0;
for (let i = 0; i < a.length; i++) sum += a[i];
console.log(sum); // 45


// 유사 배열 객체에서의 Array.prototype 메서드 사용
const b = {0: 'A', 1: 'B', 2: 'C', length: 3};
console.log(Array.prototype.join.call(b, ', ')); // A, B, C

// 요소를 추가하자 length가 자동으로 변경 됨
Array.prototype.push.call(b, 'D');
console.log(b); // {0: "A", 1: "B", 2: "C", 3: "D", length: 4}

// 진짜 배열로 변환
console.log(Array.prototype.slice.call(b, 0)); //  ["A", "B", "C", "D"]

const c = {0: 1, 1: 2, 2: 3, length: 3};
console.log(Array.prototype.map.call(c, (v) => v * v)); // [1, 4, 9]

