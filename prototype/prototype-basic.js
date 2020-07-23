const cat = {
	name: 'kitty',
	getName: function() {
		return console.log(`my name is ${this.name}`);
	}
};

const dog = {
	name: 'doggy',
	old: 3
};

dog.__proto__ = cat;

// dog의 prototype을 강제적으로 cat을 향하게 하여
// dog에서도 cat의 메서드를 사용할 수 있게 되었다.

dog.getName(); // my name is doggy

const user = {
	name: 'Sooyoung',
	surname: 'Jeong',

	set fullName(value) {
		[ this.name, this.surname ] = value.split(' ');
	},

	get fullName() {
		return `${this.name} ${this.surname}`;
	}
};

const admin = {
	__proto__: user,
	isAdmin: true
};

admin.fullName = 'John Legend';
console.log(admin.fullName);
