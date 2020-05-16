# JS Study

- 자바스크립트를 공부하며 주요 개념들을 정리함.
- 교재: 모던 자바스크립트 입문(이소 히로시 지음)

## 목차

[자바스크립트의 재탄생](##자바스크립트의-재탄생)
[변수(variable)](##변수(variable))
[변수 호이스팅(hoisting)](##변수-호이스팅(hoisting))
[getMonth() 메서드에 +1을 해야 하는 이유](##getMonth-메서드에-+1을-해야-하는-이유)
[함수(function)의 동작원리](##함수(function)의-동작원리)
[자바스크립트의 함수는 일급객체](##자바스크립트의-함수는-일급객체)
[함수 선언문의 호이스팅](##함수-선언문의-호이스팅)
[값의 전달, 참조의 전달](##값의-전달,-참조의-전달)
[스코프](##스코프)
[메서드(method)](##메서드(method))
[함수를 사용하는 이유](##함수를-사용하는-이유)
[함수를 정의하는 방법](##함수를-정의하는-방법)
[생성자 함수](##생성자-함수)
[자바스크립트의 객체](##자바스크립트의-객체)
[희소 배열(sparse array)](##희소-배열(sparse-array))
[표현식(expression)](##표현식(expression))
[자바스크립트의 문자열은 불변(immutable)](##자바스크립트의-문자열은-불변(immutable))
[truthy와 falsy](##truthy와-falsy)
[암묵적 타입 변환](##암묵적-타입-변환)
[대화상자의 종류](##대화상자의-종류)
[for 문 실행순서](##for-문-실행순서)
[객체 지향 프로그래밍의 의미](##객체-지향-프로그래밍의-의미)
[즉시 실행 함수(Immediately-invoked function)](##즉시-실행-함수(Immediately-invoked-function))
[인수의 생략](##인수의-생략)
[재귀함수](##재귀함수)
[실행 컨텍스트(Execution Centext)](##실행-컨텍스트(Execution-Centext))
[렉시컬 환경(Lexical Environment)](##렉시컬-환경(Lexical-Environment))
[콜 스택(Call Stack)](##콜-스택(Call-Stack))
[스코프 체인(Scope Chain)](##스코프-체인(Scope-Chain))
[스코프(scope)와 실행 컨텍스트(execution context)의 차이](##스코프(scope)와-실행-컨텍스트(execution-context)의-차이)
[함수의 실행 절차](##함수의-실행-절차)
[가비지 컬렉션(garbage collection)](##가비지-컬렉션(garbage-collection))
[클로저(closure)](##클로저(closure))
[네임 스페이스(Name space) 오염을 줄이는 방법](##네임-스페이스(Name-space)-오염을-줄이는-방법)
[apply, call, bind](##apply,-call,-bind)
[화살표 함수(arrow function)](##화살표-함수(arrow-function))
[이터레이터(iterator)](##이터레이터(iterator))
[제너레이터(generator)](##제너레이터(generator))
[프로토타입 체인(prototype chain)](##프로토타입-체인(prototype-chain))
[접근자 프로퍼티](##접근자-프로퍼티)
[프로퍼티의 내부 속성](##프로퍼티의-내부-속성)
[믹스인(mixin)](##믹스인(mixin))
[수정 메서드](##수정-메서드)
[접근자 메서드](##접근자-메서드)
[반복 메서드](##반복-메서드)
[유사 배열 객체(Array-like object)](##유사-배열-객체(Array-like-object))

***

## 자바스크립트의 재탄생

- 자바스크립트는 기존의 다른 프로그래밍 언어들과 달리 불확실한 요소가 많아 외면 당했었다.
- 구글 지도에서 선보인 Ajax라는 비동기 통신 기술 덕분에 자바스크립트가 재탄생하며, 관심을 받게 되었다.
- HTML5와 ES5의 등장은 자바스크립트에 날개를 달아주었다.

## 변수(variable)

- 변수는 값이 저장된 특정 메모리 영역을 가리키는 이름이다.
- 변수에 값을 할당하지 않고 선언만 하면 `undefined`가 담겨있다.
- `var`, `let`, `const` 등의 키워드 없이 선언된 변수는 전역변수로 취급한다.

## 변수 호이스팅(hoisting)

```javascript
console.log(a); // undefined
var a = 3;
console.log(a); // 3
```

- 프로그램 중간에서 변수를 선언하더라도 첫머리에 선언된 것처럼 작동하는데, 이것을 **호이스팅** 이라고 한다.
- 단, 호이스팅이 되는 것은 선언문 뿐이며, 자동으로 undefined로 초기화 된다.

## getMonth 메서드에 +1을 해야 하는 이유

- `new Date()` 메서드 사용 시 `getMonth()` 는 0~11이기 때문에 **+1**을 해줘야 한다.

```javascript
const now = new Date();
console.log(`오늘은 ${now.getMonth()+1} 월 ${now.getDate()} 일입니다.`); //오늘은 2 월 19 일입니다.

console.log(now.getMonth()); //1
```

## 함수(function)의 동작원리

- 함수를 호출하며 인수(argument)를 전달하면, 함수 정의문의 인자(parameter)로 받아 실행 결과를 반환(return)한다.
- **자판기의 이미지가 연상됨.**

> 1. 특정 음료의 가격에 맞는 금액 투입(argument)
> 2. 특정 음료의 버튼 누름(call)
> 3. 투입된 금액과 호출된 음료의 값을 비교
> 4. 가격이 맞으면 해당 음료 반환(return)

## 자바스크립트의 함수는 일급객체

- 함수를 값으로 쓸 수 있음. -> 변수에 할당 가능
- 다른 함수의 인수(argument)로 전달 가능
- [함수는 퍼스트 클래스?](https://codeameba.github.io/2019/05/17/programming/first-class-object/)

## 함수 선언문의 호이스팅

- 변수와 마찬가지로 호이스팅이 됨
- 아래와 같은 **함수선언문** 은 전체가 통째로 호이스팅 됨
```javascript
console.log(square(5)); // 25

// 함수선언문
function square(x) {
  return x * x;
}
```

- return이 없으면 undefined

```javascript
console.log(square(5)); // undefined

function square(x) {
  x * x;
}

console.log(square(3)); // undefined
```

- 변수와 마찬가지로 **선언문** 만 호이스팅이 되기 때문에, 아래와 같은 **함수표현식** 은 변수명만 호이스팅이 됨.

```javascript
// 기명 함수표현식
const b = function bb() {
  return 'bb';
}

// 익명 함수표현식
const c = function() {
  return 'c';
}
```

- 함수의 호이스팅은 코드의 순차실행을 저해하고 예측을 어렵게 하기 때문에 되도록 **함수표현식** 의 사용을 권함

## 값의 전달, 참조의 전달

```javascript
function add1(x) {
  return x = x + 1;
}

var a = 3;
var b = add1(a);

console.log(`a = ${a}, b = ${b}`); // a = 3, b = 4
```

- 위와 같이 인수로 원시값(primitive-type)을 전달하면, 해당 값 자체가 복사되어 전달된다. 이것을 **값의 전달** 또는 **깊은 복사(deep copy)** 라고 한다.
- 별도의 메모리 공간에 복사되는 것이기 때문에 변수 a와 인자 x는 별개의 값이며, x의 값이 바뀌더라도 a가 영향을 받지 않는다.

```javascript
function add1(p) {
  p.x = p.x + 1;
  p.y = p.y + 1;
  return p;
}

var a = {x:3, y:4};
var b = add1(a);

console.log(a, b); // { x: 4, y: 5 } { x: 4, y: 5 }
```

- 반면에 인수로 객체(object-type)을 전달했을 때에는 참조(reference)가 전달되는 것으로 이를 **참조 전달** 또는 **얕은 복사(shallow copy)** 라고 한다.
- 하나의 메모리 공간에 있는 객체를 각기 다른 곳에서 가리키고 있다는 이미지로 이해할 수 있으며, 따라서 p의 값이 바뀌자 a의 값도 바뀐 것이다.

## 스코프

```javascript
var a = 'global';

function f() {
  var b = 'local';
  console.log(a); // global
  return b;
}

f();
console.log(b); // ReferenceError: b is not defined
```

- 위와 같이 함수 내부의 변수가 출력되지 않는 이유는 스코프(scope) 때문이다.
- 기본적으로 **내부에서는 외부를 볼 수 있지만, 외부에서는 내부를 볼 수 없다** 는 개념으로 이해할 수 있다.
- 코드가 작성되는 시점에 구문만으로 정해지는 스코프를 어휘적 스코프(lexical scope)라고 하며, 코드가 실행되는 와중에 정해지는 스코프를 동적 스코프(dynamic scope)라고 한다. **자바스크립트는 lexical scope를 따른다**
- 스코프가 존재하는 가장 큰 이유는 식별자(identifier)의 충돌을 막기 위함이다.

## 메서드(method)

```javascript
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
```

- 자바스크립트에서는 객체 내부의 데이터는 모두 프로퍼티(property)이며, 프로퍼티가 함수를 값으로 가질 때, 일반 프로퍼티와 구분하기 위해 **메서드(method)** 라고 칭한다.
- 일반적으로 메서드는, 메서드가 속한 객체의 내부 데이터(프로퍼티 값) 상태를 바꾸는 용도로 사용한다.

## 함수를 사용하는 이유

1. **재사용이 가능하다.**
  - 동일한 작업이 반복될 경우 해당 작업을 하는 함수를 만들어 필요한 곳에서 호출만 하면 되기 때문에 코드가 간결해진다.

2. **프로그램을 이해하기 쉽다.**
  - 함수의 이름을 알아보기 쉽게 지으면, 함수명만 보고도 프로그램의 흐름을 파악하기 쉽다.

3. **프로그램의 수정이 간단해진다.**
  - 수정해야 할 일이 있을 때 해당되는 함수만 수정하면 된다.

## 함수를 정의하는 방법

1. 함수 선언문

```javascript
function square(x) {
  return x * x;
}
```

2. 함수 리터럴

```javascript
const square = function(x) {
  return x * x;
};
```

3. Function 생성자

```javascript
const square = new Function('x', 'return x * x);
```

4. 화살표(arrow) 함수 표현식

```javascript
const square = x => x * x;
```

- 함수 선언문을 제외한 세 가지 방법은 호이스팅이 되지 않기 때문에 **변수에 할당 후에 사용이 가능** 하며, 따라서 호출하는 코드보다 상단에 위치해야 한다.

## 생성자 함수

- Java나 C++ 등의 객체지향 언어에는 **클래스(class)** 라는 객체 생성 방법이 있다.
- 자바스크립트에는 클래스가 없지만, 대신 **프로토타입(prototype)** 이 있기 때문에 클래스와 유사한 방식으로 객체를 생성할 수 있다.
- 생성자 함수를 통해 **동일한 이름에 프로퍼티 값이 다른 객체** 를 효율적으로 생성할 수 있다.

```javascript
function Card(suit, rank) {
  this.suit = suit;
  this.rank = rank;
}

const card = new Card('Heart', 'A');
console.log(card); // Card { suit: 'Heart', rank: 'A' }
```

- 이때, 통상적으로 생성자 함수라는 것을 알리기 위해 **파스칼 케이스**를 쓴다.
- 이와 같이 생성된 객체를 **인스턴스** 라고 부르는데, 본래 객체지향 언어에서의 인스턴스와는 차이가 있지만, 일반 객체와 구분하기 위해 편의상 인스턴스라고 부른다.
- `this` 는 생성자가 생성하는 객체를 가리킨다. 즉, 생성자 함수 내부의 `this` 는 인스턴스를 가리킨다고 볼 수 있다.
- **참고:** 
  - [‘new’ 연산자와 생성자 함수](https://ko.javascript.info/constructor-new)
  - [클래스와 기본 문법](https://ko.javascript.info/class)
  - [Classes - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)

## 자바스크립트의 객체

- 자바스크립트의 객체는 크게 **세 종류** 로 구분할 수 있다.

1. **네이티브 객체**
  - ECMAScript 스펙에 따라 정의된 객체를 네이티브 객체(native object)다. 
  - Array, Function, Number 등의 내장 생성자로 생성된 객체와 JSON, Math, Reflect 등이 네이티브 객체에 포함된다.

2. **호스트 객체**
  - 자바스크립트 실행 환경에 정의된 객체를 호스트 객체(host object)라고 한다.
  - Window, Navigator, History, Screen 등 브라우저 객체와 DOM 객체, Ajax를 위한 XMLHttpRequest 객체, HTML5의 여러 API에 이르기까지 클라이언트 측 자바스크립트에 정의된 객체들이 포함된다.

3. **사용자 정의 객체**
  - 사용자가 직접 정의한 코드의 실행 결과로 생성된 객체를 말한다.

## 희소 배열(sparse array)

```javascript
const a = ['A', 'B', 'C'];
a[4] = 'E';
console.log(a); // ["A", "B", "C", empty, "E"]
console.log(a[3]); // undefined
console.log(a.length); // 5
a.hasOwnProperty("3"); // false
```

- 위와 같이 `length`가 요소의 개수보다 클 때 **희소 배열** 이라고 부른다.
- 이때 배열은 내부적으로 **객체** 의 형태로 저장되어 있으며, 리터럴로 표현하자면 아래와 같다.

```javascript
const a = {
  '0':'A',
  '1':'B',
  '2':'C',
  '4':'E'
};
```

## 표현식(expression)

- 표현식이란 결과적으로 어떤 값으로 평가(evaluation)되는 것
- number, string, boolean 등의 원시 값(primitive value)은 그 자체로 가장 간단한 표현식이라고 할 수 있다.

```javascript
3.14
"hello"
true
null
```

- 변수, 프로퍼티, 배열 요소, 함수 호출, 메서드 호출 등 또한 표현식이라고 할 수 있다.

```javascript
sum
circle.radius
a[3]
square(5)
card.getSum()
```

- 연산자가 더해지더라도 결과적으로 값으로 평가된다면 역시 표현식이다.
  - 단항 연산자, 이항 연산자, 삼항 연산자 모두 그렇다.

```javascript
const a = 1;
const b = 2;
const c = a !== b ? 'hello' : 'world';
console.log(c); // hello
```

## 자바스크립트의 문자열은 불변(immutable)

- 자바스크립트는 원시 값을 처리할 때 원시 값을 래퍼(wrapper) 객체로 자동 변환한다.
  - 문자열은 String 객체, 숫자는 Number 객체, 논리값은 Boolean 객체
  - null과 undefined는 래퍼 객체가 없음.
- 래핑은 일시적으로 진행되며 처리가 끝나면 곧바로 메모리에서 삭제된다.
- **따라서 문자열을 직접 객체화 하지 않더라도 String 객체의 메서드를 사용할 수 있다.**
- 또한, **자바스크립트의 문자열은 불변** 이므로 메서드를 통해 반환되는 새로운 문자열은 원본 문자열과 별개의 값이다.

```javascript
const randomString = 'microsoft';
const newString = randomString.replace('soft', 'hard');
console.log(randomString); // microsoft
console.log(newString); // microhard
```

- **참고**
  - [문자열](https://ko.javascript.info/string)

## truthy와 falsy

- true나 false로 명시되어 있지 않더라도 논리값으로 평가되는 피연산자들이 있다.
- **true로 평가되는 피연산자**
  - 0을 제외한 숫자, 빈 문자열을 제외한 문자열, 모든 객체, 심벌
- **false로 평가되는 피연산자**
  - 0, -0, 빈 문자열(""), NaN, null, undefined
- truthy와 falsy에 각각 속한 피연산자들을 보면 나름대로의 일관성이 보이는 것을 알 수 있다. 대체적으로 **없음** 의 뉘앙스가 강한 쪽이 false로 평가된다.

## 암묵적 타입 변환

- 자바스크립트에서는 암묵적으로 타입을 변환하는 방법이 있다. 대표적으로 아래와 같은 방법으로 string을 number로 변환이 가능하다.

```javascript
var s = '2';
console.log(s, typeof(s)); // 2 string
console.log(s-0, typeof(s-0)); // 2 number
console.log(+s, typeof(+s)); // 2 number
```

- 간단하고 편리한 방법이긴 하지만, 놓치고 지나칠 가능성이 농후하므로 되도록 `parseInt()`, `Number()`와 같은 명시적인 방법으로 타입을 변환하는 게 좋다고 생각한다.

## 대화상자의 종류

- 웹 브라우저의 전역 객체 window에는 **대화상자** 를 띄울 수 있는 방법이 세 가지가 있다.

**`window.alert()`**
  - 경고 대화상자를 표시
  - 확인을 누르면 undefiend 반환

**`window.prompt()`**
  - 사용자의 문자열 입력을 받을 수 있는 대화상자를 표시
  - 문자열 입력 후 확인을 누르면 해당 문자열 반환
  - 문자열을 입력하지 않고 확인을 누르면 빈 문자열("") 반환
  - 취소를 누르면 null 반환

**`window.confirm()`**
  - '확인' 버튼과 '취소' 버튼이 있는 대화상자를 표시
  - '확인'을 누르면 true를, '취소'를 누르면 false가 반환

## for 문 실행순서

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

**위와 같은 일반적인 for 문이 있을 때, 실행 순서는 다음과 같다.**
1. 변수 i를 선언 및 0으로 초기화 `let i = 0`
2. i가 10 보다 작은지 확인 `i < 10`
3. 블록문 실행 `console.log(i)`
4. i의 값이 1 증가 `i++`
5. i의 값이 10이 될 때까지 1번 내용을 제외하고 반복

## 객체 지향 프로그래밍의 의미

**객체 지향 프로그래밍(OOP: Object Oriented Programming)** 이란, 프로그램을 작성하는 방법 중 하나로 프로그램을 객체라고 부르는 부품 여러 개로 구성하여 만드는 방법이다. 이때, 객체란 데이터와 데이터를 처리하는 함수(메서드)를 한곳에 모아둔 덩어리를 말한다.

## 즉시 실행 함수(Immediately-invoked function)

- 자바스크립트에는 익명 함수를 정의하는 동시에 실행되는 **즉시 실행 함수** 라는 것이 있다.
- 즉시 실행 함수는 전역 유효 범위(global scope)를 오염시키지 않는 이름 공간(name space)를 생성할 때 사용한다.
- 즉시 실행 함수는 아래와 같이 정의한다.

```javascript
// 첫 번째 방법
(function() {
  // something
})();

// 두 번째 방법
(function() {
  // something
}());

// 인수를 넣을 수도 있음
(function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
})(5); // 120

// 변수에 할당 가능
const x = (function() {
  // something
})();
```

## 인수의 생략

- 함수 정의식에서 요구하는 인자의 개수보다 적은 인수를 전달할 경우 생략된 부분은 undefined가 된다.

```javascript
function(x, y) {
  console.log(`x = ${x}, y = ${y}`);
}
f(2); // x = 2, y = undefined
```

- 만약 두 개 이상의 인자를 연산하여 반환해야 할 때에는 undefined가 나오는 것을 막기 위해 아래와 같이 or 연산자(||)를 활용할 수 있다.

```javascript
function multiply(a, b) {
  b = b || 1; // b가 falsy값이면 1을 할당
  return a * b;
}
multiply(2, 3); // 6
multiply(2); // 2
```

## 재귀함수

- 함수가 자기 자신을 호출하는 행위를 재귀 호출(recursive call)이라고 한다.
- 재귀 호출을 수행하는 함수를 **재귀 함수** 라고 한다.

```javascript
// 팩토리얼 재귀함수
function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
}
fact(5); // 120
```

**재귀 함수를 정의할 때 유의해야 하는 사항**
1. **재귀 호출은 반드시 멈춰야 한다.**
  - 재귀 함수가 멈추는 조건이 반드시 있어야 하며, 그렇지 않으면 스택 오버플로우(stact overflow)를 일으키게 된다.
2. **재귀 호출을 통해 문제를 간단히 해결할 수 있을 때만 사용한다.**
  - 재귀 함수는 메모리를 많이 차지하는 작업이다. 따라서 while문이나 for문으로 해결 가능하다면 재귀 함수를 지양하는 것이 좋다.

## 실행 컨텍스트(Execution Centext)

- 자바스크립트 엔진은 실행 가능한 코드(Executable Code)를 만나면 그 코드를 평가(Evaluation)하여 실행 컨텍스트(Execution Context)를 만든다.
- 실행 컨텍스트는, 실행 가능한 코드가 실제로 실행되고 관리되는 영역이다.
- 실행에 필요한 모든 정보를 여러 컴포넌트에 나누어서 관리함.
  - 렉시컬 환경(Lexical Environment)
    - 환경 레코드(Environment Record)
      - 선언적 환경 레코드(Declarative Environment Record)
      - 객체 환경 레코드(Object Environment Record)
    - 외부 렉시컬 환경 참조(Outer Lexical Environment Reference)
  - 변수 환경(Variable Environment)
  - 디스 바인딩(This Binding)

**실행 컨텍스트의 구조를 의사 코드로 표현하면 아래와 같다.**

  ```javascript
  // 실행 컨텍스트의 구조를 보여주는 pseudo code
  ExecutionContext = {
    LexicalEnvironment: {
      EnvironmentRecord: {
        DeclarativeEnvironmentRecord: {},
        ObjectEnvironmentRecord: {}
      },
      OuterLexicalEnvironmentReference: {}
    },
    VariableEnvironment: {},
    ThisBinding: null
  }
  ```

- **참고:**
  - [(JavaScript) 함수의 범위(scope) - lexical scoping - ZeroCho Blog](https://www.zerocho.com/category/Javascript/post/5740531574288ebc5f2ba97e)
  - [(JavaScript) 실행 컨텍스트 - 클로저와 호이스팅 - ZeroCho Blog](https://www.zerocho.com/category/Javascript/post/5741d96d094da4986bc950a0)
  - [클로저 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures)
  - [Execution context and the call stack — visually illustrated by a slice of tasty cake](https://medium.com/free-code-camp/execution-context-and-the-call-stack-visually-illustrated-by-a-slice-of-tasty-cake-14f9a64dc460)
  - [Understanding Execution Context and Execution Stack in Javascript](https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0)

## 렉시컬 환경(Lexical Environment)

- 자바스크립트 엔진이 코드를 실행하기 위해 자원을 모아 둔 곳
- 해당 유효 범위(Scope) 안에 있는 식별자와 식별자가 가리키는 값을 `key : value`의 형태로 바인드하여 렉시컬 환경 컴포넌트에 기록한다.

```javascript
LexicalEnvironment: {
  EnvironmentRecord: {},
  OuterLexicalEnvironmentReference: {}
}
```

- 렉시컬 환경 컴포넌트에는 위와 같이 **환경 레코드(Environment Record)** 와 **외부 렉시컬 환경 참조(Outer Lexical Environment Reference)** 가 있다.
  - 환경 레코드: 유효 범위 내의 식별자와 값이 기록되어 있으며, 함수가 호출되면 1차적으로 이곳에서 식별자를 탐색한다.
  - 외부 렉시컬 환경 참조: 유효 범위 너머의 식별자와 값이 기록되어 있는 곳으로, 환경 레코드에서 해당 식별자를 찾을 수 없을 때 외부 렉시컬 환경 참조를 탐색하게 된다.
- 최상위의 렉시컬 환경은 **전역 환경(Global Environment)** 과 바인딩되어 있으며, 이곳에서의 외부 렉시컬 환경 참조는 `null`이다.
- **결국 호이스팅(Hoisting)은, 자바스크립트의 식별자들이 해당 스코프의 렉시컬 환경에 등록된 결과라고 볼 수 있다.**

## 콜 스택(Call Stack)

> 후입선출(LIFO, Last In First Out) 방식으로 아래부터 데이터를 쌓아 올려 가장 마지막에 추가된 데이터부터 내보내는 자료구조를 **스택(Stack)** 이라고 한다.
> 이때, 데이터를 쌓는 행위를 **push** 라고 하고, 스택의 가장 윗부분에서 데이터를 꺼내는 행위를 **pop** 이라고 한다.

- 실행 컨텍스트(Execution Context)는 프로그램 실행 중 스택에 push되어 실행이 된다. 이때, 전역 코드(Global Execution Context)는 브라우저의 시작과 동시에 실행되어 브라우저를 종료할 때까지 스택의 가장 아래에 위치한다.
- 함수가 호출되면, 해당 실행 컨텍스트가 스택에 push 되어 실행되며, 해당 함수의 작업이 끝나면 호출했던 부분으로 제어권이 돌아오면서 스택에서 pop 된다. 이처럼 함수가 호출(Call)될 때마다 스택에 쌓인다 하여 **콜 스택(Call Stack)** 이라고 부른다.

- **참고:**
  - [자바스크립트의 동작원리: 엔진, 런타임, 호출 스택 • Captain Pangyo](https://joshua1988.github.io/web-development/translation/javascript/how-js-works-inside-engine/)

## 스코프 체인(Scope Chain)

- 내부 스코프의 렉시컬 환경에서 필요한 식별자를 찾을 수 없을 때 외부 스코프의 렉시컬 환경을 점진적으로 탐색하게 되는데, 이처럼 렉시컬 환경을 매개로 내부와 외부의 스코프가 이어진 것을 **스코프 체인(Scope Chain)** 이라고 부른다.

```javascript
var a = 'A';
function f() {
  var b = 'B';
  function g() {
    var c = 'C';
    console.log(a + b + c);
  }
  g();
}
f(); // ABC
```

**위와 같은 중첩 함수가 있을 때, 식별자 탐색 과정을 단계별로 알아보자면 다음과 같다.**
1. `g()`의 렉시컬 환경의 선언적 환경 레코드(Declarative Environment Record)에서 식별자 `c`를 찾는다.
2. `g()`의 선언적 환경 레코드에서 식별자 `b`를 찾지만 못 찾고, `g()`의 외부 렉시컬 환경 참조(Outer Lexical Environment Reference)에 기록된 상위 함수 `f()`로 이동하여 탐색한다.
3. `f()`의 렉시컬 환경의 선언적 환경 레코드에서 식별자 `b`를 찾는다.
4. `f()`의 선언적 환경 레코드에서 식별자 `a`를 찾지만 못 찾고, `f()`의 외부 렉시컬 환경 참조에 기록된 전역 렉시컬 환경(Global Lexical Environment)로 이동하여 탐색한다.
5. 전역 렉시컬 환경의 객체 환경 레코드(Object Environment Record)에서 식별자 `a`를 발견한다. 이때의 외부 렉시컬 환경 참조는 `null`이다.

- **참고:**
  - [Scope | PoiemaWeb](https://poiemaweb.com/js-scope)

## 스코프(scope)와 실행 컨텍스트(execution context)의 차이

- 스코프는 변수의 **유효 범위** 이며, 실행 컨텍스트는 실행되는 코드 덩어리라는 추삭적 개념.
- 스코프는 함수가 **정의될 때** 결정되며, 실행 컨텍스트는 함수가 **실행될 때** 생성된다.

## 함수의 실행 절차

```javascript
var a = 1;
function outer() {
  console.log(a); // 1

  function inner() {
    console.log(a); // undefined
    var a = 3;
  }

  inner();

  console.log(a); // 1
}

outer();
console.log(a); // 1
```

**위와 같은 코드가 있을 때 내부적인 실행 절차는 다음과 같다.**
1. 전역 실행 컨텍스트 생성
2. 전역 변수 `a` 선언(호이스팅)
3. 외부 함수 `outer` 선언(호이스팅)
4. 변수 `a`에 1 할당
5. `outer` 함수 호출 및 `outer` 실행 컨텍스트 생성
6. 함수 `inner` 선언(`outer` 스코프에서 호이스팅)
7. `outer` 스코프에서 `a` 탐색하지만 찾을 수 없으므로 전역 스코프에서 재탐색 후 1 출력
8. 중첩 함수 `inner` 호출 및 `inner` 실행 컨텍스트 생성
9. 지역 변수 `a` 선언(`inner` 스코프에서 호이스팅)
10. `inner` 스코프에서 `a` 탐색 후 출력하지만 호이스팅만 된 단계이므로 `undefined` 출력
11. 지역 변수 `a`에 3 할당
12. `inner` 실행 컨텍스트 종료
13. 제어권이 `outer` 실행 컨텍스트로 돌아오며 전역 스코프에서 변수 `a` 탐색 후 1 출력
14. `outer` 실행 컨텍스트 종료
15. 전역 스코프에서 변수 `a` 탐색 후 1 출력

## 가비지 컬렉션(garbage collection)

- 자바스크립트 엔진 내부에는 **가비지 컬렉터(garbage collector)** 가 쉬지 않고 동작하며, **참조가 없는 객체를 메모리에서 해제한다.** 그리고, 이러한 매커니즘을 가비지 컬렉션이라고 한다.
- 가비지 컬렉터 덕분에 메모리의 공간 확보를 직접 하지 않아도 되는 만큼 메모리에는 크게 신경 쓰지 않아도 되지만, 메모리 누수로 인해 퍼포먼스가 저하될 가능성이 없지 않기 때문에 전혀 고려하지 않아도 되는 것은 아니다.

- **참고:**
  - [가비지 컬렉션](https://ko.javascript.info/garbage-collection)

## 클로저(closure)

- 클로저의 주 사용 목적은 외부로부터 내부의 상태를 숨기는 **캡슐화(encapsulation)** 에 있다.

```javascript
function makeCounter() {
  var count = 0;
  return f;
  function f() { // 보통은 익명함수를 사용하지만, 편의를 위해 이름을 붙임
    return count++;
  }
}

var counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
```

**위와 같은 클로저가 있을 때 다음과 같은 특징을 알 수 있다.**
1. 외부 함수 `makeCounter`는 중첩 함수 `f`의 참조를 반환한다.
2. 중첩 함수 `f`는 외부 함수 `makeCounter`의 지역 변수 `count`를 참조한다.
3. 전역 변수 `counter`에 함수 `makeCounter`를 할당하였으므로, 전역 변수 `counter`는 중첩 함수 `f`의 함수 객체를 참조한다.
4. `f`의 함수 객체는 함수 `makeCounter`의 렉시컬 환경 컴포넌트를 참조한다.
5. 결과적으로, 전역 변수 `counter`는 중첩 함수 `f`의 함수 객체를 통해 간접적으로 외부 함수 `makeCounter`의 렉시컬 환경 컴포넌트를 참조한다.

**클로저의 핵심:**
- 외부 함수를 호출하면 해당 함수의 렉시컬 환경 컴포넌트가 생성되며, 중첩 함수의 함수 객체를 생성 및 반환한다.
- 외부 함수는 클로저를 생성하는 팩토리 함수이며, 클로저의 주 기능은 중첩 함수에 담겨있다.
- 외부 함수가 속한 렉시컬 환경 컴포넌트는 클로저 내부 상태 자체이며, 외부 함수가 호출될 때마다 새로 생성된다.

```javascript
var counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

var counter2 = makeCounter();
console.log(counter2()); // 0
console.log(counter2()); // 1
console.log(counter2()); // 2
```

- 중첩 함수의 함수 객체가 있는 한 외부 함수가 속한 렉시컬 환경 컴포넌트는 지워지지 않으며, 외부 함수의 함수 객체가 사라져도 지워지지 않는다.
- 클로저 내부 상태(외부 함수의 지역 변수, 선언적 환경 레코드)는 외부로부터 은폐되어 있으며 중첩 함수 안에서만 읽거나 쓸 수 있다.

**참고:**
  - [클로저 - 생활코딩](https://opentutorials.org/course/743/6544)
  - [클로저 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures)
  - [Closure | PoiemaWeb](https://poiemaweb.com/js-closure)

## 네임 스페이스(Name space) 오염을 줄이는 방법

전역 변수와 전역 함수 등을 남발하게 되면 라이브러리를 쓴다거나 협업을 할 때 식별자가 충돌할 수가 있다. 따라서 전역 변수의 사용이 불가피할 경우에는 소스 코드 상단에 모아서 한눈에 파악할 수 있게 하는 것이 좋다.

그리고, 네임 스페이스의 오염을 최소화 하기 위한 방법으로는 다음과 같은 것들이 있다.

1. **객체를 네임 스페이스로 활용하기**
  - 프로그램을 대표할만한 이름의 전역 변수를 하나 생성하여 객체를 값으로 할당하고, 프로그램에서 필요한 모든 변수와 함수를 프로퍼티로 정의한다.

  ```javascript
  var myApp = myApp || {};

  myApp.name = 'Tom';
  myApp.showName = function() {
    // something
  };
  myApp.view = {}; // 내부에 또 다른 네임 스페이스를 만들 수도 있다.
  myApp.view.draw = function() {
    // something
  };
  ```

2. **즉시 실행 함수로 감싸기**
  - 일시적인 처리를 수행하는 내용들을 즉시 실행 함수로 감싸면 중복된 이름이 있더라도 전역 네임 스페이스를 오염시키지 않고 실행이 가능하다.

3. **모듈 패턴**
  - 모듈(module)은 여러 기능을 하나로 묶은 것으로, 클로저(closure)를 즉시 실행 함수(IIFE)로 감싼 형태다.
  - 이를 통하여 내부의 변수나 함수는 은폐하고, 원하는 함수만 공개할 수 있다.
  
  ```javascript
  var Module = Module || {};

  (function(_Module) {
    var name = 'NoName'; // 프라이빗 변수
    function getName() { // 프라이빗 함수
      return name;
    }
    _Module.showName = function() { // 퍼블릭 함수
      console.log(getName());
    };
    _Module.setName = function(x) { // 퍼블릭 함수
      name = x;
    };
  })(Module)

  Module.setName('Tom');
  Module.showName(); // Tom
  ```

- **참고:**
  - [JavaScript 자바스크립트 모듈 패턴을 이용한 캡슐화 :: 심플한 코딩 백과사전](https://webcoding.tistory.com/entry/JavaScript-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AA%A8%EB%93%88-%ED%8C%A8%ED%84%B4%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%BA%A1%EC%8A%90%ED%99%94)
  - [Object-Oriented Programming | PoiemaWeb](https://poiemaweb.com/js-object-oriented-programming)
  - [(JavaScript) 디자인 패턴(싱글턴, 모듈, 생성자) - ZeroCho Blog](https://www.zerocho.com/category/Javascript/post/57541bef7dfff917002c4e86)

## apply, call, bind

- Function 객체의 메서드에는 apply와 call이 있으며, this 값과 함수의 인수를 사용하여 함수를 실행하는 메서드다.
- apply와 call은 동일하게 동작하며, 유일한 차이점은 인수를 넘기는 방식이다. apply는 배열로 인수를 넘기고, call은 쉼표로 구분한 값의 목록으로 인수를 넘긴다.

```javascript
function say(greetings, honorifics) {
  console.log(greetings + '' + honorifics + this.name);
}

const tom = { name: 'Tom Sawyer' };
const becky = { name: 'Becky Thatcher' };
say.apply(tom, ['Hello! ', 'Mr.']); // Hello! Mr.Tom Sawyer
say.call(becky, 'Hi ', 'Ms.'); // Hi Ms.Becky Thatcher
```

- bind 역시 Function 객체의 메서드이며, 객체에 함수를 바인드하는 역할을 한다.

```javascript
function say(greetings, honorifics) {
  console.log(greetings + '' + honorifics + this.name);
}

const tom = { name: 'Tom Sawyer' };
const sayToTom = say.bind(tom);
sayToTom('hello~ ', 'Mr.'); // hello~ Mr.Tom Sawyer
```

## 화살표 함수(arrow function)

ES6에서는 익명함수의 단축 표현인 **화살표 함수 표현식**이 추가되었다. 화살표 함수 표현식은 아래와 같이 다양한 방법으로 작성이 가능하다.

```javascript
const square = (x) => {return x*x}; // 함수 표현식
const f = (x, y, z) => {...}; // 인수가 여럿이라면 쉼표로 구분
const square = x => {return x*x}; // 인수가 하나라면 괄호 생략 가능
const f = () => {...}; // 인수가 없을 때에는 빈 괄호 필수
const square = x => x*x; // 함수 바디에 return문만 있으면 return 생략 가능
const f = (a, b) => ({x:a, y:b}); // 반환값이 객체 리터럴이라면 괄호 필수
(x => x*x)(3); // 즉시실행함수(IIFE)로 화살표 함수 사용 가능
```

### 일반 함수와 화살표 함수의 차이.

1. **this**
  - 함수 리터럴로 정의한 함수는 `this`의 값이 함수를 호출할 때 결정되지만, 화살표 함수의 `this`값은 함수를 정의할 때 결정된다.

2. **arguments 변수가 없음**
  - 화살표 함수 안에는 arguments 변수가 정의되어 있지 않아 사용할 수 없다.
  
  ```javascript
  const f  = () => console.log(arguments);
  f(); // Uncaught ReferenceError: arguments is not defined
  
  const s = function() {console.log(arguments);};
  s(); // Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]
  ```

3. **생성자로 사용 불가**
  - 화살표 함수 앞에는 `new` 연산자를 붙여 호출할 수 없다.
  
  ```javascript
  const Person = (name, age) => {this.name = name; this.age = age;};
  const Tom = new Person('Tom', 25); // Uncaught TypeError: Person is not a constructor

  const Coffee = function(name, price) {this.name = name; this.price = price;};
  const americano = new Coffee('Americano', 4100);
  console.log(americano); // Coffee {name: "Americano", price: 4100}
  console.log(americano.price); // 4100
  ```

4. **yield 키워드를 쓸 수 없다**
  - 화살표 함수 안에서는 `yield` 키워드를 쓸 수 없으며, 따라서 화살표 함수는 제너레이터의 기능을 수행할 수 없다.

- **참고:**
  - [화살표 함수 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98)
  - [Arrow function | PoiemaWeb](https://poiemaweb.com/es6-arrow-function)
  - [화살표 함수 기초](https://ko.javascript.info/arrow-functions-basics)
  - [화살표 함수에 대한 재고](https://ko.javascript.info/arrow-functions)
  - [메서드와 ‘this’](https://ko.javascript.info/object-methods)
  - [제너레이터](https://ko.javascript.info/generators)

## 이터레이터(iterator)

- 이터레이터는 **반복 처리(iteration)가 가능한 객체** 를 말한다.
  - `{value, done}` 객체를 리턴하며 `next()` 메서드를 갖는 객체
- `[Symbol.iterator]` 메서드를 갖고 있는 객체를 **반복 가능(iterable) 한 객체** 라고 한다.
- 주의해야 할 것은 **이터레이터 객체 != 이터러블 객체** 라는 점이다.
- 또한 **이터러블 != 유사 배열** 역시 다르다.
  - 유사 배열에는 `index`와 `length` 프로퍼티가 있다.
  - 이터러블이라고 해서 꼭 유사 배열인 것은 아니며, 유사 배열이라고 해서 꼭 이터러블인 것도 아니다. 그러나 이터러블과 유사 배열의 특성을 동시에 갖는 객체도 있다. 대표적으로 문자열(String)이 그렇다.

  ```javascript
  const str = 'string';

  // 아래와 같이 이터러블의 [Symbol.iterator] 메서드와
  // 유사 배열의 index, length 프로퍼티를 동시에 지닌다.
  str[Symbol.iterator](); // StringIterator {}
  str.length; // 6
  str[0]; // "s"
  ```

- **참고:**
  - [iterable 객체](https://ko.javascript.info/iterable)

## 제너레이터(generator)

- 반복 가능한 이터레이터를 값으로 반환
- 작업의 일시 정지와 재시작이 가능하며 자신의 상태를 관리
- 제너레이터는 아래와 같이 `function*` 문으로 정의하며, 하나 이상의 `yield` 표현식을 포함한다.

```javascript
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const iter = get();
console.log(iter.next()); // {value: 1, done: false}
console.log(iter.next()); // {value: 2, done: false}
console.log(iter.next()); // {value: 3, done: false}
console.log(iter.next()); // {value: undefined, done: true}
```

- 위와 같이 제너레이터 함수의 `yield`는 프로그램이 일시적으로 정지하는 위치라고 할 수 있다.
- `yield` 표현식은 지정된 표현식을 값으로 갖고, 이를 변수에 대입할 수 있다.

```javascript
const a = yield 2;
```

- 제너레이터로 생성한 이터레이터는 이터러블이므로 `for..of`문을 쓸 수 있다.

- **참고:**
  - [yield - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/yield)
  - [ES6의 제너레이터를 사용한 비동기 프로그래밍 : TOAST Meetup](https://meetup.toast.com/posts/73)
  - [제너레이터](https://ko.javascript.info/generators)

## 프로토타입 체인(prototype chain)

- 자바스크립트의 모든 객체는 `[[Prototype]]`이라고 하는 **내부 슬롯(internal slot)**을 지닌다.
- 하위 객체는 상위 객체의 `prototype`을 상속받으며, 상속받은 데이터는 `__proto__`에 저장된다.

```javascript
const myCat = {
  name: 'Lucy',
  sayHello: function() { console.log('Hello! ' + this.name); }
};

const yourCat = {
  name: 'Tom'
};

yourCat.__proto__ = myCat;

const whoseCat = {};
whoseCat.__proto__ = yourCat;

whoseCat.sayHello(); // Hello! Tom
```

- 위와 같이 `__proto__`를 통해 하위 객체와 상위 객체가 이어져 있으며, 이를 **프로토타입 체인** 이라고 한다. 그리고, 자신과 가까운 프로퍼티부터 위로 거슬러 올라가며 검색하게 된다.

### Object.getPrototypeOF()

- ES 명세에서나 브라우저에서나 `__proto__`를 통한 접근은 권장하지 않는다.
- 따라서 프로토타입 메서드에 접근해야 할 때에는 `Object.getPrototypeOf()` 또는 `Object.creat()`를 활용하도록 하자.

- **참고:**
  - [poiemaweb - 프로토타입](https://poiemaweb.com/js-prototype)
  - [poiemaweb - 클래스](https://poiemaweb.com/es6-class)
  - [코어자바스크립트 - 프로토타입 상속](https://ko.javascript.info/prototype-inheritance)

## 접근자 프로퍼티

- 일반적으로 값 을 가져올 때 쓰는 접근자 프로퍼티를 `getter`, 값을 수정할 때 쓰는 접근자 프로퍼티를 `setter`라고 부른다.
- **접근자 프로퍼티를 사용하는 이유**
  - 객체 밖에서 객체의 프로퍼티를 직접적으로 읽거나 쓰는 행위는 데이터의 유지 보수성을 해친다.
  - 따라서, 객체가 가진 프로퍼티 값을 읽고 쓸 수 있는 특정 프로퍼티가 `getter`와 `setter`이다.

```javascript
const person = {
  _name: 'Tom',
  get name() {
    return this._name;
  },
  set name(value) {
    const str = value.charAt(0).toUpperCase() + value.substring(1);
    this._name = str;
  }
};

console.log(person.name); // Tom
person.name = 'jane';
console.log(person.name); // Jane
```

- 접근자 프로퍼티가 없는 객체에 접근자 프로퍼티를 추가하거나 정의할 때에는 `Object.defineProperty`나 `Object.defineProperties` 메서드를 사용한다.

```javascript
let user = {};

Object.defineProperty(user, 'name', {
  get() {
    return this._name;
  },
  set(value) {
    if (value.length < 4) {
      console.log('Too short! more than 4 characters');
      return;
    }
    this._name = value;
  }
});

user.name = 'Peter';
console.log(user.name); // Peter

user.name = 'Li'; // Too short! more than 4 characters
```

- 아래와 같이 **즉시 실행 함수(IIFE)** 로 감싸 클로저를 생성하면 데이터를 객체 외부에서 읽고 쓸 수 없도록 숨기는 동시에 접근자 프로퍼티로만 읽고 쓸 수 있게 할 수 있다.

```javascript
const person = (function() {
  let _name = 'Tom';
  return {
    get name() {
      return _name;
    },
    set name(value) {
      const str = value.charAt(0).toUpperCase() + value.substring(1);
      _name = str;
    }
  };
})();

console.log(person.name); // Tom

person.name = 'jane';
console.log(person.name); // Jane
```

- **참고:**
  - [프로퍼티 getter와 setter](https://ko.javascript.info/property-accessors#ref-614)

## 프로퍼티의 내부 속성

프로퍼티는 다음과 같은 세 가지 내부 속성을 논리값으로 갖는다.

- writable(쓰기 가능 여부)
- enumerable(열거 가능 여부)
- configurable(재정의 가능 여부)

**별도의 설정 없이 프로퍼티를 추가하면 위의 세 가지 내부 속성이 모두 `true`인 상태로 생성된다.**

### Object.getOwnPropertyDescriptor

또한, 값을 지닌 **데이터 프로퍼티** 와 `get`과 `set`을 지닌 **접근자 프로퍼티** 는 `Object.getOwnPropertyDescriptor`를 통해 확인했을 때 아래와 같은 차이가 있다.

```javascript
const robot = {
  _name: 'coderoid',
  serialNumber: 1543,
  get name() {
    console.log(this._name);
  },
  set name(value) {
    this._name = value;
  }
};

// 데이터 프로퍼티의 프로퍼티 디스크립터
console.log(Object.getOwnPropertyDescriptor(robot, 'serialNumber'));
// {value: 1543, writable: true, enumerable: true, configurable: true}

// 접근자 프로퍼티의 프로퍼티 디스크립터
console.log(Object.getOwnPropertyDescriptor(robot, 'name'));
// {enumerable: true, configurable: true, get: ƒ, set: ƒ}
```

### Object.defineProperty

이와 같은 **세 가지 속성은 임의로 설정이 가능** 한데, `Object.defineProperty`를 사용하면 된다.

```javascript
const spaceShip = {};

Object.defineProperty(spaceShip, 'name', {
  value: 'codeship',
  writable: true,
  enumerable: false,
  configurable: false
});

console.log(Object.getOwnPropertyDescriptor(spaceShip, 'name'));
// {value: "codeship", writable: true, enumerable: false, configurable: false}
```

`Object.defineProperty`를 사용할 때 생략된 속성은 `false` 혹은 `undefined`로 설정된다.

```javascript
const spaceShip = {};

Object.defineProperty(spaceShip, 'name', {
  value: 'codeship',
  writable: true,
  configurable: true
});

console.log(Object.getOwnPropertyDescriptor(spaceShip, 'name'));
// {value: "codeship", writable: true, enumerable: false, configurable: true}
```

그리고, `configurable` 속성이 `true`일 때에만 생략된 속성을 추가하거나 변경할 수 있다. `configurable`이 생략된 경우에는 자동으로 `false`가 설정되므로 생략된 속성의 추가 및 변경이 불가하다.
`configurable`이 `false`인데 속성을 추가 및 변경하려고 할 경우 `Uncaught TypeError: Cannot redefine property`가 뜬다.

단, `configurable`이 `false`더라도, **단 한 번 `writable`의 값을 `true`에서 `false`로 수정 가능하며, `false`에서 `true`로 수정은 불가하다.**

```javascript
const spaceShip = {};

Object.defineProperty(spaceShip, 'name', {
  value: 'codeship',
  writable: true,
  enumerable: false,
  configurable: true
});

console.log(Object.getOwnPropertyDescriptor(spaceShip, 'name'));
// {value: "codeship", writable: true, enumerable: false, configurable: true}

Object.defineProperty(spaceShip, 'name', {
  enumerable: true
});

console.log(Object.getOwnPropertyDescriptor(spaceShip, 'name'));
// {value: "codeship", writable: true, enumerable: true, configurable: true}
```

- **참고:**
  - [Object.getOwnPropertyDescriptor() - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)
  - [Object.defineProperty() - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
  - [프로퍼티 플래그와 설명자](https://ko.javascript.info/property-descriptors)

## 믹스인(mixin)

**믹스인** 은 특정 객체에 다른 객체가 갖고 있는 프로퍼티를 붙여 넣어 '뒤섞는' 기법을 말한다. 상속을 사용하지 않는 대신 특정 객체의 프로퍼티를 동적으로 다른 객체에 추가한다. 이때, 프로퍼티를 추가하는 방식은 깊은 복사가 아닌 얕은 복사에 해당한다.

```javascript
function mixin(target, source) {
  for (let property in source) {
    if (source.hasOwnProperty(property)) {
      target[property] = source[property];
    }
  }
  return target;
}

const obj1 = {a: 1, b: 2};
const obj2 = {b: 3, c: 4};
const obj = mixin(obj1, obj2);
console.log(obj); // {a: 1, b: 3, c: 4}
```

특히, `Object.assign`과 함께 사용하여 메서드를 복사했을 때 믹스인의 효과는 극대화된다.

```javascript
let sayHiMixin = {
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  }
};

class User {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(User.prototype, sayHiMixin); // 메서드 복사

new User('Dude').sayHi(); // Hello Dude

class codeAmeba extends User { // subclass
  constructor(name) {
    super(name);
  }
}

new codeAmeba('Sooyoung').sayBye(); // Bye Sooyoung
```

위와 같이 클래스(프로토타입) 상속과는 별개로 메서드 상속을 사용할 수 있게 해주는 것이 믹스인이다.

**참고:**
  - [믹스인](https://ko.javascript.info/mixins)

## 수정 메서드

배열 메서드는 크게 세 종류로 나눈다.

- **수정 메서드** : 원본 배열을 수정함
- **접근자 메서드** : 배열에 접근하여 새로운 배열을 반환
- **반복 메서드** : 배열의 요소들을 순회하며 작업을 수행

이번 시간에는 주요 수정 메서드들을 살펴본다.

### push

`push()`는 배열 마지막에 새로운 요소를 추가한다.

```javascript
let fruits = [‘apple’, ‘banana’, ‘melon’, ‘peach’, ‘blueberry’];

fruits.push(‘pineapple’);
console.log(fruits);
// ["apple", "banana", "melon", "peach", "blueberry", "pineapple"]
```

### pop

`pop()`은 배열 마지막 요소를 제거한다.

```javascript
let fruits = [‘apple’, ‘banana’, ‘melon’, ‘peach’, ‘blueberry’];

fruits.pop();
console.log(fruits);
// ["apple", "banana", "melon", "peach"]
```

### shift

`shift()`는 배열 맨 앞의 요소를 제거한 후 모든 요소를 왼쪽으로 이동 시킨다.

```javascript
let fruits = [‘apple’, ‘banana’, ‘melon’, ‘peach’, ‘blueberry’];

fruits.shift();
console.log(fruits);
// [‘banana’, ‘melon’, ‘peach’, ‘blueberry’]
```

### unshift

`unshift()`는 배열 맨 앞에 새로운 요소를 추가하며 기존의 요소들을 오른쪽으로 이동 시킨다.

```javascript
let fruits = [‘apple’, ‘banana’, ‘melon’, ‘peach’, ‘blueberry’];

fruits.unshift(‘pineapple’);
console.log(fruits);
// [‘pineapple’, ‘apple’, ‘banana’, ‘melon’, ‘peach’, ‘blueberry’]
```

### splice

`splice`는 전달하는 인자 개수에 따라 특정 위치에 요소를 추가, 삭제, 교체할 수 있다.
**`splice(시작 인덱스, 시작 인덱스부터 요소의 개수, 추가할 요소)`**

```javascript
let fruits = [‘apple’, ‘banana’, ‘melon’, ‘peach’, ‘blueberry’];

// 인덱스 1부터 2개의 요소를 제거하고, ‘lemon’과 ‘grape’를 추가
fruits.splice(1, 2, ‘lemon’, ‘grape’);
console.log(fruits);
// ["apple", "lemon", "grape", "peach", "blueberry"]

// 첫 번째 인수만 넘기면 해당 인덱스 이후의 요소 모두 제거
fruits.splice(2);
console.log(fruits);
// ["apple", "lemon"]

// 두 번째 인수에 0을 넘기면 제거 없이 새로운 요소만 추가
fruits.splice(1, 0, ‘cherry’);
console.log(fruits);
// [“apple", "cherry", "lemon"]
```

### sort

`sort()`는 배열 요소를 정렬할 때 사용한다. 비교함수를 넣어야 인접한 두 개 의 요소를 비교하여 정렬을 하며, 정렬 방식은 다음과 같다.

- f(a, b) < 0 이면 a를 b보다 작은 인덱스로 정렬
- f(a, b) == 0 이면 a와 b의 순서 그대로 둠
- f(a, b) > 0 이면 b를 a보다 작은 인덱스로 정렬

```javascript
let numbers = [4, 6, 8, 1, 15, 3, 36, 2, 51, 7, 19, 24];

numbers.sort(function(a, b) { return a - b; });
console.log(numbers); 
// [1, 2, 3, 4, 6, 7, 8, 15, 19, 24, 36, 51]
```

비교함수를 지정하지 않으면 요소를 문자열로 변환하여 사전순(abc)으로 정렬한다.

```javascript
let fruits = [‘apple’, ‘banana’, ‘melon’, ‘peach’, ‘blueberry’];

fruits.sort();
console.log(fruits); 
// ["apple", "banana", "blueberry", "melon", "peach"]
```

**참고:**
  - [배열과 메서드](https://ko.javascript.info/array-methods)

## 접근자 메서드

배열 메서드는 크게 세 종류로 나눈다.

- **수정 메서드** : 원본 배열을 수정함
- **접근자 메서드** : 배열에 접근하여 새로운 배열을 반환
- **반복 메서드** : 배열의 요소들을 순회하며 작업을 수행

이번 시간에는 주요 **접근자 메서드** 들을 살펴본다.

### join

`join()`은 모든 요소를 문자열로 변환 후 인수로 받은 문자와 연결하여 반환한다.

```javascript
const fruits = [‘apple’, ‘banana’, ‘melon’, ‘peach’, ‘blueberry’];

console.log(fruits.join(‘-‘));
// apple-banana-melon-peach-blueberry
```

### concat

`concat()`은 인수로 받은 값을 배열에 추가하여 새로운 배열을 생성한다.

```javascript
const fruits = [‘apple’, ‘banana’, ‘melon’, ‘peach’, ‘blueberry’];

console.log(fruits.concat(‘cherry’, ‘grape’));
// ["apple", "banana", "melon", "peach", "blueberry", "cherry", "grape"]
```

인수를 배열로 전달할 경우에는 자동으로 배열을 해체한 후 합친다.

```javascript
console.log(fruits.concat([‘cherry’, ‘grape’]));
// ["apple", "banana", "melon", "peach", "blueberry", "cherry", "grape"]
```

그러나, 가장 바깥의 배열만 자동으로 해체하기 때문에 중복된 배열은 배열 그대로 추가된다.

```javascript
console.log(fruits.concat([‘lemon’, [‘strawberry’, ‘watermelon’]]));
// ["apple", "banana", "melon", "peach", "blueberry", "lemon", [“strawberry”, “watermelon”]]
```

### slice

`slice()`는 선택된 만큼의 요소를 새로운 배열로 반환한다. 두 개의 인수를 받으며, 첫 번째 인수는 **시작 인덱스** , 두 번째 인수는 **끝 인덱스** 다.

`slice(시작, 끝)` : 시작 인덱스의 요소부터 끝 인덱스 바로 앞까지 새로운 배열로 반환한다. 두 번째 인수를 생략 가능하며 그럴 경우 시작 인덱스부터 모든 요소를 배열로 반환한다.

```javascript
const fruits = [‘apple’, ‘banana’, ‘melon’, ‘peach’, ‘blueberry’];

console.log(fruits.slice(1, 4));
// ["banana", "melon", "peach"]

console.log(fruits.slice(3));
// ["peach", "blueberry"]
```

### indexOf, lastIndexOf

`indexOf()`와 `lastIndexOf()`는 인수로 전달한 요소의 인덱스를 반환한다.
`indexOf()`는 배열 왼쪽부터 검색하고, `lastIndexOf()`는 배열 오른쪽부터 검색하여 반환한다. 만약, 찾는 요소가 배열에 없을 때에는 `-1`을 반환한다.
두 번째 인수는 검색을 시작할 인덱스이며 생략 가능하다.

```javascript
const numbers = [9, 2, 3, 5, 4, 8, 5, 6, 7];

console.log(numbers.indexOf(5)); // 3
console.log(numbers.lastIndexOf(5)); // 6
```

### toString, toLocaleString

`toString()`과 `toLocaleString()`은 배열의 요소를 문자열로 반환 후 쉼표로 연결하여 반환한다. 둘의 차이는 `toLocaleString()`의 경우 해당 지역에 맞는 문자열로 번역하여 반환한다는 점이다.

```javascript
const date = new Date();

console.log([‘Seoul’, ‘Republic of Korea’, date].toString());
// Seoul,Republic of Korea,Sat May 09 2020 20:00:19

console.log([‘Seoul’, ‘Republic of Korea’, date].toLocaleString());
// Seoul,Republic of Korea,2020. 5. 9. 오후 8:00:19
```

`Object.prototype`에 동일한 이름을 가진 메서드가 존재하지만, `Array`에 새롭게 정의한 메서드이므로 다른 메서드로 볼 수 있다.

```javascript
Object.prototype.toString === Array.prototype.toString // false

Object.prototype.toString === Array.prototype.__proto__.toString // true
```

**참고:**
  - [배열과 메서드](https://ko.javascript.info/array-methods)

## 반복 메서드

배열 메서드는 크게 세 종류로 나눈다.

- **수정 메서드** : 원본 배열을 수정함
- **접근자 메서드** : 배열에 접근하여 새로운 배열을 반환
- **반복 메서드** : 배열의 요소들을 순회하며 작업을 수행

이번 시간에는 주요 **반복 메서드** 들을 살펴본다.

### 반복 메서드의 공통 성질

1. 반복 메서드의 인수로 전달한 함수는 배열의 모든 요소들에 호출되어 적용되며, 희소 배열의 경우 비어있는 요소는 건너뜀
2. 반복 메서드 대부분은 첫 번째 인수로 함수를 받으며, 이 함수에는 **최대 세 개의 인수** 를 전달할 수 있다. 첫 번째 인수만 전달하는 경우가 많으며, 각각의 인수는 다음과 같다.
  - 첫 번째 인수(value): 현재 처리하는 요소의 값
  - 두 번째 인수(index): 현재 처리하는 요소의 인덱스
  - 세 번째 인수(array): 메서드가 적용되는 배열의 참조
3. `reduce`와 `reduceRight`를 제외한 반복 메서드에는 두 번째 인수를 지정할 수 있다. 두 번째 인수는 첫 번째 인수로 받은 함수 안의 `this`값이며 생략 가능하다.

### forEach

`forEach()`는 인수로 받은 함수를 요소 하나 하나마다 실행한다.

```javascript
const fruits = [‘apple’, ‘banana’, ‘melon’, ‘peach’, ‘blueberry’];

fruits.forEach((fruit) => console.log(`I Love ${fruit}`));
// I Love apple
// I Love banana
// I Love melon
// I Love peach
// I Love blueberry

fruits.forEach((fruit, index) => {
  console.log(`${fruit} is ${index + 1}th fruit.`);
});
// apple is 1th fruit.
// banana is 2th fruit.
// melon is 3th fruit.
// peach is 4th fruit.
// blueberry is 5th fruit.
```

### map

`map()`은 인수로 받은 함수를 요소별로 한 번씩 실행하며, 함수가 반환한 값으로 새로운 배열을 생성한다. `map()`의 인수로 넘기는 함수는 반드시 값을 반환해야 한다.

```javascript
const fruits = [‘apple’, ‘banana’, ‘melon’, ‘peach’, ‘blueberry’];
const myFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(myFruits); 
// [“APPLE”, “BANANA”, “MELON”, “PEACH”, “BLUEBERRY”]

const numbers = [1, 4, 9, 16, 25];
const sqrt = numbers.map(Math.sqrt);
console.log(sqrt); // [1, 2, 3, 4, 5]

const persons = [
  {name: ‘Tom’, age: 17},
  {name: ‘James’, age: 19},
  {name: ‘Sam’, age: 15}
];
const names = persons.map(person => person.name);
const ages = persons.map(person => person.age);
console.log(`names: ${names} / ages: ${ages}`);
// names: Tom,James,Sam / ages: 17,19,15

console.log(persons.map(person => person.name).map(name => name.length));
// [3, 5, 3]
```

### filter

`filter()`는 조건에 충족하는 요소만 걸러 새로운 배열로 반환한다.

```javascript
const fruits = [‘apple’, ‘banana’, ‘melon’, ‘peach’, ‘blueberry’];

const includeM = fruits.filter((fruit) => fruit.includes(‘m’));
console.log(includeM); // [“melon”]

const longerThan5Length = fruits.filter(fruit => fruit.length > 5);
console.log(longerThan5Length); // [“banana”, “blueberry”]
```

### reduce

`reduce()`는 배열을 기반으로 하나의 값을 도출할 때 사용한다. reduce의 인수로 넘기는 함수의 첫 번째 인수는 **accumulator(누산기)** 라고 할 수 있으며, 함수의 결과가 누적되어 저장되고 마지막 함수까지 호출되면 이 값이 `reduce()`의 반환값이 된다.

```javascript
const myNums = [1, 5, 3, 7, 9, 2];
const result = myNums.reduce((sum, current) => sum + current, 0);
console.log(result); // 27
```

`reduce()`에 전달된 함수는 위와 같이 두 개의 인수를 받는 게 일반적이다.
위 코드의 실행 절차에 따른 `sum`과 `current`의 상태 변화는 다음과 같다.

1. `sum = 0` / `current = 1`
2. `sum = 0 + 1` / `current = 5`
3. `sum = 0 + 1 + 5` / `current = 3`
4. `sum = 0 + 1 + 5 + 3` / `current = 7`
5. `sum = 0 + 1 + 5 + 3 + 7` / `current = 9`
6. `sum = 0 + 1 + 5 + 3 + 7 + 9` / `current = 2`
7. `return sum = 0 + 1 + 5 + 3 + 7 + 9 + 2`

끝의 `0`은 `reduce()`의 마지막 인수로 초깃값을 뜻하며 `sum`에 할당된다. 

```javascript
let arr = [1, 4, 6, 9];
let newResult = arr.reduce((sum, current) => sum + current);
console.log(newResult); // 20

let emptyArr = [];
let newResult = emptyArr.reduce((sum, current) => sum + current);
console.log(newResult); // TypeError: Reduce of empty array with no initial value
```

초깃값을 생략할 경우 배열의 첫 번째 요소를 초깃값으로 사용한다. 다만, 배열이 비었을 경우 초깃값으로 사용할 요소가 없기 때문에 `error`가 발생한다.

이러한 `reduce()`의 특성을 활용하면 꼭 요소들의 합 뿐만 아니라 다양한 방법으로 사용할 수 있다.

```javascript
let a = [3, 6, 7, 2];

// 모든 배열 요소의 곱
console.log(a.reduce((pre, val) => pre * val)); // 252

// 배열 요소 중 가장 큰 값
console.log(a.reduce((pre, val) => pre > val ? pre : val)); // 7

let names = ['Tom', 'Jane', 'Sam'];

// 문자열 연결
console.log(names.reduce((pre, val) => pre + ' ' + val)); // Tom Jane Sam
```

### reduceRight

`reduce()`와 유사한 메서드로 `reduceRight()`가 있다. 원리와 사용법은 동일하며 배열의 오른쪽 요소부터 작업을 수행한다는 점이 다르다.

**참고:**
  - [배열과 메서드](https://ko.javascript.info/array-methods)

## 유사 배열 객체(Array-like object)

배열은 아니지만 배열로 처리할 수 있는 객체로써 다음과 같은 특징이 있다.

1. 0 이상의 정수 값을 프로퍼티 이름으로 갖는다.
2. length 프로퍼티가 있으며, 요소를 추가하거나 삭제하면 length 프로퍼티 값이 바뀐다. 또한 length 프로퍼티 값을 줄이면 그에 따라 배열 크기가 줄어든다.
3. Array.prototype의 메서드를 상속받아 사용할 수 있다. 또한 instanceof 연산자로 평가하면 Array 생성자 함수로 생성된 객체로 표시된다.

```javascript
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
```
