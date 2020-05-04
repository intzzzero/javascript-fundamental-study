// nested function
function sayHiBye(firstName, lastName) {
  function getFullName() {
    return firstName + ' ' + lastName;
  }
  console.log('Hello, ' + getFullName());
  console.log('Bye, ' + getFullName());
}

sayHiBye('John', 'Johnson');


function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}

let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

// lexical scoping - MDN
// 1. 글로벌 실행 컨텍스트 생성 -> 렉시컬 환경에 init() 등록
// 2. 글로벌 실행 컨텍스트 위에 init() 실행 컨텍스트 생성 -> init() 렉시컬 환경에 변수와 함수 등록, 외부 환경 참조에 글로벌 등록
// 3. init() 실행 컨텍스트 위에 displayName() 실행 컨텍스트 생성 -> displayName() 외부 환경 참조에서 변수 찾아 로그 실행
// 4. displayName() 실행 컨텍스트 종료
// 5. init() 실행 컨텍스트 종료
function init() {
  const name = 'codeAmeba';
  function displayName() {
    console.log(name);
  }
  displayName();
}
init();

// closure - MDN
// 클로저의 컨셉은 실행 컨텍스트 종료 후에도 렉시컬 환경을 유지하는 것에 있음
// displayName이 리턴되어 myFunc에 저장되고, displayName은 makeFunc의 지역변수를 참조하고 있음.
function makeFunc() {
  const name = 'codeAmeba';
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();