// https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Object_prototypes

class Person {
	constructor(first, last, age, gender, interests) {
		this.name = {
			first: first,
			last: last
		};
		this.age = age;
		this.gender = gender === 'male' ? 'He' : 'She';
		this.interests = interests;	
	}
}
const john = new Person('John', 'Miles', 32, 'male', ['coding', 'reading']);
const jane = new Person('Jane', 'Carol', 29, 'female', ['painting', 'watching movie']);
const sam = new jane.constructor('Sam', 'Winchester', 25, 'male', ['singing', 'running']);



// https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Inheritance
// prototype 체인에 새로운 메서드를 추가하여 기존에 만들어진 인스턴스에도 모두 적용
// 프로토타입에 프로퍼티를 정의하는 경우는 없고, 주로 메서드만 정의함.
Person.prototype.farewell = function() {
	console.log(`${this.name.first} has left the building. Bye for now!`);
};

Person.prototype.bio = function() {
	console.log(
		`${this.name.first} ${this.name.last} is ${this.age} years old. ${this.gender} likes ${this.interests[0]} and ${this.interests[1]}.`
	);
};

Person.prototype.greeting = function(myName) {
	console.log(`Hello I'm ${this.name.first}. Nice to meet you ${myName}.`);
};

class Employee extends Person {
	constructor(first, last, age, gender, interests, position) {
		super(first, last, age, gender, interests);
		this.position = position;
	}
}

Person.prototype.introduceEmployee = function() {
	return console.log(`${this.name.first} is our ${this.position || 'good person'}.`);
}

const frank = new Employee('Frank', 'Colins', 28, 'male', ['sleeping', 'watching movie'], 'software engineer');
jane.position = 'designer';

