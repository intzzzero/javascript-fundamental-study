let goodJson = '{"name":"Sooyoung", "age":33}';

let user = JSON.parse(goodJson);
console.log(user); // {name: "Sooyoung", age: 33}

let badJson = "{ I am bad JSON }";
try {
  let user = JSON.parse(badJson); // <- 여기서 에러 발생
  console.log(user); // 에러 이후의 코드는 동작하지 않음
} catch (e) {
  console.log('데이터에 에러가 있어 재요청을 시도합니다.'); // 데이터에 에러가 있어 재요청을 시도합니다.
  console.log(e.name); // SyntaxError
  console.log(e.message); // Unexpected token I in JSON at position 2
}

// 위와 같은 경우에는 시스템적으로 에러가 발생할 수밖에 없는 상황이지만,
// 그렇지 않은 경우에는 throw문을 이용해서 직접 에러 메시지를 만들어야 한다.
// 예를 들어 데이터에 필요한 프로퍼티가 없을 때 명시적인 에러가 발생하도록 해보자.

let noNameJson = '{ "age": 33 }';

try {
  let user = JSON.parse(noNameJson); // 시스템적으로 에러가 발생할 이유가 없음
  if (!user.name) { // <- name이 없을 때 발생하는 에러 생성
    throw new Error('불완전한 데이터: name이 없습니다.');
  }
  console.log(user.name);
} catch (e) {
  console.log('JSON Error: ' + e.message); // JSON Error: 불완전한 데이터: name이 없습니다.
}
