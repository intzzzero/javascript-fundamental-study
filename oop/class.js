// https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Object-oriented_JS

// 생성장 함수 이전의 객체 생성 함수
function CreateNewPerson(name) {
	var obj = {};
	obj.name = name;
	obj.greeting = function () {
		console.log(`Hello I'm ${this.name}.`);
	};
	return obj;
}

var sam = CreateNewPerson('Sam');

// 생성자 함수를 통한 객체 생성
function Person(first, last, age, gender, interests) {
	this.name = {
		first: first,
		last: last
	};
	this.age = age;
	this.gender = gender;
	this.interests = interests;
	this.bio = function () {
		console.log(
			`${this.name.first} ${this.name.last} is ${this.age} years old. ${
				this.gender === 'male' ? 'He' : 'She'
			} likes ${this.interests[0]} and ${this.interests[1]}.`
		);
	};
	this.greeting = function () {
		console.log(`Hello I'm ${this.name.first}.`);
	};
}
const john = new Person('John', 'Miles', 32, 'male', ['coding', 'reading']);
const jane = new Person('Jane', 'Carol', 29, 'female', ['painting', 'watching movie']);

// class 문법을 통한 객체 생성
class Animal {
	constructor(name, species, sound) {
		this.name = name;
		this.species = species;
		this.sound = sound;
	}
	greeting() {
		console.log(`${this.name} the ${this.species} is greeting "${this.sound}"`);
	}
}

const max = new Animal('Max', 'dog', 'WangWang!');
