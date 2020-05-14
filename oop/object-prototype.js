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

	bio = function() {
		console.log(
			`${this.name.first} ${this.name.last} is ${this.age} years old. ${this.gender} likes ${this.interests[0]} and ${this.interests[1]}.`
		);
	};
	greeting = function(myName) {
		console.log(`Hello I'm ${this.name.first}. Nice to meet you ${myName}`);
	};
}
const john = new Person('John', 'Miles', 32, 'male', ['coding', 'reading']);
const jane = new Person('Jane', 'Carol', 29, 'female', ['painting', 'watching movie']);
