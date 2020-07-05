console.log('How To Make Object');

/*
자바와 같은 일반적인 클래스 기반 객체 지향 언어는 클래스를 정의하고 필요한 시점에
new 연산자와 함께 인스턴스를 생성하는 방식을 이용한다. 자바스크립트 역시
es6에서 그와 같은 클래스 문법이 추가되었지만, 프로토타입을 기반으로 동작한다는
점에서 다소 차이가 있다.
*/

// 1. object literal
// 가장 일반적인 방법으로 {} 사이에 직접 key와 value를 작성하는 것이다.
// 내용 없이 {}만 써도 생성 가능하며, 빈객체(empty object)라고 한다.
const cass = {
  name: 'cass',
  price: 3000,
  author: 'JinroHite'
};
console.log(cass);


// 2. Object 생성자 함수
// new 연산자와 함께 Object 생성자 함수를 통해서도 객체를 만들 수 있다.
// 이때, Object 생성자는 프로토타입으로 Object.prototype을 지니며
// 그 하위에 Number.prototype, String.prototype 등 데이터타입에
// 따른 각 prototype과 생성자 함수가 존재한다.
// 다만, 효율성 측면에서 리터럴로 방식에 비해 번거로우며 더 나을 것이 없다.
const hite = new Object();
hite.name = 'hite';
hite.price = '2500';
console.log(hite.price);

// 3. 생성자 함수
// es6에서 클래스 문법이 등장하기 전까지 클래스처럼 사용하던 방식이다.
function Oblager(name, price) {
  this.name = name;
  this.price = price;
  this.howMuch = function() {
    console.log(`${this.name} is ${this.price}won`);
  };
}

const oblager1 = new Oblager('OB Lager', 4000);
oblager1.howMuch();

// 현재는 클래스 문법을 통해 다음과 같이 작성한다.
class Kloud {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
Kloud.prototype.howMuch = function() {
  console.log(`${this.name} is ${this.price}won`)
}

const kloud = new Kloud('Kloud', 3500);
kloud.howMuch();
