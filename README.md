# JS Study
- 자바스크립트를 다시 공부하며 놓쳤던 개념들을 정리함.
- 교재: 모던 자바스크립트 입문(이소 히로시 지음)

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

## getMonth() 메서드에 +1을 해야 하는 이유
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
- 내부 스코프에서 필요한 식별자를 찾을 수 없을 때 외부 스코프의 렉시컬 환경과 외부 렉시컬 환경 참조를 점진적으로 탐색하게 되는데, 이처럼 내부와 외부 스코프가 이어진 것을 **스코프 체인(Scope Chain)** 이라고 부른다.
```javascript
const a = 'A';
function f() {
  const b = 'B';
  function g() {
    const c = 'C';
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