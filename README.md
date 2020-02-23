# JS Study
- 자바스크립트를 공부하며 주요 개념들을 정리함.
- 교재: 모던 자바스크립트 입문(이소 히로시 지음)

***

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
```javascript
console.log(square(5)); // 25

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
- 참고: 
  - https://ko.javascript.info/constructor-new
  - https://ko.javascript.info/class
  - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes