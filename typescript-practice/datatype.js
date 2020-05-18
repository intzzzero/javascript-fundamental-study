"use strict";
// TypeScript는 변수명 뒤에 타입을 명시한다.
// 명시한 타입과 다른 타입의 값을 할당하면 트랜스파일링 도중 오류 발생
let foo = 'Hello world';
let bar = 5;
let baz = true;
// 함수의 경우, parameter와 return value에 대해 타입을 명시한다.
function add(x, y) {
    return x + y;
}
const multiply = (x, y) => x * y;
// arguments에는 따로 타입을 명시하지는 않지만 parameter의 타입과 다른 타입을
// 전달할 경우 오류가 발생한다. 린트를 이용하면 리터럴 시점에 알 수 있다.
console.log(add(3, '5')); // error TS2345: Argument of type '"5"' is not assignable to parameter of type 'number'.
// TypeScript는 JavaScript의 모든 데이터 타입을 사용할 수 있으며,
// 추가적으로 TypeScript 고유의 데이터 타입을 사용할 수도 있다.
// ex) array, tuple, enum, any, void, never
// array : 요소의 타입까지 함께 명시
let arr1 = [1, 'two', false];
let arr2 = [2, 4, 6, 8];
let arr3 = [1, 2, 3]; // 제네릭 배열 타입
// tuple : 요소의 개수와 순서를 미리 정해 놓고 배열을 표현
let tuple1;
tuple1 = ['one', 2]; // pass
tuple1 = [1, 'two']; // error
tuple1 = ['one', 2, 'three', 4]; // error
tuple1.push(true); // error
// enum : 숫자값 집합에 이름을 지정한 것
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
;
let c1 = Color1.Green;
// 별도의 숫자를 지정하지 않으면 0부터 시작하는 인덱스가 순서대로 할당 됨
console.log(c1); // 1
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
;
let c2 = Color2.Green;
// 한 요소에 숫자를 할당하면 숫자가 할당된 요소를 기준으로 다른 요소의 숫자가 순서대로 할당 됨
console.log(c2); // 2
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 3] = "Green";
    Color3[Color3["Blue"] = 5] = "Blue";
})(Color3 || (Color3 = {}));
;
let c3 = Color3.Green;
console.log(c3);
