function Person(name, first, second) {
	(this.name = name),
		(this.first = first),
		(this.second = second),
		(this.sum = function () {
			return this.first + this.second;
		});
}

const kim = new Person('Kim', 10, 20);
console.log(kim);
console.log(kim.sum());
