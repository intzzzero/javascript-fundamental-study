const robot = {
  name: 'coderoid',
  serialNumber: 1543,
  author: 'Sooyoung Jeong'
};

const robotCopy = robot;
robotCopy.name = 'copyroid';

console.log(robot.name); // copyroid

// 객체는 기본적으로 참조에 의한 전달(pass by reference)이 이루어지므로
// 복사본을 수정하면 원본까지 함께 바뀌어버린다.

const rocket = {
  name: 'space x',
  serialNumber: 6734,
  author: 'Sooyoung Jeong'
};

const rocketCopy = Object.assign(rocket);
rocketCopy.name = 'space y';

console.log(rocket.name);