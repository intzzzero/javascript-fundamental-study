// 구조 분해 할당

// 배열
let users = ['codeAmeba', 'codeMonkey'];
let [firstUser, secondUser] = users;
console.log(users);
console.log(firstUser);

// 객체
const member = {
  name: 'codeAmeba',
  position: 'Front-end',
  skills: ['HTML', 'CSS', 'JavaScript'],
}

const { name, position, skills } = member;
console.log(name, position, skills);