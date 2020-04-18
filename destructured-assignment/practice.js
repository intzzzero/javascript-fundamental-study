// 구조 분해 할당

// 배열
let users = ['codeAmeba', 'codeMonkey'];
let [firstUser, secondUser] = users;
console.log(users);
console.log(firstUser);

// 객체
let member = {
  name: 'codeAmeba',
  position: 'Front-end',
  skills: ['HTML', 'CSS', 'JavaScript'],
}

// let { name, age: howOld = 32, location: whereAreYou = 'Seoul' } = member;
// console.log(howOld);

let option = {
  title: 'menu',

};

let {width: w = 100, height: h = 200, title} = option;
console.log(title, w, h);
