/*
this는 호출하는 위치에 따라 달라지며, 크게 다섯 가지 경우로 나눌 수 있다.
1. 전역에서 호출
2. 함수 호출
3. 메소드 호출
4. 콜백 호출
5. 생성자함수 호출
*/

// 1. 전역에서 호출 : 브라우저에서는 window, Node에서는 global
console.log(this); // Window
console.log(this === window); // true


// 2. 일반 함수 호출 : 함수 내부에서 호출하면 무조건 window
function a() {
  console.log(this); // Window
}
a();

function b() {
  function c() {
    console.log(this); // Window
  }
  c();
}
b();

// 메소드 내부의 일반 함수에서도 window
// 그러나 화살표 함수에서는 외부환
const d = {
  e: function() {
    function f() {
      console.log(this); // Window
    }
    f();
  },
  g: function() {
    const h = () => {
      console.log(this); // {e: ƒ, g: ƒ}
    }
    h();
  }
}
d.e();
d.g();