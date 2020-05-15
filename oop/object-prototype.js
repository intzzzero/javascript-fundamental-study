// https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Object_prototypes

class Person {
	constructor(first, last, age, gender, interests) {
		this.name = {
			first: first,
			last: last
		};
		this.age = age;
		this.gender = gender;
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
		`${this.name.first} ${this.name.last} is ${this.age} years old. ${this.gender === 'male' ? 'He' : 'She'} likes ${this.interests[0]} and ${this.interests[1]}.`
	);
};

Person.prototype.greeting = function(myName) {
	console.log(`Hello I'm ${this.name.first}. Nice to meet you ${myName}.`);
};

class Employee extends Person {
	constructor(first, last, age, gender, interests, position) {
		super(first, last, age, gender, interests);
		this._position = position;
	}

	// _(under bar)로 변수명을 구분하지 않으면 에러 발생함
	get position() {
		return this._position;
	}
	set position(newPosition) {
		this._position = newPosition;
	}
}

Person.prototype.introduceEmployee = function() {
	return console.log(`${this.name.first} is our ${this.position || 'good person'}.`);
}

const frank = new Employee('Frank', 'Colins', 28, 'male', ['sleeping', 'watching movie'], 'software engineer');
jane.position = 'designer';

/*
상속을 구현할때 상속 레벨을 너무 깊게 하지 말고, 
메소드와 속성들이 정확히 어디에 구현되어 있는지 항상 인지해야 합니다. 
브라우저 내장 객체의 prototype 역시 일시적으로 수정이 가능하지만 
정말로 필요한 경우를 제외하고는 건드리지 말아야 합니다. 
너무 깊은 상속은 디버그 할 때 끝없는 혼돈과 고통만을 줄 겁니다.
- MDN -
*/

