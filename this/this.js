/*
this는 호출하는 방식에 따라 달라지며, 크게 다섯 가지 경우로 나눌 수 있다.
1. 전역에서 호출
2. 함수 호출
3. 메소드 호출
4. 콜백 호출
5. 생성자함수 호출
*/
// https://poiemaweb.com/js-this
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this

// 1. 전역에서 호출 : 브라우저에서는 window, Node에서는 global
console.log(this); // Window
console.log(this === window); // true


// 2. 일반 함수 호출 : 함수 내부에서 호출하면 무조건 window
function normalFunc1() {
  console.log(this); 
}
normalFunc1(); // Window

function normalFunc2() {
  function innerFunc() {
    console.log(this); 
  }
  innerFunc();
}
normalFunc2(); // Window

// 메소드 내부의 일반 함수에서도 window
// 그러나 화살표 함수는 자동으로 외부 환경에 바인딩 되어 외부 함수가 나온다.
const obj1 = {
  method: function() {
    function innerFunc() {
      console.log(this); 
    }
    innerFunc();
  },
  secondMethod: function() {
    const arrowFunc = () => {
      console.log(this); 
    }
    arrowFunc();
  }
}
obj1.method(); // Window
obj1.secondMethod(); // {e: ƒ, g: ƒ}

// 3. 메소드 호출에서의 this는 . 앞에 있는 것. 즉, 호출한 객체
const obj2 = {
  prop: 'Hello world',
  method: function() {
    console.log(this.prop);
  }
}
obj2.method(); // Hello world


// 그러나 메소드 내부함수의 경우는 또 얘기가 달라진다.
// 이때는 일반 함수에서의 this와 마찬가지로 전역을 가리킨다.
var prop = 'This is window';
const obj3 = {
  prop: 'Bye world',
  method: function() {
    console.log(this.prop);

    function innerFunc() {
      console.log(this.prop);
    }
    innerFunc();
  }
}
obj3.method(); // Bye world 
                // This is window

// 위와 같은 문제에 대처하기 위한 방법으로 this를 변수에 할당하는 우회법이 있다.
// 또는 내부함수를 화살표 함수로 작성하면 외부환경인 메소드의 this를 그대로 바인딩한다.
const obj4 = {
  prop: 'Nice to meet you world',
  method: function() {
    const that = this;
    function innerFunc() {
      console.log(that.prop);
    }
    innerFunc();
  },
  secondMethod: function() {
    const innerArrow = () => {
      console.log(this.prop);
    }
    innerArrow();
  }
}
obj4.method(); // Nice to meet you world
obj4.secondMethod(); // Nice to meet you world

// 4. 콜백에서의 this는 기본적으로는 일반 함수처럼 전역을 가리킨다.
// 그러나 call, apply, bind 메서드를 이용하는 방법이 있다.
const obj5 = {
  prop: 'This is callback',
  method: function() {
    setTimeout(() => {
      console.log(this.prop);
    }, 1000);
  },
  method2: function() {
    setTimeout(function() {
      console.log(this.prop);
    }.bind(obj5), 1000); // binding
  }
}

// 화살표 함수로 작성하면 외부 환경에 바인딩
obj5.method(); // This is callback
obj5.method2(); // This is callback


// call, apply, bind 메서드를 통해 this를 명시적으로 바인딩 할 수 있다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
function a(x, y, z) {
  console.log(this, x, y, z);
}
var b = {
  c: 'Hello'
};
a.call(b, 1, 2, 3); // {c: "Hello"} 1 2 3
a.apply(b, [1, 2, 3]); // {c: "Hello"} 1 2 3

var c = a.bind(b);
c(1, 2, 3); // {c: "Hello"} 1 2 3

var d = a.bind(b, 1, 2);
d(3); // {c: "Hello"} 1 2 3


const myCallback = function() {
  console.log(this);
};

const obj6 = {
  prop: 'This is object',
  method: function(cb) {
    cb(this);
  },
  method2: function(cb) {
    cb.call(this);
  }
};

obj6.method(myCallback); // window
obj6.method2(myCallback); // {prop: "This is object", method: ƒ, method2: ƒ}



// 5. 생성자 함수에서의 this는 instance
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
}
Animal.prototype.whatIsThis = function() {
  console.log(this);
};

const dog = new Animal('Max', 'Dog');
dog.whatIsThis(); // Animal {name: "Max", species: "Dog"}

const cat = new Animal('Alice', 'Cat');
cat.whatIsThis(); // Animal {name: "Alice", species: "Cat"}
